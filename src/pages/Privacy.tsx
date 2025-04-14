const Privacy = () => {
 const effectiveDate = new Date().toLocaleDateString();

 return (
  <div className="pt-24 pb-16 bg-gray-50">
   <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-white p-8 rounded-xl shadow-lg">
     <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
     <div className="prose max-w-none">
      <p className="text-gray-600">Effective Date: {effectiveDate}</p>
      <p className="text-gray-600">Last Updated: {effectiveDate}</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
       1. Information We Collect
      </h2>
      <p className="text-gray-700">
       We collect information that you provide directly to us, including:
      </p>
      <ul className="list-disc pl-5 text-gray-700">
       <li>Contact information</li>
       <li>Business details</li>
       <li>Payment processing information</li>
       <li>Transaction data</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
       2. How We Use Your Information
      </h2>
      <p className="text-gray-700">We use the information we collect to:</p>
      <ul className="list-disc pl-5 text-gray-700">
       <li>Process payments</li>
       <li>Provide customer support</li>
       <li>Comply with legal obligations</li>
       <li>Improve our services</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
       3. Data Security
      </h2>
      <p className="text-gray-700">
       We implement appropriate security measures to protect your information,
       including:
      </p>
      <ul className="list-disc pl-5 text-gray-700">
       <li>Encryption of sensitive data</li>
       <li>Regular security audits</li>
       <li>Access controls</li>
       <li>Monitoring systems</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
       4. Your Rights
      </h2>
      <p className="text-gray-700">You have the right to:</p>
      <ul className="list-disc pl-5 text-gray-700">
       <li>Access your data</li>
       <li>Correct inaccurate data</li>
       <li>Request deletion of your data</li>
       <li>Object to processing</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
       5. Contact Us
      </h2>
      <p className="text-gray-700">
       For any privacy-related questions or concerns, please contact us at:
      </p>
      <p className="text-gray-700">Email: privacy@finsino.com</p>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Privacy;
