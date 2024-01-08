// import React from 'react'
import Sidebar from "../layout/sidebar"
import MainDash from "../layout/mainDash"
import RightBar from "../layout/rightBar"



const MessageBoard = () => {
  return (
    <>
    <section className="bg-gray-900 flex h-screen">
      <Sidebar />
      <MainDash />
      <RightBar />
    </section>
    </>
  )
}

export default MessageBoard