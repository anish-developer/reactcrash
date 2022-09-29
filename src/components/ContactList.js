import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
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
        <h2>
          Contact List
          <Link to="/add">
            <Button variant="primary" style={{ marginLeft: "60em" }}>
              Add Contact
            </Button>
          </Link>
        </h2>
        <div className="mt-4 col" style={{ marginTop: "10px" }}>
          {renderContactList}
        </div>
      </div>
    </>
  );
};

export default ContactList;
