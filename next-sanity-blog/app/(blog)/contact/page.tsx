
import React from 'react';

export default function Contact() {
    return ( 

  
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <section className="bg-white shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md sm:max-w-lg">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-6 fade-in text-center">
          Contact Us
        </h2>
        

        {/* Form */}
        <form className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full px-4 py-2 border border-black rounded-md "
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          {/* Phone Number Input */}
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-black rounded-md focus:outline-none"
          />

          {/* Message Input */}
          <textarea
            placeholder="Your Message"
            rows={5}
            required
            className="w-full px-4 py-2 border border-black rounded-md focus:outline-none"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 sm:py-3 rounded-md font-bold hover:bg-slate-600"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};


