import React from "react";

const page = () => {
  return (
    <div className="bg-gray-50 py-16">
      <title>About | Coffee Garden</title>
      <div className="max-w-5xl mx-auto px-6 md:px-0">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-8">
          About Us
        </h1>

        <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
          <p className="transition-transform transform hover:translate-x-1 duration-300">
            At{" "}
            <span className="font-semibold text-amber-600">CoffeeGarden</span>,
            we believe every cup tells a story. From velvety cappuccinos to
            aromatic espresso shots, our mission is to bring{" "}
            <span className="text-amber-500 font-medium">
              warmth, comfort, and authentic flavors
            </span>{" "}
            to every coffee lover&apos;s day.
          </p>

          <p className="transition-transform transform hover:translate-x-1 duration-300">
            We collaborate with passionate{" "}
            <span className="font-semibold text-amber-600">baristas</span> and
            trusted{" "}
            <span className="font-semibold text-amber-600">suppliers</span> to
            source the finest beans and craft beverages that awaken your senses.
            Our journey is driven by{" "}
            <span className="italic">quality, creativity, and community</span>,
            ensuring every sip is memorable.
          </p>

          <p className="transition-transform transform hover:translate-x-1 duration-300">
            Beyond coffee,{" "}
            <span className="font-semibold text-amber-600">CoffeeGarden</span>
            is a space where friends meet, ideas flow, and moments are
            cherished. Whether you’re here for a quick morning pick-me-up or a
            relaxing afternoon break, we strive to make every visit a delightful
            experience.
          </p>

          <p className="transition-transform transform hover:translate-x-1 duration-300">
            Our commitment extends to{" "}
            <span className="font-semibold text-amber-600">sustainability</span>
            and{" "}
            <span className="font-semibold text-amber-600">
              ethical sourcing
            </span>
            , because we believe great coffee should also respect the planet and
            the people behind it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
