import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [isFav, setIsFav] = useState(false)

  
  const [allContacts, setAllContacts] = useState([])
  // Add new contact to contacts list
 

const submitHandler = (e) => {
  e.preventDefault()
  
  setAllContacts([...allContacts,{name,company,phone,isFav}])


  setName("")
  setCompany("")
  setPhone("")
  setIsFav(false)
}
// console.log(setAllContacts)

// console.log(allContacts)


const deleteCard = (idx) => {
  let copy = [...allContacts]
  copy.splice(idx,1)
  setAllContacts(copy)
        // console.log(idx.target)
}

return (
  <div className="flex justify-evenly p-12">
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Contact</h2>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
            type="text"
            id="name"
            placeholder="Enter name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>


        <div className="mb-4">
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company
          </label>
          <input
            value={company}
            onChange={(e) => {
              setCompany(e.target.value)
            }}
            type="text"
            id="company"
            placeholder="Enter company"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>


        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value)
            }}
            type="text"
            id="phone"
            placeholder="Enter phone number"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>


        <div className="mb-4 flex items-center">
          <input
          // value={isFav}
          // onChange={()=>{
          //   setIsFav()
          // }}
          checked={isFav}
            onChange={()=>{
            setIsFav(!isFav)
          }}
            type="checkbox"
            id="favorite"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="favorite" className="ml-2 text-sm font-medium text-gray-700">
            Favorite
          </label>
        </div>


        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Add Contact
        </button>
      </form>
    </div>



    <div>
      {allContacts.map(function(elem,index){
        return <div className="boy bg-white  border-2 rounded-lg mt-5 w-96 h-52 ">
        <div className="text h-28 px-14 py-6">
          <h2 className='text-xl font-bold'>{elem.name}</h2>
          <h3 className='text-xl font-normal'>company: {elem.company}</h3>
          <h3 className='text-xl font-normal'>Phone: {elem.phone}</h3>
          <h3 className='font-normal'>{elem.isFav ? "True Friend" : ""}</h3>
          <button id={index} onClick={deleteCard} className='bg-red-500 font-medium text-white rounded-xl mt-4 text-xl px-4 py-2'>Delete</button>
        </div>
      </div>
      })}
    </div>

    
  </div>

)
}

export default App