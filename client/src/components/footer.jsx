import bar from "../../public/Bar.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-col items-center p-4 font-montserrat">
      <div className="text-xl font-bold font-montserrat mb-4">Contact Us:</div>
      <div className="flex flex-col sm:flex-row sm:gap-6 lg:gap-12">
        <div className="flex flex-col text-center mb-4 sm:mb-0">
          <span>Gayatri Priya</span>
          <span>Overall Head</span>
          {/* <span>+91 6305430598</span> */}
          <span>ep23btech11032@iith.ac.in</span>
        </div>
        <img
          src={bar}
          alt="bar"
          className="w-4 sm:h-24 my-2 mx-auto sm:my-0 rotate-90 sm:rotate-0"
        />
        <div className="flex flex-col text-center mb-4 sm:mb-0">
          <span>Vinay Kurre</span>
          <span>PR Head</span>
          {/* <span>+91 9392418084</span> */}
          <span>ee23btech11036@iith.ac.in</span>
        </div>
        <img
          src={bar}
          alt="bar"
          className="w-4 sm:h-24 my-2 mx-auto sm:my-0 rotate-90 sm:rotate-0"
        />
        <div className="flex flex-col text-center mb-4 sm:mb-0">
          <span>Harshiitha Chanchal</span>
          <span>VCU Head</span>
          {/* <span>+91 9430581660</span> */}
          <span>la23mh11003@iith.ac.in</span>
        </div>
      </div>
      <div className="flex space-x-4 mt-4">
        <a
          href="https://facebook.com"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://twitter.com"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={24} />
        </a>
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
