import React, { Component } from "react";
import { Form, Button, Input, Label, Col, Row, FormGroup } from "reactstrap";
import { GeneratorInput as GeneratorColumnInput } from "./GeneratorColumnInput";

class GeneratorForm extends Component {
  constructor() {
    super();
    this.dataTypeChanged = this.dataTypeChanged.bind(this);
    this.numColsChanged = this.numColsChanged.bind(this);
    this.colOptionsChanged = this.colOptionsChanged.bind(this);
    this.generateData = this.generateData.bind(this);
    this.state = {
      numRows: "",
      fileType: "",
      colTypeArray: [],
      numColsArray: [],
      colOptsArray: []
    };
  }

  dataTypeChanged(id, type) {
    var colTypeArray = { ...this.state.colTypeArray };
    colTypeArray[id] = type;
    this.setState({ colTypeArray });
  }

  numColsChanged(id, numCols) {
    var numColsArray = { ...this.state.numColsArray };
    numColsArray[id] = numCols;
    this.setState({ numColsArray });
  }

  colOptionsChanged(id, colOpts) {
    var colOptsArray = { ...this.state.colOptsArray };
    colOptsArray[id] = colOpts;
    this.setState({ colOptsArray });
  }

  generateData(options) {
    // TO DO: two possible options for implementation (TBD):
    //    (1) perform the data file export or (PROBABLY THIS OPTION)
    //    (2) send the options as a paramter to a function in app.py to export the data
  }

  render() {
    return (
      <Form>
        <h5>Column Options</h5>
        <hr />
        <Row>
          <Col md={3}>
            <Label>Column Data Type</Label>
          </Col>
          <Col md={3}>
            <Label>Number of Columns</Label>
          </Col>
        </Row>
        <GeneratorColumnInput
          id={0}
          dataTypeChanged={this.dataTypeChanged}
          numColsChanged={this.numColsChanged}
          colOptionsChanged={this.colOptionsChanged}
        />
        <br />
        <h5>Row & File Options</h5>
        <hr />
        <FormGroup row>
          <Col md={3}>
            <Label>Number of Rows</Label>
            <Input
              type="number"
              name="numrows"
              id="numrows"
              onChange={e => this.setState({ numRows: e.target.value })}
            />
          </Col>
          <Col md={2}>
            <Label>File Format</Label>
            <Input
              type="select"
              name="filetype"
              id="filetype"
              onChange={e => this.setState({ fileType: e.target.value })}
            >
              <option>CSV</option>
              <option>Excel</option>
              <option>JSON</option>
            </Input>
          </Col>
        </FormGroup>
        <hr />
        <Button type="submit" color="success" onClick={this.generateData}>
          Generate Data
        </Button>
      </Form>
    );
  }
}

export { GeneratorForm };
