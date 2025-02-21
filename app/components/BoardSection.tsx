"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const members = [
  {
    name: "John Doe",
    role: "Chief Executive Officer",
    image: "/member.jpg",
    message: "Striving to innovate and lead our company into the future."
  },
  {
    name: "Jane Smith",
    role: "Head of Operations",
    image: "/member3.jpg",
    message: "Ensuring smooth operations and efficient workflow every day."
  },
  {
    name: "Alice Johnson",
    role: "Marketing Director",
    image: "/member2.jpg",
    message: "Crafting compelling stories to connect with our audience."
  },
 
];

export default function BoardSection() {
  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl  md:text-4xl font-bold text-gray-800 dark:text-white">
        Advisory Board members
        </h2>
        
        <p className="mt-3 pb-6 text-gray-600 dark:text-gray-300">
          Our leadership team brings years of experience to drive our mission forward.
        </p>
        <hr className="w-[30%] mx-auto border-t-8 border-slate-300 rounded " />
      </div>

      <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member, index) => (
          <motion.div
            key={index}
            className="relative bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={member.image}
              alt={member.name}
              width={300}
              height={300}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{member.role}</p>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {member.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">{member.role}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300 italic">
                {member.message}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
