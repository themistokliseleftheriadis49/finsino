const AmlKyc = () => {
 const effectiveDate = new Date().toLocaleDateString();

 return (
  <div className="pt-24 pb-16 bg-gray-50">
   <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-white p-8 rounded-xl shadow-lg">
     <h1 className="text-3xl font-bold text-gray-900 mb-8">AML/KYC Policy</h1>
     <div className="prose max-w-none">
      <p className="text-gray-600">Effective Date: {effectiveDate}</p>
      <p className="text-gray-600">Last Updated: {effectiveDate}</p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
       1. Introduction
      </h2>
      <p className="text-gray-700">
       This Anti-Money Laundering (AML) and Know Your Customer (KYC) Policy
       outlines the procedures implemented by Finsino ("the Company") to prevent
       and mitigate potential risks related to money laundering, terrorist
       financing, and other illicit financial activities. As a Payment Service
       Provider (PSP) licensed under relevant jurisdictions, we are committed to
       maintaining the highest standards of compliance with applicable AML laws
       and regulations.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Purpose</h2>
      <p className="text-gray-700">The purpose of this policy is to:</p>
      <ul className="list-disc pl-5 text-gray-700">
       <li>Ensure compliance with relevant AML and KYC legislation.</li>
       <li>Detect, prevent, and report suspicious activities.</li>
       <li>Verify the identity of customers and beneficial owners.</li>
       <li>Maintain accurate records in accordance with legal obligations.</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Scope</h2>
      <p className="text-gray-700">
       This policy applies to all users of Finsino's services and all employees,
       contractors, agents, and affiliates of the Company involved in
       onboarding, transaction monitoring, and compliance-related activities.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
       4. Customer Due Diligence (CDD)
      </h2>
      <p className="text-gray-700">
       Prior to establishing a business relationship or processing transactions,
       the Company performs due diligence to verify the identity of all
       customers. This includes:
      </p>

      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
       Individual Clients:
      </h3>
      <ul className="list-disc pl-5 text-gray-700">
       <li>Full name</li>
       <li>Date of birth</li>
       <li>Nationality</li>
       <li>Government-issued ID (e.g., passport, national ID)</li>
       <li>Proof of address (e.g., utility bill, bank statement)</li>
      </ul>

      <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
       Corporate Clients:
      </h3>
      <ul className="list-disc pl-5 text-gray-700">
       <li>Certificate of incorporation</li>
       <li>Memorandum & Articles of Association</li>
       <li>Proof of business address</li>
       <li>Details of directors and shareholders</li>
       <li>Identification of the Ultimate Beneficial Owner (UBO)</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
       5. Enhanced Due Diligence (EDD)
      </h2>
      <p className="text-gray-700">Enhanced checks are conducted for:</p>
      <ul className="list-disc pl-5 text-gray-700">
       <li>High-risk customers</li>
       <li>Politically Exposed Persons (PEPs)</li>
       <li>Customers from high-risk jurisdictions</li>
       <li>Transactions involving large sums or unusual activity</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
       6. Ongoing Monitoring
      </h2>
      <p className="text-gray-700">
       All customer relationships are subject to continuous monitoring. This
       includes:
      </p>
      <ul className="list-disc pl-5 text-gray-700">
       <li>
        Review of transaction patterns for consistency with expected behavior
       </li>
       <li>Periodic updates of customer information</li>
       <li>Monitoring of suspicious activity and red flags</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
       7. Record-Keeping
      </h2>
      <p className="text-gray-700">
       We retain all KYC documentation, transaction records, and AML compliance
       evidence for a minimum of 5 years, or as required by law.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
       8. Suspicious Activity Reporting (SAR)
      </h2>
      <p className="text-gray-700">
       The Company has procedures in place for identifying and reporting
       suspicious activity to the relevant Financial Intelligence Unit (FIU).
       Employees are trained to escalate concerns to the designated Compliance
       Officer without delay.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
       9. Training & Awareness
      </h2>
      <p className="text-gray-700">
       All relevant staff receive regular training on AML/KYC policies,
       regulatory updates, and red flag identification. Training is mandatory
       and refreshed annually.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
       10. Sanctions & PEP Screening
      </h2>
      <p className="text-gray-700">
       The Company screens all customers against international sanctions lists
       (e.g., OFAC, UN, EU) and databases of Politically Exposed Persons (PEPs).
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
       11. Data Protection
      </h2>
      <p className="text-gray-700">
       All personal data collected during KYC processes is handled in compliance
       with applicable data protection laws including GDPR and other relevant
       privacy regulations.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
       12. Internal Controls and Governance
      </h2>
      <p className="text-gray-700">
       A dedicated Compliance Officer is responsible for:
      </p>
      <ul className="list-disc pl-5 text-gray-700">
       <li>Overseeing the AML program</li>
       <li>Ensuring compliance with regulatory obligations</li>
       <li>Acting as the point of contact with authorities</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
       13. Review and Updates
      </h2>
      <p className="text-gray-700">
       This policy is reviewed annually or as required to reflect changes in
       laws, regulations, or business operations.
      </p>
     </div>
    </div>
   </div>
  </div>
 );
};

export default AmlKyc;
