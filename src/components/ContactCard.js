import { FaTrashAlt, FaRegUserCircle } from "react-icons/fa";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <div className="content">
        {/* <hr /> */}

        <hr />
        <div className="header">
          <FaRegUserCircle style={{ margin: "2px" }} />
          {name}
        </div>
        <div>
          {email}
          <FaTrashAlt
            style={{ color: "red", marginLeft: "80em" }}
            onClick={() => props.clickHandler(id)}
          />
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
