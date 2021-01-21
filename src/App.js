import React, { useState, createContext } from "react";

import { data } from "./data";

import FamilyTree from "./components/FamilyTree";
import "./styles.scss";

// Step 1: Create a context object
export const FamilyContext = createContext();
console.log(FamilyContext);
// const { Provider, Consumer } = createContext();

export default function App() {
  const [families] = useState(data);
  const [activeFamily, setActiveFamily] = useState(families[0]);

  return (
    <div className="App">
      <section className="header">
        <h1>Family Trees</h1>
        {families.map((d) => (
          <button
            className={`family-button ${
              d.familyName === activeFamily.familyName && "active"
            }`}
            key={d.familyName}
            onClick={() => setActiveFamily(d)}
          >
            {d.familyName}
          </button>
        ))}
      </section>
      {/* {activeFamily && <FamilyTree family={activeFamily} />} */}
      {activeFamily && (
        // const Provider = ContextObject.Provider;
        <FamilyContext.Provider
          value={{
            activeFamily, // activeFamily: activeFamily
            families, // families: families
            purposeOfLife: 42,
            emptyObj: {},
          }}
        >
          <FamilyTree />
        </FamilyContext.Provider>
      )}
    </div>
  );
}
