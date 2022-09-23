import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Anish",
  //     email: "anish@gmail.com",
  //   },
  //   {
  //     id: "2",
  //     name: "Dipesh",
  //     email: "dipesh@gmail.com",
  //   },
  // ];
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    // console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  // remove
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  // this is use for get item
  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    // console.log(retrieveContacts);
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  // this is use for set item(add)
  useEffect(() => {
    if (contacts?.length) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="add"
          element={<AddContact addContactHandler={addContactHandler} />}
        />
        <Route
          path="/"
          element={
            <ContactList
              contacts={contacts}
              getContactId={removeContactHandler}
            />
          }
        />
        {/* <AddContact addContactHandler={addContactHandler} /> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </Routes>
    </>
  );
}

export default App;
