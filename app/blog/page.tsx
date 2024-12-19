"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://anish-gyawali.medium.com/feed"
        );
        const data = await response.json();
        const mediumPosts = data.items.map((item: any) => ({
          title: item.title,
          link: item.link,
          pubDate: new Date(item.pubDate).toLocaleDateString(),
          contentSnippet: item.description.replace(/<[^>]*>?/gm, "").substring(0, 200),
        }));
        // Only keep the 6 most recent posts
        setPosts(mediumPosts.slice(0, 6));
      } catch (error) {
        console.error("Error fetching Medium posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  return (
    <div className="min-h-screen bg-primary text-accent py-16 px-4">
      <section className="max-w-6xl mx-auto text-center mb-12">
        <motion.h1
          className="text-4xl font-bold text-highlight mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Blogs
        </motion.h1>
        <motion.p
          className="text-xl font-light mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Explore my recent writings and thoughts published on{" "}
          <a
            href="https://anish-gyawali.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-highlight underline"
          >
            Medium
          </a>
          .
        </motion.p>
      </section>

      {loading ? (
        <div className="text-center text-xl font-semibold text-highlight">
          Loading blogs...
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-secondary p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h2 className="text-2xl font-bold text-highlight mb-4">
                {post.title}
              </h2>
              <p className="text-sm text-light mb-4">{post.pubDate}</p>
              <p className="text-base text-light mb-6">
                {post.contentSnippet}...
              </p>
              <Link href={post.link} target="_blank">
                <motion.button
                  className="px-4 py-2 bg-highlight text-secondary font-semibold rounded-lg hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </section>
      )}

      {/* View All Blogs on Medium */}
      {!loading && (
        <section className="text-center mt-12">
          <a
            href="https://anish-gyawali.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="px-8 py-4 bg-secondary text-highlight font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Blogs on Medium
            </motion.button>
          </a>
        </section>
      )}
    </div>
  );
};

export default BlogPage;
