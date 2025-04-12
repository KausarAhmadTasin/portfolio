// components/Experience.tsx

import Image from "next/image";
import Title from "../shared/Titile/Title";

const Experience = () => {
  return (
    <section
      id="experience"
      className="lg:py-12 scroll-mt-16 py-8 px-4 md:px-8 lg:px-24 bg-[#0a0e17] text-white w-full mt-16"
    >
      <div className="mx-auto mb-8">
        {" "}
        <Title>Experience</Title>
      </div>

      <div className="mx-auto space-y-10">
        {/* Tork Inc. */}
        <div className="flex flex-col lg:flex-row gap-x-24 items-center justify-center">
          <div className="hidden lg:block">
            <Image
              src={"/images/tork-circle.png"}
              alt="kausar-at-tork"
              width={200}
              height={200}
            />
          </div>
          <div className="bg-[#0f1624] p-6 md:p-8 rounded-2xl shadow-lg space-y-4">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#68EC96]">
                Frontend Developer
              </h3>
              {/* <div className="flex items-center justify-between"> */}
              <p className="text-sm md:text-lg italic font-semibold text-gray-400">
                The Tork Inc.
              </p>
              <p className="text-sm md:text-sm text-gray-400">
                Chittagong, Bangladesh (On-site)
              </p>
              {/* </div> */}
            </div>

            {/* Full-Time Section */}
            <div>
              <h4 className="text-base lg:text-lg font-semibold text-[#8ffdb3]">
                Full-Time: Mar 2025 – Present
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  Collaborated with designers and backend developers to enhance
                  UX and integrate APIs efficiently.
                </li>
                <li>
                  Helped build two Learning Management Systems (LMS) with
                  payment integration and designed a student dashboard for
                  course management.
                </li>
                <li>
                  Assisted in creating an e-commerce platform for Japanese
                  beauty products with focus on user-friendly UI.
                </li>
              </ul>
            </div>

            {/* Internship Section */}
            <div>
              <h4 className="text-base lg:text-lg font-semibold text-[#8ffdb3]">
                Internship: Dec 2024 – Mar 2025
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  Contributed to a university website, including modules for
                  student & teacher dashboards, admin/super admin panels, and
                  profile management.
                </li>
                <li>
                  Communicated via Slack with remote teams to ensure progress
                  and team coordination.
                </li>
                <li>
                  Identified and resolved critical bugs to boost performance and
                  overall user experience.
                </li>
              </ul>
            </div>

            <p className="text-sm mt-4 text-gray-400">
              <span className="text-[#68EC96] font-medium">Technologies:</span>{" "}
              Next.js, JavaScript, SCSS, Bootstrap, Redux.js, SSLCommerz,
              BitBucket
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
