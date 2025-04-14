import React from "react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import {
 CreditCard,
 Globe,
 Shield,
 ChevronRight,
 ChevronDown,
} from "lucide-react";

const fadeIn = {
 hidden: { opacity: 0, y: 20 },
 visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
 hidden: { opacity: 0 },
 visible: {
  opacity: 1,
  transition: {
   staggerChildren: 0.2,
  },
 },
};

const Home = () => {
 return (
  <div className="pt-16">
   {/* Hero Section */}
   <section className="relative min-h-[90vh] bg-gray-50">
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true }}
     variants={staggerContainer}
     className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
     <motion.h1
      variants={fadeIn}
      className="text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-16"
     >
      Seamless Payments for the World's Top Online Casinos
     </motion.h1>
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div variants={fadeIn} className="order-2 lg:order-1 relative">
       <img
        src="https://images.unsplash.com/photo-1485217988980-11786ced9454"
        alt="Payment Solutions"
        className="w-full h-auto rounded-2xl shadow-xl"
       />
      </motion.div>
      <motion.div variants={fadeIn} className="order-1 lg:order-2 space-y-6">
       <p className="text-2xl text-orange-600 font-semibold">
        High-risk. High-speed. High approval.
       </p>
       <p className="text-xl text-gray-600">
        Built for the online casino industry. Our platform delivers real-time
        approvals, secure processing, and seamless integration with global
        payment networks.
       </p>
       <div className="pt-4 flex flex-wrap gap-4">
        <HashLink
         to="/book/#"
         className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors"
        >
         Book a Strategy Call
         <ChevronRight className="ml-2 h-5 w-5" />
        </HashLink>
        <HashLink
         smooth
         to="/#solutions"
         className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-medium rounded-lg border-2 border-orange-600 hover:bg-orange-50 transition-colors"
        >
         Explore Our Platform
         <ChevronRight className="ml-2 h-5 w-5" />
        </HashLink>
       </div>
      </motion.div>
     </div>
    </motion.div>
   </section>

   {/* Solutions Section */}
   <section id="solutions" className="py-20 bg-white">
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true }}
     variants={staggerContainer}
     className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
     <motion.div variants={fadeIn} className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900">
       Payment Solutions Built for Online Casinos
      </h2>
     </motion.div>

     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-12">
       {[
        {
         icon: CreditCard,
         title: "High-Risk Credit Card Processing",
         description:
          "Accept major credit cards with optimized approval rates for high-risk merchants.",
        },
        {
         icon: Globe,
         title: "Open Banking",
         description:
          "Enable direct-from-bank payments with instant confirmation and lower chargeback risks.",
        },
        {
         icon: Shield,
         title: "Instant Banking",
         description:
          "Offer fast, secure bank-to-bank payments for local and international players.",
        },
       ].map((feature, index) => (
        <motion.div
         key={index}
         variants={fadeIn}
         className="flex items-start space-x-6 p-6 rounded-xl hover:bg-gray-50 transition-colors"
        >
         <feature.icon className="h-16 w-16 text-orange-600 flex-shrink-0" />
         <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
           {feature.title}
          </h3>
          <p className="text-gray-600">{feature.description}</p>
         </div>
        </motion.div>
       ))}
      </div>
      <motion.div
       variants={fadeIn}
       className="relative h-full flex items-center"
      >
       <img
        src="https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec"
        alt="Payment Solutions"
        className="w-full h-auto rounded-2xl shadow-xl"
       />
      </motion.div>
     </div>
    </motion.div>
   </section>

   {/* Why Us Section */}
   <section id="why-us" className="py-20 bg-gray-50">
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true }}
     variants={staggerContainer}
     className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
     <motion.div variants={fadeIn} className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
     </motion.div>

     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <motion.div
       variants={fadeIn}
       className="relative h-full flex items-center order-2 lg:order-1"
      >
       <img
        src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
        alt="Why Choose Us"
        className="w-full h-auto rounded-2xl shadow-xl"
       />
      </motion.div>
      <div className="space-y-12 order-1 lg:order-2">
       {[
        {
         icon: Shield,
         title: "Consistent Approvals",
         description:
          "Smart routing and risk optimization ensure high approval rates across all markets.",
        },
        {
         icon: Globe,
         title: "Global Coverage",
         description:
          "Process payments in over 100 countries with local currency support.",
        },
        {
         icon: CreditCard,
         title: "Secure Processing",
         description:
          "Fully PCI-compliant infrastructure with advanced fraud prevention tools.",
        },
       ].map((feature, index) => (
        <motion.div
         key={index}
         variants={fadeIn}
         className="flex items-start space-x-6 p-6 rounded-xl hover:bg-white transition-colors"
        >
         <div className="bg-orange-600 p-4 rounded-full">
          <feature.icon className="h-8 w-8 text-white" />
         </div>
         <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
           {feature.title}
          </h3>
          <p className="text-gray-600">{feature.description}</p>
         </div>
        </motion.div>
       ))}
      </div>
     </div>
    </motion.div>
   </section>

   {/* Platform Advantage */}
   <section className="py-20 bg-white">
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true }}
     variants={staggerContainer}
     className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div variants={fadeIn}>
       <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Designed for High-Stakes Performance
       </h2>
       <p className="text-gray-600 mb-8">
        Our platform is designed to support rapid scaling for online casino
        operators. Whether you're launching or expanding globally, we provide
        the tools and infrastructure to handle complex payment flows with ease.
       </p>
       <ul className="space-y-4">
        {[
         "Scalable architecture for high-volume transactions",
         "Seamless onboarding for new operators",
         "Real-time reporting and reconciliation dashboard",
        ].map((item, index) => (
         <motion.li
          key={index}
          variants={fadeIn}
          className="flex items-center text-gray-700"
         >
          <ChevronRight className="h-5 w-5 text-orange-600 mr-2" />
          {item}
         </motion.li>
        ))}
       </ul>
      </motion.div>
      <motion.div variants={fadeIn} className="relative">
       <img
        src="https://images.unsplash.com/photo-1563013544-824ae1b704d3"
        alt="Platform Features"
        className="w-full h-auto rounded-2xl shadow-xl"
       />
      </motion.div>
     </div>
    </motion.div>
   </section>

   {/* Compliance Section */}
   <section id="compliance" className="py-20 bg-gray-50">
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true }}
     variants={staggerContainer}
     className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div variants={fadeIn} className="relative order-2 lg:order-1">
       <img
        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
        alt="Security Features"
        className="w-full h-auto rounded-2xl shadow-xl"
       />
      </motion.div>
      <motion.div variants={fadeIn} className="order-1 lg:order-2">
       <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Compliance You Can Count On
       </h2>
       <p className="text-gray-600 mb-8">
        We help you stay ahead of evolving regulations in every jurisdiction.
        Our solutions are built with global compliance in mind, reducing your
        risk while maintaining performance.
       </p>
       <ul className="space-y-4">
        {[
         "PCI DSS Level 1 certification",
         "KYC & AML-ready onboarding tools",
         "Region-specific licensing and support",
        ].map((item, index) => (
         <motion.li
          key={index}
          variants={fadeIn}
          className="flex items-center text-gray-700"
         >
          <ChevronRight className="h-5 w-5 text-orange-600 mr-2" />
          {item}
         </motion.li>
        ))}
       </ul>
      </motion.div>
     </div>
    </motion.div>
   </section>

   {/* CTA Section */}
   <section id="contact" className="py-20 bg-gray-900">
    <motion.div
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true }}
     variants={staggerContainer}
     className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
     <motion.div variants={fadeIn} className="text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
       Let's Redefine Online Casino Payments Together
      </h2>
      <p className="text-xl text-gray-300 mb-8">
       Schedule a personalized demo with our payment specialists and see what
       Finsino can do for your platform.
      </p>
      <HashLink
       to="/book/#"
       className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors"
      >
       Request a Demo
       <ChevronRight className="ml-2 h-5 w-5" />
      </HashLink>
     </motion.div>
    </motion.div>
   </section>
  </div>
 );
};

export default Home;
