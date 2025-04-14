const Book = () => {
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
       Finsino can transform your online casino's payment infrastructure.
      </p>

      <form className="space-y-6">
       <div>
        <label
         htmlFor="name"
         className="block text-sm font-medium text-gray-700 mb-2"
        >
         Full Name
        </label>
        <input
         type="text"
         id="name"
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
         id="email"
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
         id="company"
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
         rows={4}
         className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        ></textarea>
       </div>

       <button
        type="submit"
        className="w-full bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
       >
        Schedule Meeting
       </button>
      </form>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Book;
