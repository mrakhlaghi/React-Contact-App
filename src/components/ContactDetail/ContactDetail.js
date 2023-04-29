import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ContactDetail.css";

const ContactDetail = () => {
  const location = useLocation();
  const { name, email, id } = location.state;
  return (
    <div className="contactDetail">
      <div className="contactDetail_content">
        <span className="contactDetail-section">
          <p className="tittle">user name is : </p>
          <p className="tittle__content">{name}</p>
        </span>
        <span className="contactDetail-section">
          <p className="tittle">user email is : </p>
          <p className="tittle__content">{email} </p>
        </span>
        <span className="contactDetail-section">
          <p className="tittle">user id is : </p>
          <p className="tittle__content">{id} </p>
        </span>
      </div>
      <Link to="/" className="backLink">back to contact list</Link>
    </div>
    
  );
};

export default ContactDetail;
