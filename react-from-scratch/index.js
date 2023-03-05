const Heading = (props) => {
  return <h1 attr="value">{props.text}</h1>;
};

const App = () => {
  return React.createElement("div", null, [
    React.createElement(Heading, { text: "hi" }),
    React.createElement(Heading, { text: "hello" }),
    React.createElement("hr"),
  ]);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
