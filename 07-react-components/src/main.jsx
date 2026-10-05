import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function FunctionalComponent() {
  return (
    <section className="card">
      <h2>Functional Component</h2>
      <p>This component is created using a JavaScript function.</p>
    </section>
  );
}

class ClassComponent extends React.Component {
  render() {
    return (
      <section className="card">
        <h2>Class Component</h2>
        <p>This component is created using an ES6 class.</p>
      </section>
    );
  }
}

function App() {
  return (
    <main>
      <h1>React Components Experiment</h1>
      <FunctionalComponent />
      <ClassComponent />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
