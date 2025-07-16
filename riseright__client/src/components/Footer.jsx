// client/src/components/Footer.jsx

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t text-sm text-gray-500 py-4 px-6 shadow-inner mt-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} RiseRight. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href="#privacy"
            className="hover:text-gray-900 transition-colors duration-150"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="hover:text-gray-900 transition-colors duration-150"
          >
            Terms of Service
          </a>
          <a
            href="#support"
            className="hover:text-gray-900 transition-colors duration-150"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
