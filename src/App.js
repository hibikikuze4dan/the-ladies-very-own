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
import AppearanceSection from "./sections/appearance";
import NatureSection from "./sections/nature";
import OriginSection from "./sections/origins";
import RelationshipSection from "./sections/relationship";

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
        <Accordion>
          <AccordionSummary>
            <Typography>Your Lady's Appearance</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AppearanceSection />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>Your Lady's Nature</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <NatureSection />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>Your Lady's Origins</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <OriginSection />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>Your Relationship With Your Lady</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RelationshipSection />
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
