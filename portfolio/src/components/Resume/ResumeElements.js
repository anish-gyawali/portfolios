import styled from "styled-components";

export const ResumeConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;

export const ResumeWrapper = styled.div`
  display: grid;
  margin-top: 3rem;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-top: 3rem;
    height: 860px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 3rem;
    height: 500px;
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
