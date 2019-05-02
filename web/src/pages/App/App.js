import React from "react";
import { Container } from "reactstrap";
import "./App.css";
import PageHeader from "../../components/PageHeader";
import { GeneratorForm } from "../../components/GeneratorForm";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <Container>
        <GeneratorForm />
      </Container>
    </div>
  );
}

export default App;
