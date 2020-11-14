import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import GenderSection from "./sections/gender";
import EntourageSection from "./sections/entourage";
import DenizenTypeSection from "./sections/denizen";
import AgeSection from "./sections/age";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Accordion>
          <AccordionSummary>
            <Typography>Gender</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <GenderSection />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>Entourage</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <EntourageSection />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>Denizen Type</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DenizenTypeSection />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>Your Lady's Age</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AgeSection />
          </AccordionDetails>
        </Accordion>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
