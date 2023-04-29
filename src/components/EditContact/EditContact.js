import "./EditContact.css";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import updateContact from "../../services/updateContactService";

const EditContact = (props) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const location = useLocation();
  const InputRef = useRef();
  useEffect(() => {
    InputRef.current.focus();
    const localFetch = async () => {
      setContact({ name: location.state.name, email: location.state.email });
    };
    localFetch();
  }, []);

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  

  const formSubmit = async(e) => {
    if (!contact.name || !contact.email) {
      alert("all fields are mandatory !");
      return;
    }
    e.preventDefault();
    // updateContactHandler(contact, location.state.id);
    try {
      await updateContact(location.state.id, contact);
      setContact({ name: "", email: "" });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form className="editForm" onSubmit={formSubmit}>
        <div className="formControl">
          <label>name :</label>
          <input
            type="text"
            name="name"
            ref={InputRef}
            value={contact.name}
            onChange={changeHandler}
          />
        </div>
        <div className="formControl">
          <label>email : </label>
          <input
            type="text"
            name="email"
            value={contact.email}
            onChange={changeHandler}
          />
        </div>
        <button type="submit"> Edit Contact</button>
      </form>
    </>
  );
};

export default EditContact;
