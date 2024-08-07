"use client";

import { useState } from "react";
import axios from "axios";
export default function Home() {
  const [formData, setFormData] = useState<any>({});
  const [exchangeResult, setExchangeResult] = useState<any>();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("url", formData);
      setExchangeResult(response?.data?.data);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form
        className="min-w-72 max-w-md mx-auto"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="mb-5">
          <label
            htmlFor="teleID"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Telegram ID:
          </label>
          <input
            type="number"
            id="teleID"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            name="teleID"
            value={formData?.teleID || ""}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="rate"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Input Exchange:
          </label>
          <input
            type="number"
            step="0.0000000001"
            id="rate"
            name="rate"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ex: 0.123456"
            required
            value={formData?.rate || ""}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Run
        </button>
        <label className="block mt-5 text-sm font-medium text-gray-900 dark:text-white">
          Your Result: {exchangeResult}
        </label>
      </form>
    </main>
  );
}
