// import React, { useState } from 'react'

// const App = () => {

//   const products = [
//     {
//       image: "https://images.unsplash.com/photo-1732408078285-b01ebd3992f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
//       name: "Laptop",
//       description: "High-performance laptop for work and play.",
//       inStock: true,
//     },
//     {
//       image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
//       name: "Headphones",
//       description: "Noise-cancelling over-ear headphones.",
//       inStock: false,
//     },
//     {
//       image: "https://images.unsplash.com/photo-1499914485622-a88fac536970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww",
//       name: "Camera",
//       description: "Professional DSLR camera with multiple lenses.",
//       inStock: true,
//     },
//     {
//       image: "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fHwwe",
//       name: "Smartphone",
//       description: "Latest smartphone with cutting-edge features.",
//       inStock: false,
//     },
//     {
//       image: "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3Dh",
//       name: "Smartwatch",
//       description: "Stylish smartwatch with health tracking features.",
//       inStock: true,
//     },
//     {
//       image: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
//       name: "Gaming Console",
//       description: "Next-gen gaming console with immersive gameplay.",
//       inStock: false,
//     },
//     {
//       image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
//       name: "Book",
//       description: "Bestselling novel with a gripping story.",
//       inStock: true,
//     },
//   ];


  
// const [count, setCount] = useState(0)
// const [cart, setCart] = useState([]);


//   console.log(products);
  

//   const addyourProduct = (elem,index) => {
//     // if (!cart.includes(elem)) {
//     //   setCart([...cart, elem]);
//     // }

//     setCount(count+1)
  
   
   
      
//   }

 
//   return (
//     <>
// <div className="totalparent w-full flex">

//   <div className="left w-3/4">
// <div className="nav w-full h-20 bg-zinc-100 flex">
//   <div className="image w-full flex justify-end pr-20">
//   <img className='w-14 pt-3' src="https://img.icons8.com/?size=100&id=LhRbsuC35iCh&format=png&color=000000" alt="" />
//   </div>

//   <div className="num flex justify-end">
//     <div className="para absolute pr-20">
//     <p className='text-2xl pt-1'>{count}</p>
//     </div>
   
//   </div>
 
// </div>
//     <div className='flex flex-wrap w-full'>
//       {products.map((elem,index)=>(
//            <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg flex flex-col flex-shrink-0  overflow-hidden">
//          <img 
//              class="w-full h-48 object-cover"
//              src={elem.image}
//              alt="Laptop"
//            /> 
          
//            <div class="p-4">
//              <h2 class="text-xl font-semibold text-gray-800">{elem.name}</h2>
//              <p class="text-gray-600 mt-2">
//               {elem.description}
//              </p>
//              <div class="mt-4">
//                <button
//                  class="px-3 py-1 text-sm rounded-full 
//                  bg-green-200 text-green-800"
//                >

              
//                 {elem.inStock ? " In Stock" : "Out of Stock"}
                
//                </button>

//                <button index={index} onClick={addyourProduct}
//                  class="px-3 py-1 ml-8 text-sm rounded-full 
//                  bg-green-200 text-green-800"
//                >

              
//                Add to Cart
                
//                </button>
            
             
            
//              </div>
//            </div>
//                </div> 
//       ))}
     


      
//      </div>
//      </div>

//      <div className="right">
//      <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg flex flex-col flex-shrink-0  overflow-hidden">
//            <img
//              class="w-full h-48 object-cover"
//              src=""
//              alt="Laptop"
//            />
//            <div class="p-4">
//              <h2 class="text-xl font-semibold text-gray-800">manish</h2>
//              <p class="text-gray-600 mt-2">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate nihil cumque.
//              </p>
//              <div class="mt-4">
//                <button
//                  class="px-3 py-1 text-sm rounded-full 
//                  bg-green-200 text-green-800"
//                >

              
//                In stock
                
//                </button>

//                <button
//                  class="px-3 py-1 ml-8 text-sm rounded-full 
//                  bg-green-200 text-green-800"
//                >

              
//                Add to Cart
                
//                </button>
            
             
            
//              </div>
//            </div>
//                </div> 
//      </div>

//   </div>
//     </>
//   )
// }

// export default App











































import React, { useState } from "react";

const App = () => {
  const products = [
    {
      image:
        "https://images.unsplash.com/photo-1732408078285-b01ebd3992f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
      name: "Laptop",
      description: "High-performance laptop for work and play.",
      inStock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
      name: "Headphones",
      description: "Noise-cancelling over-ear headphones.",
      inStock: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1499914485622-a88fac536970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww",
      name: "Camera",
      description: "Professional DSLR camera with multiple lenses.",
      inStock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1507208773393-40d9fc670acf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fHwwe",
      name: "Smartphone",
      description: "Latest smartphone with cutting-edge features.",
      inStock: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3Dh",
      name: "Smartwatch",
      description: "Stylish smartwatch with health tracking features.",
      inStock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1487611459768-bd414656ea10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Gaming Console",
      description: "Next-gen gaming console with immersive gameplay.",
      inStock: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      name: "Book",
      description: "Bestselling novel with a gripping story.",
      inStock: true,
    },
  ];

  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addYourProduct = (product) => {
    // if (!cart.some((item) => item.name === product.name)) {
      setCart([...cart, product]);
    // }
  };

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <>
      <div className="totalparent w-full flex">
        <div className="left w-3/4">
          <div className="nav w-full h-20 bg-zinc-100 flex">
            <div className="image w-full flex justify-end pr-20">
              <img
                className="w-14 pt-3 cursor-pointer"
                src="https://img.icons8.com/?size=100&id=LhRbsuC35iCh&format=png&color=000000"
                alt="Cart"
                onClick={toggleCart}
              />
            </div>

            <div className="num flex justify-end">
              <div className="para absolute pr-20">
                <p className="text-2xl pt-1">{cart.length}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-full">
            {products.map((product, index) => (
              <div
                key={index}
                className="max-w-sm mx-auto bg-white shadow-lg rounded-lg flex flex-col flex-shrink-0 overflow-hidden m-4"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={product.image}
                  alt={product.name}
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                  <div className="mt-4">
                    <button
                      className={`px-3 py-1 text-sm rounded-full ${
                        product.inStock
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </button>

                    {product.inStock && (
                      <button
                        onClick={() => addYourProduct(product)}
                        className="px-3 py-1 ml-8 text-sm rounded-full bg-blue-200 text-blue-800"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Section */}
        {/* {isCartVisible && ( */}
          <div className="right w-1/4 p-4 bg-gray-100">
            <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center mb-4 border-b pb-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="ml-4">
                    <h3 className="text-md font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">Your cart is empty.</p>
            )}
          </div>
        {/* )} */}
      </div>
    </>
  );
};

export default App;
