import styled from "styled-components";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
export const ContactConatiner = styled.footer`
  background-color: #101522;
`;

export const ContactWrapper = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
export const ContactList = styled.h1`
  margin-top: 0rem;
  margin-bottom: 2rem;
  color: #fff;
  font-size: 20px;
  font-family: "Courier New", Courier, monospace;
  text-decoration: underline;
  text-align: center;
  max-width: 500px;
`;
export const ContactIcon = styled(ImPhone)`
  color: #fff;
`;

export const ContactIconE = styled(MdEmail)`
  color: #fff;
`;
export const ContactText = styled.h4`
  color: #fff;
  padding: 0.5rem;
`;
export const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
