import bar from "../../public/Bar.png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-col items-center p-4 font-montserrat">
      <div className="text-xl font-bold font-montserrat mb-4">Contact Us:</div>

      {/* Main contact section with 3 groups */}
      <div className="flex flex-col sm:flex-row sm:gap-6 lg:gap-12 items-stretch">
        
        {/* Core Team */}
        <div className="flex flex-col text-center mb-4 sm:mb-0 justify-center">
          <div className="mb-3">
            <span className="block font-semibold">Sahasra</span>
            <span className="block">President</span>
            <span className="block">Me24btech11050@iith.ac.in</span>
          </div>
           <div className="mb-3">
            <span className="block font-semibold">P.Dharani</span>
            <span className="block">Secretary</span>
            <span className="block">Me24mtech12009@iith.ac.in</span>
          </div>
          <div className="mb-3">
            <span className="block font-semibold">Tejaswini</span>
            <span className="block">Executive</span>
            <span className="block">Ce24btech11019@iith.ac.in</span>
          </div>
         
        </div>

        {/* Separator */}
        <div className="hidden sm:flex items-stretch">
          <img
            src={bar}
            alt="bar"
            className="w-4 h-auto my-0 mx-auto sm:rotate-0"
            style={{ height: "100%" }}
          />
        </div>

        {/* PR & Outreach */}
        <div className="flex flex-col text-center mb-4 sm:mb-0 justify-center">
          <div className="mb-3">
            <span className="block font-semibold">Vaishnavi</span>
            <span className="block">PR & Outreach</span>
            <span className="block">me24btech11045@iith.ac.in</span>
          </div>
          <div>
            <span className="block font-semibold">Jaidhar</span>
            <span className="block">PR & Outreach</span>
            <span className="block">ep23btech11021@iith.ac.in</span>
          </div>
        </div>

        {/* Second Separator */}
        <div className="hidden sm:flex items-stretch">
          <img
            src={bar}
            alt="bar"
            className="w-4 h-auto my-0 mx-auto sm:rotate-0"
            style={{ height: "100%" }}
          />
        </div>

        {/* Campus Tour */}
        <div className="flex flex-col text-center mb-4 sm:mb-0 justify-center">
          <div className="mb-3">
            <span className="block font-semibold">Guna Sekhar Reddy</span>
            <span className="block">Campus Tour</span>
            <span className="block">em24mtech14006@iith.ac.in</span>
          </div>
          <div>
            <span className="block font-semibold">Domakonda Charanya</span>
            <span className="block">Campus Tour</span>
            <span className="block">bm24btech11007@iith.ac.in</span>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="flex space-x-4 mt-4">
        <p>Follow us on:</p>
        <a
          href="https://www.instagram.com/prayas_rdc_iith?igsh=djkxZmNjNDhsd2Z2"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/company/prayas-iith/"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
