"use client"

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Users, Briefcase, UserCheck, Globe } from "lucide-react"; // Import icons

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div 
      ref={ref} 
      className="relative text-white py-16 px-6 bg-cover bg-center "
      style={{ backgroundImage: "url('uni3.png')" }} // Set background image
    >
      <div className="absolute bg-black inset-0 bg-opacity-50"></div> {/* Overlay */}
      
      <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        
        {/* Applicants */}
        <div className="flex flex-col items-center">
          <Users size={150} className="mb-3 mt-20 text-blue-300" /> {/* Big Icon */}
          <h2 className="text-6xl font-bold">
            {inView && <CountUp start={0} end={15000} duration={2.5} separator="," />}+
          </h2>
          <p className="text-4xl mt-2">Applicants</p>
        </div>

        {/* Years of Experience */}
        <div className="flex flex-col items-center">
          <Briefcase size={150} className="mb-3 mt-20 text-yellow-300" />
          <h2 className="text-6xl font-bold">
            {inView && <CountUp start={0} end={13} duration={2.5} />}+
          </h2>
          <p className="text-4xl mt-2">Years of Experience</p>
        </div>

        {/* Industry Experts */}
        <div className="flex flex-col items-center">
          <UserCheck size={150} className="mb-3 mt-20 text-green-300" />
          <h2 className="text-6xl font-bold">
            {inView && <CountUp start={0} end={30} duration={2.5} />}+
          </h2>
          <p className="text-4xl mt-2">Industry Experts</p>
        </div>

        {/* Countries */}
        <div className="flex flex-col items-center">
          <Globe size={150} className="mb-3 mt-20 text-red-300" />
          <h2 className="text-6xl font-bold">
            {inView && <CountUp start={0} end={20} duration={2.5} />}+
          </h2>
          <p className="text-4xl mt-2">Countries</p>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;

