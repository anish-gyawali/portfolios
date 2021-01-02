import React from "react";
import {
  ContactConatiner,
  ContactWrapper,
  ContactList,
  ContactIcon,
  ContactIconE,
  ContactText,
  ContactColumn,
} from "./ContactElements";
const Contact = () => {
  return (
    <>
      <ContactConatiner id="contact">
        <ContactWrapper>
          <ContactList>Feel Free To Contact Me:</ContactList>
          <ContactColumn>
            <ContactText>
              <ContactIcon size={20} />
              {" +1 (346) 775-7412"}
            </ContactText>

            <ContactText>
              <ContactIconE size={20} />
              {" anish.gyawali@selu.edu"}
            </ContactText>
          </ContactColumn>
        </ContactWrapper>
      </ContactConatiner>
    </>
  );
};

export default Contact;
