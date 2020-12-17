import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import "./App.css";
import GenderSection from "./sections/gender";
import EntourageSection from "./sections/entourage";
import DenizenTypeSection from "./sections/denizen";
import AgeSection from "./sections/age";
import AppearanceSection from "./sections/appearance";
import NatureSection from "./sections/nature";
import OriginSection from "./sections/origins";
import RelationshipSection from "./sections/relationship";
import ReasonSection from "./sections/reason";
import PerksSection from "./sections/perks";
import TalentsSection from "./sections/talents";
import HobbiesSection from "./sections/hobbies";
import ComplicationsSection from "./sections/complications";
import Title from "./components/title";
import ApplicaionBar from "./components/app-bar";

function App() {
  return (
    <div className="App">
      <Title />
      <div style={{ padding: "16px" }}>
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
        <Accordion>
          <AccordionSummary>
            <Typography>What Makes You Special</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ReasonSection />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>Perks</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PerksSection />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>Talents</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TalentsSection />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>Hobbies</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <HobbiesSection />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>Complications</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ComplicationsSection />
          </AccordionDetails>
        </Accordion>
      </div>
      <ApplicaionBar />
    </div>
  );
}

export default App;
