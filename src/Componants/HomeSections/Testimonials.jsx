import React from 'react';

const Testimonials = () => {
    return (
      <div>
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <p className="text-center text-xs pt-5">
              --- Our Customers Testimonials ---
            </p>
            <h1 className="text-3xl text-[#331A15] font-semibold text-center py-3 mb-4">
              What Our Customers Say
            </h1>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <p className="text-gray-600 italic mb-4">
                  Their espresso is unbelievably smooth, rich, and flavorful!
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/PhotoRahulKarim.jpeg"
                    alt="User 1"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">Rahul Karim</h4>
                    <p className="text-sm text-gray-500">Coffee Lover</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <p className="text-gray-600 italic mb-4">
                  Absolutely love the aroma and freshness. Highly recommended!
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/SonjobRahman.jpeg"
                    alt="User 2"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Sonjob Rahman
                    </h4>
                    <p className="text-sm text-gray-500">Regular Customer</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <p className="text-gray-600 italic mb-4">
                  The environment is cozy & the coffee is top-notch!
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/SharminAkter.jpeg"
                    alt="User 3"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Sharmin Akter
                    </h4>
                    <p className="text-sm text-gray-500">Blogger</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Testimonials;