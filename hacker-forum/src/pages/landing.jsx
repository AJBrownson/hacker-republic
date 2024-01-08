/* eslint-disable react/no-unescaped-entities */
import {useState} from 'react'
// import { Link } from "react";
import Tee from '../assets/tees.jpg'
import Two from '../assets/cta_two.jpg'
import Three from '../assets/cta_three.jpg'
import Four from '../assets/cta_four.jpg'
import ModalDialog from "react-basic-modal-dialog";
import Login from '../components/form'



const Landing = () => {
    // function for the modal
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const openDialog = () => setIsDialogVisible(true);
    const closeDialog = () => setIsDialogVisible(false);

  return (
    <>
    <section className='bg-hero h-full text-white'>
      <header className="p-4 text-white">
        <div className="container flex justify-between h-16 mx-auto">
          <div className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <span className="block">
                <h1 className="text-3xl font-serif font-extralight">
                  GIL BATES
                </h1>
                <p className="text-xs">PHOTOGRAPHER</p>
              </span>
            </a>
            {/* <ul className="items-stretch hidden space-x-3 lg:flex">
				<li className="flex">
					<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
				</li>
				<li className="flex">
					<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-600 border-violet-600">Link</a>
				</li>
				<li className="flex">
					<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
				</li>
				<li className="flex">
					<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
				</li>
			</ul> */}
          </div>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="px-8 py-3 font-semibold rounded bg-slate-800 text-gray-50">
              Contact Me
            </button>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
      
      {/* hero div */}
      <div className='p-10 mt-20'>
        <p className=' text-lg lg:text-2xl mb-3'>Hi there</p>
        <h1 className='text-6xl font-bold mb-5'>I'm Gil Bates</h1>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Provident odit autem quae voluptatum accusantium repellat! Neque nobis officiis perspiciatis recusandae.</p>
      </div>
      </section>

      {/* gallery of images */}
      <section className="pb-6 bg-gray-100 text-gray-900">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src={Tee}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={Two}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={Three}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={Four}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={Two}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={Three}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={Tee}
          />
          <span className='relative'>
            <p className='absolute bottom-20 left-40 cursor-pointer' onClick={openDialog}>hello there</p>
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={Two}
          />
          </span>
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={Three}
          />
          <img
            src={Four}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square"
          />
        </div>

        {/* function for modal */}
        <ModalDialog
        isDialogVisible={isDialogVisible}
        closeDialog={closeDialog}
        dialogClassName="mx-auto max-w-md p-10 backdrop:bg-black/60"
        contentClassName="flex flex-col p-6 gap-2 justify-between items-center"
        >
          <Login />
        </ModalDialog>
      </section>
    </>
  );
};

export default Landing;