import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, getContactId }) => {
  // console.log(contacts);

  const deleteContactHandler = (id) => {
    getContactId(id);
  };
  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <>
      <div className="container">
        <div className="mt-4 col" style={{ marginTop: "10px" }}>
          {renderContactList}
        </div>
      </div>
    </>
  );
};

export default ContactList;
