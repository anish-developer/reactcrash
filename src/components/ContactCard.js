import { FaTrashAlt, FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  console.log(props.contact);
  return (
    <div className="item">
      <div className="content">
        <hr />
        <Link
          //   to={{`/contact/${id}`},
          //   state:{ contact: props.contact }
          //   style={{ textDecoration: "none" }}}
          to={{
            pathname: `/contact/${id}`,
            state: { contact: props.contact },
          }}
        >
          <div className="header">
            <FaRegUserCircle style={{ margin: "2px" }} />
            {name}
          </div>
          <div>{email}</div>
        </Link>
        <FaTrashAlt
          style={{ color: "red", marginLeft: "80em" }}
          onClick={() => props.clickHandler(id)}
        />
      </div>
    </div>
  );
};

export default ContactCard;
