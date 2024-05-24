//nested
/* <div>
    <div>
        <h1>I am react</h1>
        <h2>I am react</h2>
    </div>
</div> */

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      [React.createElement("h1", { id: "heading1" }, "I am react"),
      React.createElement("h1", { id: "heading2" }, "I am react")]
    )
  );
   


console.log(parent); //object which also contains props
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)