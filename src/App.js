import React from "react";
import Form from "./pages/Form";
import Output from "./pages/Output";

export default function App() {
  return (
    <div className=" flex flex-row ">
      <Form />
      <div className=" w-2 h-screen bg-black"></div>
      <Output />
    </div>
  );
}
