import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Book = () => {
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
  "idle"
 );
 const formRef = useRef<HTMLFormElement>(null);

 const [formData, setFormData] = useState({
  full_name: "",
  business_email: "",
  company_name: "",
  message: "",
 });

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
 ) => {
  setFormData({
   ...formData,
   [e.target.name]: e.target.value,
  });
 };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault(); // Prevent page reload

  if (!formRef.current) return;

  setIsSubmitting(true);
  setSubmitStatus("idle");

  try {
   await emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID_BOOK,
    formRef.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
   );
   setSubmitStatus("success");
   formRef.current.reset(); // Reset the form
   setFormData({
    full_name: "",
    business_email: "",
    company_name: "",
    message: "",
   });
  } catch (error) {
   console.error("Failed to send email:", error);
   setSubmitStatus("error");
  } finally {
   setIsSubmitting(false);
  }
 };

 return (
  <div className="pt-24 pb-16 bg-gray-50">
   <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-white p-8 rounded-xl shadow-lg">
     <h1 className="text-3xl font-bold text-gray-900 mb-8">
      Schedule a Meeting
     </h1>
     <div className="prose max-w-none">
      <p className="text-xl text-gray-600 mb-8">
       Book a personalized session with our payment specialists to discover how
       Finsino can transform your online business payment infrastructure.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
       <div>
        <label
         htmlFor="name"
         className="block text-sm font-medium text-gray-700 mb-2"
        >
         Full Name
        </label>
        <input
         type="text"
         id="full_name"
         name="full_name"
         value={formData.full_name}
         onChange={handleChange}
         className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
         required
        />
       </div>

       <div>
        <label
         htmlFor="email"
         className="block text-sm font-medium text-gray-700 mb-2"
        >
         Business Email
        </label>
        <input
         type="email"
         id="business_email"
         name="business_email"
         value={formData.business_email}
         onChange={handleChange}
         className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
         required
        />
       </div>

       <div>
        <label
         htmlFor="company"
         className="block text-sm font-medium text-gray-700 mb-2"
        >
         Company Name
        </label>
        <input
         type="text"
         id="company_name"
         name="company_name"
         value={formData.company_name}
         onChange={handleChange}
         className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
         required
        />
       </div>

       <div>
        <label
         htmlFor="message"
         className="block text-sm font-medium text-gray-700 mb-2"
        >
         Message (Optional)
        </label>
        <textarea
         id="message"
         name="message"
         value={formData.message}
         onChange={handleChange}
         rows={4}
         className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        ></textarea>
       </div>

       <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors flex items-center justify-center space-x-2 ${
         isSubmitting ? "opacity-75 cursor-not-allowed" : ""
        }`}
       >
        <span>{isSubmitting ? "Sending..." : "Schedule Meeting"}</span>
       </button>
       {submitStatus === "success" && (
        <p className="text-green-500 text-center">Message sent successfully!</p>
       )}
       {submitStatus === "error" && (
        <p className="text-red-500 text-center">
         Failed to send message. Please try again.
        </p>
       )}
      </form>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Book;

