const Terms = () => {
 const effectiveDate = new Date().toLocaleDateString();

 return (
  <div className="pt-24 pb-16 bg-gray-50">
   <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-white p-8 rounded-xl shadow-lg">
     <h1 className="text-3xl font-bold text-gray-900 mb-8">
      Terms & Conditions
     </h1>
     <div className="prose max-w-none">
      <p className="text-gray-600">Effective Date: {effectiveDate}</p>
      <p className="text-gray-600">Last Updated: {effectiveDate}</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
       1. Service Agreement
      </h2>
      <p className="text-gray-700">
       By using our payment processing services, you agree to these terms and
       conditions.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
       2. Account Requirements
      </h2>
      <p className="text-gray-700">To use our services, you must:</p>
      <ul className="list-disc pl-5 text-gray-700">
       <li>Be a legally registered business</li>
       <li>Comply with all applicable laws</li>
       <li>Maintain accurate account information</li>
       <li>Secure your account credentials</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
       3. Payment Processing
      </h2>
      <p className="text-gray-700">Our payment processing services include:</p>
      <ul className="list-disc pl-5 text-gray-700">
       <li>Credit card processing</li>
       <li>Bank transfers</li>
       <li>Alternative payment methods</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
       4. Fees and Charges
      </h2>
      <p className="text-gray-700">Fees are based on:</p>
      <ul className="list-disc pl-5 text-gray-700">
       <li>Transaction volume</li>
       <li>Payment method</li>
       <li>Risk level</li>
       <li>Additional services</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
       5. Termination
      </h2>
      <p className="text-gray-700">
       We reserve the right to terminate services for:
      </p>
      <ul className="list-disc pl-5 text-gray-700">
       <li>Violation of terms</li>
       <li>Fraudulent activity</li>
       <li>Non-payment of fees</li>
       <li>Regulatory requirements</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Contact</h2>
      <p className="text-gray-700">
       For questions about these terms, contact us at:
      </p>
      <p className="text-gray-700">Email: legal@finsino.com</p>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Terms;
