import { Link } from "react-router-dom";
import "./Contact.css"
const Contact = ({ contact, onDelete }) => {
  const { name, email, id } = contact;
  return (
    <div className="item" key={id}>
      <Link to={`contact/${id}`} state={contact}>

        <div className="item_container">
          <i className="fa-solid fa-user"></i>
          <div className="contact-text">
            <p>name: {name}</p>
            <p>email: {email}</p>
          </div>
        </div>
      
      </Link>


      <div>
        <Link to={`edit/${id}`} className="editBtn" state={contact}>
          {/* <button className="editBtn">Edit</button> */}
          <i className="fa-regular fa-pen-to-square"></i>
        </Link>

        <span className="deleteBtn" onClick={() => onDelete(id)}>
          <i className="fa-regular fa-trash-can"></i>
        </span>
      </div>

    </div>
  );
};

export default Contact;
