import React, { useState } from 'react'



const Form = () => {

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [isFav, setIsFav] = useState(false)

    const [contact, setContact] = useState([])

    const newContact = {
        // id: Date.now(), // Unique ID for each contact
        name,
        company,
        phone,
        isFav,
    };

    // Add new contact to contacts list
    setContact([...contact, setContact]);

    // Reset form fields
    setName('');
    setCompany('');
    setPhone('');
    setIsFav();
};

const submitHandler = (e) => {
    e.preventDefault()
    console.log("manih")
}

return (
    <>
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



            <div className="boy bg-white p-4 border-2 rounded-lg w-1/4 h-28 ">
                <div className="text">
                    <h2 className='text-xl font-bold'>{ }</h2>
                    <h3 className='text-xl font-normal'>company: Sheriyans</h3>
                    <h3 className='text-xl font-normal'>Phone: 6377253892</h3>

                </div>
            </div>
        </div>

    </>

)





export default Form;