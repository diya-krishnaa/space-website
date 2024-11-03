import Logo from "../assets/logo.png";
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Topbar = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => setShowLoginForm(!showLoginForm);

  return (
    <>
      <nav data-aos="fade-down" className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
              <img src={Logo} alt="Logo" className="w-10" />
              <span>TCJ-SPACE</span>
            </div>
            <div className="text-white hidden sm:block">
              <ul className="flex items-center gap-6 text-xl py-4">
                <li><a href="#">About</a></li>
                <li><a href="#">Technology</a></li>
                <li><a href="#">Galaxy</a></li>
                <li><a href="#">Satellite</a></li>
              </ul>
            </div>
            <div>
              <button onClick={toggleLoginForm} className="text-white border-2 border-white px-3 py-1 rounded-md">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Form */}
      {showLoginForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
            <button 
              onClick={toggleLoginForm} 
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none">
              X {/* This will be the close icon */}
            </button>
            <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
            <Form>
              <Form.Group  controlId="formEmail" className="mb-3">
                <Form.Label></Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>
              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label></Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
              <Button 
                type="submit" 
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200 w-full mb-2">
                Login
              </Button>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default Topbar;
