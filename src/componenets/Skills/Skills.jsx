import React from "react";
import Title from "../shared/Titile/Title";

const Skills = () => {
  const expertise = [
    "JavaScript",
    "React JS",
    "MongoDB",
    "Tailwind CSS",
    "JavaScript",
    "HTML",
  ];

  const comfortable = ["TypeScript", "Next JS", "MySQL", "Bootstrap"];
  const familiar = ["jQuery", "Node JS"];
  const tools = ["Git", "JWT", "React Query", "Firebase", "Netlify", "Vercel"];

  return (
    <div id="skills" className="w-full mt-28">
      <Title>Skills</Title>
      <div className="bg-[#171818] rounded-lg">
        <div className="container mx-auto py-10">
          <div className="mx-auto w-5/6">
            {/* Skills Section Grid */}
            <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 gap-x-8 text-lg">
              {/* Expertise */}
              <div className="md:flex flex-col gap-x-6">
                <p className="text-[#66ec97] mb-4">Expertise:</p>
                <ul>
                  {expertise.map((e) => (
                    <li className="mb-2" key={e}>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Comfortable */}
              <div className="md:flex flex-col gap-x-6">
                <p className="text-[#66ec97] mb-4">Comfortable:</p>
                <ul>
                  {comfortable.map((e) => (
                    <li className="mb-2" key={e}>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Familiar */}
              <div className="md:flex flex-col gap-x-6">
                <p className="text-[#66ec97] mb-4">Familiar:</p>
                <ul>
                  {familiar.map((e) => (
                    <li className="mb-2" key={e}>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="md:flex flex-col gap-x-6 mt-10 lg:mt-0">
                <p className="text-[#66ec97] mb-4">Tools:</p>
                <ul>
                  {tools.map((e) => (
                    <li className="mb-2" key={e}>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
