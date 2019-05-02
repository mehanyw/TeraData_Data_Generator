import React, { Component } from "react";
import { Jumbotron, Button, Container } from "reactstrap";

class PageHeader extends Component {
  render() {
    return (
      <Jumbotron>
        <Container>
          <h1 className="display-3">Data Generation Tool</h1>
          <hr className="my-2" />
          <em>GENERATE DATA CUSTOMIZED TO YOUR TESTING NEEDS</em>
          <br />
          <br />
          <Button color="primary">Our GitHub Repo</Button>
        </Container>
      </Jumbotron>
    );
  }
}

export default PageHeader;
