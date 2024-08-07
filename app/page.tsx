"use client";

import axios from "axios";
import InputForm from "./components/InputForm";
import { useState } from "react";
export default function Home() {
  const [result, setResult] = useState('')
  const handleSubmit = async (inputData: any) => {
    try {
      const response = await axios.post("your API_URL", inputData);
      setResult(response?.data?.data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col p-24">
      <InputForm onSubmit={handleSubmit} />
      <p>Result: {result}</p>
    </main>
  );
}
