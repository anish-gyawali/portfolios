import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "reactjs.org",
      "angular.io",
      "upload.wikimedia.org",
      "nodejs.org",
      "spring.io",
      "simpleicons.org",  // Add this line
      "d1.awsstatic.com",
      "docker.com",
      "upload.wikimedia.org",
    ],
  },
};

export default nextConfig;
