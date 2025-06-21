import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-1/2 bg-purple-50 flex items-center justify-center p-12">
        <div className="text-left">
          <h1 className="text-5xl font-bold mb-6 text-purple-900">Stay Organized, Achieve More With Blinkchat.</h1>
          <p className="text-purple-700 mb-8 text-lg">Your new favorite tool to manage tasks and boost productivity.</p>
        
        <img 
  src="https://unsplash.com/photos/a-french-bulldog-puppy-stands-by-a-food-bowl-UcvniPaMR_A" 
  alt="Chat Illustration" 
  className="w-full max-w-lg mx-auto"
/>


        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center bg-white p-12">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout; 