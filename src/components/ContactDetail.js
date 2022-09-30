import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import User from "../images/user/user.png";
const ContactDetail = (props) => {
  console.log(props.props);
  const contact = useParams();
  console.log(contact);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={User} />
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>{contact.email}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ContactDetail;
