/* eslint-disable react/no-unescaped-entities */
// import React from 'react'

const RightBar = () => {
  const onlineMembers = [
    {
      name: "Andy",
    },
    {
      name: "Bambi",
    },
    {
      name: "Dakota",
    },
    {
      name: "Jabba",
    },
    {
      name: "BuckRogers",
    },
    {
      name: "Mandrake",
    },
    {
      name: "Slip",
    },
    {
      name: "SisterJen",
    },
    {
      name: "SixOfOne",
    },
    {
      name: "Trinity",
    },
  ];

  const allMembers = [
    {
      name: "Andy",
    },
    {
      name: "Bambi",
    },
    {
      name: "Dakota",
    },
    {
      name: "Jabba",
    },
    {
      name: "BuckRogers",
    },
    {
      name: "AliBaba",
    },
    {
      name: "Mandrake",
    },
    {
      name: "Slip",
    },
    {
      name: "Mordred",
    },
    {
      name: "SisterJen",
    },
    {
      name: "SixOfOne",
    },
    {
      name: "Trinity",
    },
    {
      name: "Xerox",
    },
    {
      name: "FortKnox",
    },
    {
      name: "Hannibal",
    },
  ];

  

  return (
    <>
      <div className="flex flex-col w-1/4 border-l text-white border-gray-800">
        <div className="p-4 border-b border-gray-800">
          <h1 className="text-lg font-semibold">Member Area</h1>
        </div>

        <div className="flex-1 overflow-y-auto">
          <details className="p-4">
            <summary className="cursor-pointer">Who's Online?</summary>
            {onlineMembers.map((item, index) => (
              <ul key={index} className="px-4 py-1">
                <li>{item.name}</li>
              </ul>
            ))}
          </details>

          <details className="p-4">
            <summary className="cursor-pointer">All Members</summary>
            {allMembers.map((item, index) => (
              <ul key={index} className="px-4 py-1">
                <li>{item.name}</li>
              </ul>
            ))}
          </details>
        </div>
      </div>
    </>
  );
};

export default RightBar;
