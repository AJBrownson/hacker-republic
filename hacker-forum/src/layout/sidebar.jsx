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
          {/* Sample chat items */}
          <div className="p-4 hover:bg-gray-100 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                <div className="ml-3">
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-gray-500">Hello there!</p>
                </div>
              </div>
              <p className="text-xs text-gray-500">10:30 AM</p>
            </div>
          </div>
          {/* End of sample chat items */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
