import { useEffect, useRef, useState } from "react";
import Contact from "../Contact/Contact";
import "./ContactList.css";
import { Link } from "react-router-dom";
import getContacts from "../../services/getContactsService";
import deleteContact from "../../services/deleteContactService";

const ContactList = (props) => {
  const [contacts, setContacts] = useState(null);
  const [allContacts, setAllContacts] = useState(null);
  const [searchItem, setSearchItem] = useState("");
  const searchInputRef = useRef();

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
      setAllContacts(data);
      searchInputRef.current.focus();
      // console.log(searchInputRef.current.focus());
    };
    try {
      fetchContacts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const searchChangeHandler = (e) => {
    const search = e.target.value;
    setSearchItem(search);
    if (search !== "") {
      const filteredContacts = allContacts.filter((c) => {
        return Object.values(c)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setContacts(filteredContacts);
    } else {
      setContacts(allContacts);
    }
  };
  const deleteContactHandler = async (id) => {
    try {
      const filteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
      await deleteContact(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="listWrapper">
      <div className="contactList">
          <h2> Contacts</h2>
        <div className="listHeader">
          <div className="search">
            <p className="">search:</p>
            <input
              type="text"
              value={searchItem}
              ref={searchInputRef}
              onChange={searchChangeHandler}
            />
          </div>
          <Link to="/add">
            <button className="add-btn">Add</button>
          </Link>
        </div>
        {contacts ? (
          contacts.map((contact) => {
            return (
              <Contact
                key={contact.id}
                contact={contact}
                onDelete={deleteContactHandler}
              />
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default ContactList;
