/* eslint-disable react/prop-types */
// import {useState} from 'react'
import { Link } from "react-router-dom";



const ErrorMessage = ({ closeDialog }) => {
  const closed = () => {
    closeDialog();
  }
  
  return (
    <main className="">
      <h1 className="text-xl font-semibold text-center mb-8">
        ERR<Link to='/republic'>O</Link>R - you have the wrong password
      </h1>
      <div className="text-center flex flex-col">
        <button
        onClick={closed}
          type="submit"
          className="bg-green-500 text-white px-2 py-2 rounded hover:bg-green-800 transition duration-300"
        >
          OK - Try again
        </button>
      </div>
    </main>
  );
};

export default ErrorMessage;