import React, { useContext } from "react";

import { FamilyContext } from "../App";

import Parents from "./Parents";
import Siblings from "./Siblings";

// React Hooks way to use Context API 😁🎉
export default function FamilyTree() {
  const value = useContext(FamilyContext); // the data for "family" is provided via Context
  // const { activeFamily } = useContext(FamilyContext); // the data for "family" is provided via Context
  return (
    <section className="FamilyTree">
      <h1>{value.activeFamily.familyName}</h1>
      <h2>Parents</h2>

      {/* Pass data down as a prop */}
      <Parents family={value.activeFamily} />

      <div className="spacer" />
      <h2>Siblings</h2>

      {/* Siblings will consume data from Context using render props */}
      <Siblings />
    </section>
  );
}
