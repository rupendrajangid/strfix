import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TextareaCounter from "./components/TextareaCounter";
import TextareaMD5Converter from "./components/TextareaMD5Converter";
import TextareaBase64Encoder from "./components/TextareaBase64Encoder";
import TextareaBase64Decoder from "./components/TextareaBase64Decoder";
import EuclideanDistanceCalculator from "./components/EuclideanDistanceCalculator";
import TextToLowercaseConverter from "./components/TextToLowercaseConverter";
import TextToUppercaseConverter from "./components/TextToUppercaseConverter";

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-md">
          <a class="navbar-brand" href="#">
            Strfix
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4>Meta</h4>
          </div>
          <TextareaCounter></TextareaCounter>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <h4>MD5</h4>
          </div>
          <TextareaMD5Converter></TextareaMD5Converter>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <h4>Base64 Encode</h4>
          </div>
          <TextareaBase64Encoder></TextareaBase64Encoder>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <h4>Base64 Decode</h4>
          </div>
          <TextareaBase64Decoder></TextareaBase64Decoder>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <h4>upperCASE</h4>
          </div>
          <TextToUppercaseConverter></TextToUppercaseConverter>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <h4>lowerCASE</h4>
          </div>
          <TextToLowercaseConverter></TextToLowercaseConverter>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <h4>Euclidean Distance</h4>
          </div>
          <EuclideanDistanceCalculator></EuclideanDistanceCalculator>
        </div>
      </div>
    </div>
  );
}

export default App;
