import React from "react";
import "./index.css";
import Topbar from "./components/Topbar.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
      <div className="bg-gray-50 min-h-screen">
        {/* Navigation Bar */}
        <Topbar />

        {/* Main Content */}
        <Body />

        {/* Footer */}
        <Footer />
      </div>
  );
}

export default App;
