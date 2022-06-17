import React from "react";

const Footer = ({ footerRef }) => (
  <footer ref={footerRef} className="bg-gray-50">
    <div className="max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="flex justify-start items-center font-serif text-lg font-semibold">
        store.
      </div>

      <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-medium">Company</p>

          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a className="hover:opacity-75" href="">
              {" "}
              About{" "}
            </a>
            <a className="hover:opacity-75" href="">
              {" "}
              Meet the Team{" "}
            </a>
            <a className="hover:opacity-75" href="">
              {" "}
              History{" "}
            </a>
            <a className="hover:opacity-75" href="">
              {" "}
              Careers{" "}
            </a>
          </nav>
        </div>

        <div>
          <p className="font-medium">Services</p>

          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a className="hover:opacity-75" href="">
              {" "}
              1on1 Coaching{" "}
            </a>
            <a className="hover:opacity-75" href="">
              {" "}
              Company Review{" "}
            </a>
            <a className="hover:opacity-75" href="">
              {" "}
              Accounts Review{" "}
            </a>
            <a className="hover:opacity-75" href="">
              {" "}
              HR Consulting{" "}
            </a>
            <a className="hover:opacity-75" href="">
              {" "}
              SEO Optimisation{" "}
            </a>
          </nav>
        </div>

        <div>
          <p className="font-medium">Helpful Links</p>

          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a className="hover:opacity-75" href="">
              {" "}
              Contact{" "}
            </a>
            <a className="hover:opacity-75" href="">
              {" "}
              FAQs{" "}
            </a>
            <a className="hover:opacity-75" href="">
              {" "}
              Live Chat{" "}
            </a>
          </nav>
        </div>

        <div>
          <p className="font-medium">Legal</p>

          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a className="hover:opacity-75" href="">
              {" "}
              Privacy Policy{" "}
            </a>
            <a className="hover:opacity-75" href="">
              {" "}
              Terms & Conditions{" "}
            </a>
            <a className="hover:opacity-75" href="">
              {" "}
              Returns Policy{" "}
            </a>
            <a className="hover:opacity-75" href="">
              {" "}
              Accessibility{" "}
            </a>
          </nav>
        </div>
      </div>

      <div className="pt-8 mt-8 border-t border-gray-100 sm:items-center sm:justify-between sm:flex">
        <p className="text-xs text-gray-500">&copy; 2022 Company Name</p>

        <strong className="inline-flex items-center p-2 space-x-2 text-sm font-medium border border-gray-200 rounded">
          <span> Status: </span>

          <span className="w-3 h-3 bg-green-600 rounded-full" />

          <span className="font-medium text-green-600">
            All systems operational
          </span>
        </strong>
      </div>
    </div>
  </footer>
);

export default Footer;
