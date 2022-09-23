import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault();
    // this.state.name === "" || this.state.email === ""
    //   ? alert("All the fields are mandatory!")
    //   : console.log(this.state);
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    // console.log(this.state);
  };
  render() {
    return (
      <>
        <div className="container">
          <h2>Add Contact</h2>
          <Form className="justify center" onSubmit={this.add}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </div>
      </>
    );
  }
}

export default AddContact;
