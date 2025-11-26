import React from 'react';

const BrewProcess = () => {
    const steps = [
      {
        title: "1. Select Fresh Beans",
        desc: "We handpick high-quality organic beans from top farms.",
        img: "/assets/FreshBeans.jpeg",
      },
      {
        title: "2. Roast to Perfection",
        desc: "Beans are slow-roasted in small batches to lock in flavor.",
        img: "/assets/RoastPerfection.jpeg",
      },
      {
        title: "3. Expert Grinding",
        desc: "We grind beans at the perfect size to match your coffee type.",
        img: "/assets/ExpertGrinding.jpeg",
      },
      {
        title: "4. Brew & Serve Fresh",
        desc: "Hot, aromatic, freshly brewed coffee served with love.",
        img: "/assets/more/16.png",
      },
    ];
    return (
      <div>
        <section className="py-5 bg-[#faf6f2]">
          <div className="container mx-auto px-6">
            <p className="text-center text-xs ">--- Your Perfect Coffee ---</p>
            <h1 className="md:text-3xl text-xl text-[#331A15] font-semibold text-center py-3 mb-4">
              How We Brew Your Perfect Coffee
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="bg-white p-3 rounded-xl shadow hover:shadow-lg transition text-center"
                >
                  <img
                    src={step.img}
                    className="w-full rounded-lg h-60 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
};

export default BrewProcess;