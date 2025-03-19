"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";

type SocialLink = {
  platform: "twitter" | "linkedin" | "facebook" | "instagram";
  url: string;
};

type Member = {
  name: string;
  role: string;
  image: string;
  message?: string;
  social?: SocialLink[];
};

const members: Member[] = [
  {
    name: "Alex Lindsay",
    role: "Head Of Operations at 090 Media",
    image: "/ubea4.jpg",
    social: [
      { platform: "twitter", url: "https://twitter.com/johndoe" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/lindsayalex/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
      { platform: "facebook", url: "https://facebook.com/bertrand" },
      { platform: "instagram", url: "https://instagram.com/alicejohnson" },
    ],
  },
  {
    name: "Bertrand Tchoumi, Ed.D",
    role: "Auteur/Edupreneur/Principal/Adjunct Instructor AATF Outstanding Administrator",
    image: "/ubea3.jpg",
    social: [
      { platform: "twitter", url: "https://twitter.com/johndoe" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/bertrand-tchoumi-ed-d-64a6b660/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
      { platform: "facebook", url: "https://facebook.com/bertrand" },
      { platform: "instagram", url: "https://instagram.com/alicejohnson" },
    ],
  },
  {
    name: "Cera Doering, Ed.D.",
    role: "Executive Director, Founder UBEA",
    image: "/usa.jpeg",
    
    social: [
      { platform: "twitter", url: "https://twitter.com/johndoe" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/cera-doering-ed-d-5308952/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
      { platform: "facebook", url: "https://facebook.com/bertrand" },
      { platform: "instagram", url: "https://instagram.com/alicejohnson" },
    ],
  },
];

const socialIcons = {
  twitter: Twitter,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
};

export default function BoardSection() {
  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          Advisory Board Members
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
              width={400}
              height={50}
              className="w-full h-fit object-cover transition-transform duration-300 "
            />
            
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {member.name}
                <hr className="border-2 w-[25%] rounded-md mx-auto border-gray-200"/>
              </h3>
              <p className="text-gray-500 dark:text-gray-400">{member.role}</p>
              {member.message && (
                <p className="mt-2 text-gray-600 dark:text-gray-300 italic">
                  {member.message}
                  
                </p>
                
              )}

              {/* Social Media Icons */}
              {member.social && (
                <div className="flex  justify-center gap-3 mt-4">

                  {member.social.map((social, idx) => {
                    const Icon = socialIcons[social.platform];
                    return Icon ? (
                      
                      <a
                      
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-200 dark:bg-blue-700 rounded-full hover:bg-blue-500 hover:text-white transition"
                      >
                        <Icon size={20} />
                      </a>
                      
                    ) : null;
                  })}
                </div>
                
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
