import React from 'react';
import dummy from '../../public/Dummy.jpg'; 
import { FaFacebook, FaTwitter, FaInstagram ,FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col items-center">
        
        {/* "Contact Us" Heading */}
        <div className="flex justify-left mb-4 md:mb-0">
  <h1 className="text-4xl">Contact Us</h1>
</div>


        {/* Flex container for image and contact information */}
        <div className="flex flex-col md:flex-row items-start w-screen p-10">
          
          {/* Image on the Left */}
          <div className="flex items-start justify-start mb-4 md:mb-0 md:w-1/3">
            <img 
              src={dummy} // Use variable directly
              alt="Prayas Logo" 
              className="w-32 h-32 rounded-full" 
            />
          </div>

          {/* Contact Information Beside Image */}
          <div className="flex flex-row md:w-2/3 space-y-4 md:space-y-0 md:space-x-4">
            {/* Contact info for Gayatri Priya */}
            <div className="flex flex-col space-y-2 text-center md:text-left p-3">
              <span className="font-semibold">Gayatri Priya</span>
              <div>Overall Head</div>
              <div>Phone: +1 234 567 890</div>
            </div>
            <div className="h-[100px] w-[2px] bg-gray-400 mx-4 ml-10 mt-20"></div>
            {/* Contact info for Vinay */}
            <div className="flex flex-col space-y-2 text-center md:text-left p-3">
              <span className="font-semibold">Vinay</span>
              <div>PR & Outreach</div>
              <div>Phone: +1 234 567 890</div>
            </div>
            <div className="h-[100px] w-[2px] bg-gray-400 mx-4 ml-10"></div>
            {/* Contact info for Shaik P Parvez */}
            <div className="flex flex-col space-y-2 text-center md:text-left p-3">
              <span className="font-semibold">Shaik P Parvez</span>
              <div>Logistics Head</div>
              <div>Phone: +1 234 567 890</div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4">
          <a href="https://facebook.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com/prayas_rdc_iith?igsh=djkxZmNjNDhsd2Z2" className="hover:underline" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/company/prayas-iith/" className="hover:underline" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
