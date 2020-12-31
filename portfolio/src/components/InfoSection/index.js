import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  InfoP1,
  ImgWrap,
  Img,
  InfoColumn,
  Facebook,
  Github,
  Linkedin,
} from "./InfoElements";
const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  darkText,
  headLine,
  description,
  id,
  connect,
  information,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <InfoP1 darkText={darkText}>{information}</InfoP1>
                <TopLine>{connect}</TopLine>
                <InfoColumn>
                  <a href="https://www.facebook.com/anish.gyawali.33/">
                    <Facebook size={25} />
                  </a>
                  <a href="https://www.linkedin.com/in/anish-gyawali-375029128/">
                    <Linkedin size={25} />
                  </a>
                  <a href="https://github.com/anish-gyawali">
                    <Github size={25} />
                  </a>
                </InfoColumn>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src="https://media-exp1.licdn.com/dms/image/C4D35AQFTtZrOa1G7ng/profile-framedphoto-shrink_400_400/0/1608310370702?e=1609516800&v=beta&t=L8WXVNTAdesE2P9UAuPnOpy3RV40jf122DkGeTDvGtg" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
