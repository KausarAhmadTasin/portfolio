import { FaGraduationCap } from "react-icons/fa";
import Title from "../shared/Titile/Title";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 mt-12 md:container mx-4 md:mx-auto"
    >
      <div className="lg:pb-6">
        <Title>Education</Title>
      </div>

      <div className="max-w-5xl mx-auto relative flex flex-col md:flex-row items-center gap-8 p-8 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-xl overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-green-400 opacity-15 blur-[100px] z-0" />

        {/* Text & Icon Section */}
        <div className="relative z-10 flex-1 flex items-start gap-4">
          <FaGraduationCap className="text-5xl text-[#66EC97] mt-1" />
          <div>
            <h3 className="text-2xl md:text-2xl font-semibold text-[#66EC97] mb-2">
              B.Sc. in Computer Science & Engineering
            </h3>
            <p className="text-lg text-gray-300">
              Pundra University of Science & Technology, Bogura-5800
            </p>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-3 text-sm text-gray-400">
              <span>2019 – 2023</span>
            </div>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="hidden md:block w-1/3 relative z-10 rounded-xl overflow-hidden border border-[#66EC97]/30 shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.286540626344!2d89.3490259!3d24.922306699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcff6dad46983f%3A0x32606b40b622acdb!2sPundra%20University%20of%20Science%20%26%20Technology%20(PUB)!5e0!3m2!1sen!2sbd!4v1744379913806!5m2!1sen!2sbd"
            width="100%"
            height="150"
            allowFullScreen={true}
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Education;
