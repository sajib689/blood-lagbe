import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="space-y-2">
            <p>
              <span className="font-bold">Email:</span>
              <a href="mailto:support@donation.com" className="text-white hover:underline ml-2">support@donation.com</a>
              <br />
              <a href="mailto:helpme@donation.com" className="text-white hover:underline">helpme@donation.com</a>
            </p>
            <p>
              <span className="font-bold">Address:</span> Road-2,3/A East Shibgonj, Bangladesh
            </p>
            <p>
              <span className="font-bold">Office:</span> <a href="tel:+880823560433" className="text-white hover:underline ml-2">(+880) 0823 560 433</a>
              <br />
              <span className="font-bold">Cell:</span> <a href="tel:+880723161343" className="text-white hover:underline ml-2">(+880) 0723 161 343</a>
            </p>
          </div>
        </div>

        {/* Support Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support Links</h3>
          <div className="grid grid-cols-2 gap-2">
            <a href="/thallasemia" className="text-white hover:underline">Thalassemia</a>
            <a href="/myelodysasia" className="text-white hover:underline">Myelodysasia</a>
            <a href="/hemolytiamia" className="text-white hover:underline">Hemolytiamia</a>
            <a href="/hyrcoagulable" className="text-white hover:underline">Hyrcoagulable</a>
            <a href="/sicklenemiaxs" className="text-white hover:underline">Sicklenemiaxs</a>
            <a href="/cell-elofrosis" className="text-white hover:underline">Cell Elofrosis</a>
            <a href="/blood-count" className="text-white hover:underline">Blood Count</a>
            <a href="/ychromas-eosis" className="text-white hover:underline">Ychromas Eosis</a>
            <a href="/thrombo-xtosis" className="text-white hover:underline">Thrombo Xtosis</a>
            <a href="/aplastic-anemia" className="text-white hover:underline">Aplastic Anemia</a>
          </div>
        </div>

        {/* Subscribe Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe Us</h3>
          <p className="mb-4">Signup for regular newsletter and stay up to date with our latest news.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-3 flex-1 bg-gray-800 text-white placeholder-gray-400 rounded-l-lg focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-3 rounded-r-lg hover:bg-red-600 focus:outline-none"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-sm text-gray-500">Copyright 2018 - Blood Buddies by BlueWindLab. All Rights Reserved.</p>
      </div>
    </footer>
  );
};


