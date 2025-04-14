import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Menu, X, CreditCard } from "lucide-react";

const Header = () => {
 const [isOpen, setIsOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);

 useEffect(() => {
  const handleScroll = () => {
   const isScrolled = window.scrollY > 10;
   if (isScrolled !== scrolled) {
    setScrolled(isScrolled);
   }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
 }, [scrolled]);

 return (
  <nav className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300">
   <div
    className={`mx-auto max-w-7xl transition-all duration-300 ${
     scrolled ? "mt-4" : ""
    }`}
   >
    <div
     className={`flex items-center justify-between h-16 px-6 ${
      scrolled ? "bg-white shadow-lg rounded-full" : "bg-transparent"
     }`}
    >
     <div className="flex items-center">
      <HashLink smooth to="/#" className="flex items-center">
       <CreditCard className="h-8 w-8 text-blue-500" />
       <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Finsino
       </span>
      </HashLink>
     </div>

     <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
       <HashLink
        smooth
        to="/#solutions"
        className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-gray-900"
       >
        Solutions
       </HashLink>
       <HashLink
        smooth
        to="/#why-us"
        className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-gray-900"
       >
        Why Us
       </HashLink>
       <HashLink
        smooth
        to="/#compliance"
        className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-gray-900"
       >
        Compliance
       </HashLink>
       <HashLink
        smooth
        to="/#contact"
        className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-gray-900"
       >
        Contact
       </HashLink>
       <HashLink
        to="/book/#"
        className={`px-4 py-2 rounded-full text-sm font-medium text-white transition-colors ${
         scrolled
          ? "bg-blue-600 hover:bg-blue-700"
          : "bg-blue-500 hover:bg-blue-600"
        }`}
       >
        Get Started
       </HashLink>
      </div>
     </div>

     <div className="md:hidden">
      <button
       onClick={() => setIsOpen(!isOpen)}
       className="inline-flex items-center justify-center p-2 rounded-md transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
      >
       {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
     </div>
    </div>
   </div>

   {/* Mobile menu */}
   {isOpen && (
    <div className="md:hidden mt-2">
     <div className="rounded-2xl mx-4 px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
      <HashLink
       smooth
       to="/#solutions"
       className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
      >
       Solutions
      </HashLink>
      <HashLink
       smooth
       to="/#why-us"
       className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
      >
       Why Us
      </HashLink>
      <HashLink
       smooth
       to="/#compliance"
       className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
      >
       Compliance
      </HashLink>
      <HashLink
       smooth
       to="/#contact"
       className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100"
      >
       Contact
      </HashLink>
      <HashLink
       to="/book/#"
       className="block w-full px-4 py-2 rounded-full text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
      >
       Get Started
      </HashLink>
     </div>
    </div>
   )}
  </nav>
 );
};

export default Header;
