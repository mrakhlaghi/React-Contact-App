import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddContact.css";
import addContact from "../../services/addContactService";
const AddContact = (props) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const InputRef = useRef();


  useEffect(()=>{
    InputRef.current.focus();
  },[])
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const formSubmit = async (e) => {
    if (!contact.name || !contact.email) {
      alert("all fields are mandatory !");
      return;
    }
    e.preventDefault();
    try {
      // setContacts([...contacts, { id: new Date().getTime(), ...contact }]);
      await addContact(contact);
      setContact({ name: "", email: "" });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form  onSubmit={formSubmit}>
        <div className="formControl">
          <label>name</label>
          <input
            type="text"
            name="name"
            value={contact.name}
            ref={InputRef}
            onChange={changeHandler}
          />
        </div>
        <div className="formControl">
          <label>email </label>
          <input
            type="text"
            name="email"
            value={contact.email}
            onChange={changeHandler}
          />
        </div>
        <button type="submit"> Add Contact</button>
      </form>
    </>
  );
};

export default AddContact;
