import React from "react";
import ReactDOM from "react-dom/client";

import { Info24Filled } from "@fluentui/react-icons";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

function App() {
    return <Info24Filled />;
}

root.render(<App />);
