import React, { Component } from "react";
import { Form, Button, Input, Label, Col, Row, FormGroup } from "reactstrap";
import { GeneratorInput as GeneratorColumnInput } from "./GeneratorColumnInput";

class GeneratorForm extends Component {
  constructor() {
    super();
    this.dataTypeChanged = this.dataTypeChanged.bind(this);
    this.numColsChanged = this.numColsChanged.bind(this);
    this.colOptionsChanged = this.colOptionsChanged.bind(this);
    this.appendInput = this.appendInput.bind(this);
    this.generateData = this.generateData.bind(this);
    this.state = {
      numRows: 0,
      fileType: "CSV",
      colTypeArray: ["integer"],
      numColsArray: [0],
      colOptsArray: [""],
      idArray: ["0"]
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

  appendInput() {
    var newInput = `${this.state.idArray.length}`;
    this.setState(prevState => ({
      colTypeArray: prevState.colTypeArray.concat(["integer"]),
      numColsArray: prevState.numColsArray.concat([0]),
      colOptsArray: prevState.colOptsArray.concat([""]),
      idArray: prevState.idArray.concat([newInput])
    }));
  }

  //TODO
  download(data) {
    const blob = new Blob([data], { type: 'text/csv' } );
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'data.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  generateData(options) {
    const csvRows = [];

    // Push Headers to CSV
    var headers = "";
    var numCols = this.state.colTypeArray.length;
    for (var i = 0; i < numCols; i++) {
      headers = headers.concat(this.state.colTypeArray[i]);
      if (i !== numCols-1)
        headers = headers.concat(',');
    }
    csvRows.push(headers);
    console.log(csvRows);
    

    // Output Cols to File
    var low = 0;
    var high = 100;
    var numRows = this.state.numRows;
    for (var j = 1; j <= numRows; j++) {
      csvRows[j] = Math.floor((Math.random() * high) + low);
      console.log('j: ', j);
      console.log('number: ', csvRows[j]);
    } 
    console.log(csvRows);

    this.download(csvRows);
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

        {this.state.idArray.map(id => (
          <GeneratorColumnInput
            id={id}
            key={id}
            dataTypeChanged={this.dataTypeChanged}
            numColsChanged={this.numColsChanged}
            colOptionsChanged={this.colOptionsChanged}
          />
        ))}
        <Button color="secondary" onClick={this.appendInput}>
          Add Field
        </Button>
        <br />
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
              onChange={e => {
                this.setState({ numRows: e.target.value });
                console.log(this.state);
              }}
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
        <Button color="success" onClick={this.generateData}>
          Generate Data
        </Button>
      </Form>
    );
  }
}

export { GeneratorForm };
