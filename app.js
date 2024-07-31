import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{},"Hellow moto, from react");
const root = ReactDOM.createRoot(document.getElementById("root"));

// React Element
const ReactElement = (
<div>
<h1>This is react Element</h1>
<h2>This is 2nd React Element</h2>
</div>
);
// root.render(ReactElement);
//React Component
const ReactComponent = () => {
return (
<div>
<h1>This is react component </h1>
<h2>This is 2nd React component</h2>
{ReactElement}
</div>
);
};
root.render(<ReactComponent ></ReactComponent>);