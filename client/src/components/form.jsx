/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import ErrorMessage from "./errorMessage";
import ModalDialog from "react-basic-modal-dialog";




const Login = () => {
  // function for the modal
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const closeDialog = () => setIsDialogVisible(false);

  const [inputValue, setInputValue] = useState({
    id: "",
    password: "",
  });
  const { id, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id === "Remarkable" && password === "A(89)Cx#magnolia") {
        console.log("Credentials are verified.");
        const handleErrorMessage = () => {
          setIsDialogVisible(true);
        };
        handleErrorMessage();
      } else {
        console.log("An error occurred");
      }
    } catch (error) {
      console.log(error);
    }
    // try {
    //   const { data } = await axios.post(
    //     "http://localhost:5000/admin/login",
    //     // ["http://localhost:5000/admin/login",
    //     // "https://philly-production.up.railway.app/admin/login"],
    //     {
    //       ...inputValue,
    //     },
    //     { withCredentials: true }
    //   );
    //   console.log(data);
    //   const { success, message } = data;
    //   if (success) {
    //     console.log('sucessful');
    //     handleSuccess(message);
    //     setTimeout(() => {
    //       navigate("/adminDash");
    //     }, 1000);
    //   } else {
    //     handleError(message);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    setInputValue({
      ...inputValue,
      id: "",
      password: "",
    });
  };

  return (
    <>
      <div className="flex items-center justify-center bg-white">
        <div className="bg-white p-8 rounded max-w-md w-full">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 font-semibold">
                I.D
              </label>
              <input
                type="text"
                id="id"
                name="id"
                placeholder="Enter your I.D"
                className="w-full border rounded px-3 py-2"
                value={id}
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1 font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full border rounded px-3 py-2"
                value={password}
                onChange={handleOnChange}
              />
            </div>
            <div className="text-center flex flex-col">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
          <ModalDialog
            isDialogVisible={isDialogVisible}
            dialogClassName="mx-auto max-w-md p-10 backdrop:bg-black/60"
            contentClassName="flex flex-col p-6 gap-2 justify-between items-center"
          >
            <ErrorMessage closeDialog={closeDialog} />
          </ModalDialog>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Login;
