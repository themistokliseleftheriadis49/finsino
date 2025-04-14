import React from "react";
import { HashLink } from "react-router-hash-link";
import { CreditCard } from "lucide-react";

const Footer = () => {
 return (
  <footer className="bg-white border-t border-gray-200">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
     <div>
      <HashLink smooth to="/#" className="flex items-center">
       <CreditCard className="h-8 w-8 text-orange-500" />
       <span className="ml-2 text-xl font-bold text-orange-500 bg-clip-text">
        Finsino
       </span>
      </HashLink>
      <p className="mt-4 text-gray-600 text-sm">
       Seamless payments for the world's top online casinos.
      </p>
     </div>

     <div>
      <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2">
       <li>
        <HashLink
         smooth
         to="/#solutions"
         className="text-gray-600 hover:text-gray-900 transition-colors"
        >
         Solutions
        </HashLink>
       </li>
       <li>
        <HashLink
         smooth
         to="/#compliance"
         className="text-gray-600 hover:text-gray-900 transition-colors"
        >
         Compliance
        </HashLink>
       </li>
       <li>
        <HashLink
         smooth
         to="/#contact"
         className="text-gray-600 hover:text-gray-900 transition-colors"
        >
         Support
        </HashLink>
       </li>
      </ul>
     </div>

     <div>
      <h3 className="text-gray-900 font-semibold mb-4">Legal</h3>
      <ul className="space-y-2">
       <li>
        <HashLink
         to="/terms/#"
         className="text-gray-600 hover:text-gray-900 transition-colors"
        >
         Terms & Conditions
        </HashLink>
       </li>
       <li>
        <HashLink
         to="/privacy/#"
         className="text-gray-600 hover:text-gray-900 transition-colors"
        >
         Privacy Policy
        </HashLink>
       </li>
       <li>
        <HashLink
         to="/aml-kyc/#"
         className="text-gray-600 hover:text-gray-900 transition-colors"
        >
         AML / KYC
        </HashLink>
       </li>
      </ul>
     </div>

     <div>
      <h3 className="text-gray-900 font-semibold mb-4">Contact</h3>
      <ul className="space-y-2">
       <li className="text-gray-600">Email: contact@finsino.com</li>
       <li className="text-gray-600">Support: 24/7 Available</li>
      </ul>
     </div>
    </div>

    <div className="mt-8 pt-8 border-t border-gray-200">
     <p className="text-center text-gray-600 text-sm">
      © {new Date().getFullYear()} Finsino. All rights reserved.
     </p>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
