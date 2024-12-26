import React, { useEffect, useRef, useState } from "react";

function Navbar() {
  const [Mode, setMode] = useState(localStorage.getItem("theme"));

  const usereff = useRef(null)

  let modeHandler = () => {
      if(Mode == "light"){
         localStorage.setItem("theme","dark")
         setMode('dark')
      }else if(Mode == "dark"){
        localStorage.setItem("theme","light")
        setMode("light")
      }
  }

  useEffect(function(){
         usereff.current.setAttribute('id',"theme")
  },[Mode])

  return (
   <div ref={usereff} className="w-full h-screen">
      <nav className="flex justify-between items-center px-10 py-6">
  
        <div className="text-xl font-bold">MyNavbar</div>


        <ul className="flex space-x-20">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>

        
        <button onClick={modeHandler}
          className="p-2 rounded-full border-2 border-gray-500 focus:outline-none">
         Mode
        </button>
      </nav>
   </div>
  )
}

export default Navbar;
