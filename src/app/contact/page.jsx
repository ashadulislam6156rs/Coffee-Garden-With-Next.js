import React from "react";

const page = () => {
  return (
    <div>
      <title>Contact | Coffee Garden</title>
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-0">
          {/* Page Heading */}
          <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
            Contact Us
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info & Text */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  Get in Touch with Us
                </h2>
                <p className="text-gray-700 mb-4">
                  At{" "}
                  <span className="font-semibold text-amber-600">
                    CoffeeGarden
                  </span>
                  , we are always here to help you enjoy the perfect coffee
                  experience. Whether you have questions about our products,
                  want to learn more about our beans, or just want to say hello,
                  our team is ready to assist you.
                </p>
                <p className="text-gray-700">
                  Feel free to reach out through any of the following channels:
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg space-y-2">
                <h2 className="text-xl font-semibold mb-2">
                  Contact Information
                </h2>
                <p className="text-gray-700">
                  📍 Address: 123 Coffee Street, Dhaka, Bangladesh
                </p>
                <p className="text-gray-700">📞 Phone: +880 1234 567890</p>
                <p className="text-gray-700">✉️ Email: info@coffeegarden.com</p>
                <p className="text-gray-700">⏰ Hours: Mon - Sat: 8AM - 8PM</p>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                  What Our Customers Say
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-amber-500 pl-4">
                    <p className="text-gray-700 italic">
                      CoffeeGarden has the most aromatic coffee I’ve ever
                      tasted! The ambiance makes every visit special.
                    </p>
                    <p className="text-gray-900 font-semibold mt-2">
                      — Rafiq Ahmed
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-500 pl-4">
                    <p className="text-gray-700 italic">
                      Amazing coffee and friendly staff. I always leave with a
                      smile and a perfectly brewed cup.
                    </p>
                    <p className="text-gray-900 font-semibold mt-2">
                      — Nusrat Jahan
                    </p>
                  </div>

                  <div className="border-l-4 border-amber-500 pl-4">
                    <p className="text-gray-700 italic">
                      The quality of their beans and unique flavors make
                      CoffeeGarden my go-to coffee spot.
                    </p>
                    <p className="text-gray-900 font-semibold mt-2">
                      — Tanvir Hossain
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
