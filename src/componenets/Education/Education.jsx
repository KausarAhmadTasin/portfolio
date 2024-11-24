import React from "react";
import Title from "../shared/Titile/Title";

const Education = () => {
  return (
    <section
      id="education"
      className="py-12 mt-14 md:container mx-2 md:mx-auto"
    >
      <Title>Education</Title>
      <div className="mt-10 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Education Block 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-300">
              B.Sc. in Computer Science & Engineering
            </h3>
            <p className="text-lg text-gray-300">
              Pundra University of Science & Technology, Bogura-5800 (2019-2023)
            </p>
            <p className="text-sm text-gray-400">CGPA: 3.78</p>
          </div>

          {/* Education Block 2  */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-300">
              HSC (Science)
            </h3>
            <p className="text-lg text-gray-300">
              Govt. Azizul Haque College, Bogura-5800 - Rajshahi Board (2017)
            </p>
            <p className="text-sm text-gray-400">GPA: 4.67</p>
          </div>

          {/* Education Block 3  */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-300">
              Dakhil (Science)
            </h3>
            <p className="text-lg text-gray-300">
              TNAN Fazil Madrasah, Bogura-5800 - Madrasah Board (2015)
            </p>
            <p className="text-sm text-gray-400">GPA: 5.00 (All Subjects)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
