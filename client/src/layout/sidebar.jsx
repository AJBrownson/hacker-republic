// import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col w-1/4 border-r text-white border-gray-800">
        {/* Chat list header */}
        <div className="p-4 border-b border-gray-800">
          <h1 className="text-lg font-semibold">Hacker Republic</h1>
        </div>

        {/* Chat list */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <ul className="px-4">
              <li className="py-2 cursor-pointer">Browse the Forum</li>
              <li className="py-2 cursor-pointer">Send a Message</li>
              <li className="py-2 cursor-pointer">Search the Archive</li>
              <li className="font-extrabold py-2 cursor-pointer">Talk</li>
              <li className="py-2 cursor-pointer">Get Laid?</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
