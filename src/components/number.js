import React from 'react'

export const Number = () => {
    return (
        <div className="flex md:flex-row flex-col items-center justify-center mt-8 text-center w-full">
           
            <div className="bg-white p-7 mx-8 rounded-lg shadow-md w-40 my-1 ">
                <h2 className="text-2xl font-bold text-gray-800">30+</h2>
                <p className="text-gray-500">Speakers</p>
            </div>

      
            <div className="bg-white p-6 mx-8 rounded-lg shadow-md w-40 my-1">
                <h2 className="text-2xl font-bold text-gray-800">2 Days</h2>
                <p className="text-gray-500">Event</p>
            </div>

           
            <div className="bg-white p-6 mx-8 rounded-lg shadow-md w-40 my-1">
                <h2 className="text-2xl font-bold text-gray-800">400+</h2>
                <p className="text-gray-500">Delegates</p>
            </div>

          
            <div className="bg-white p-6 mx-8 rounded-lg shadow-md w-40 my-1">
                <h2 className="text-2xl font-bold text-gray-800">10+</h2>
                <p className="text-gray-500">Hours Of Networking</p>
            </div>
        </div>
    )
}
