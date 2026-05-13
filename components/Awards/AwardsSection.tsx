import React from "react";
import { motion } from "framer-motion";

const AwardsSection = () => {
  const professionalAchievements = [
    "Most trusted Joint Replacement Surgeon of North India by central minister S.P bhagel and Athawale ji in Delhi 2024",
    "UP Ratan samman award for excellent work in the field of Joint Replacement by Central minister Giriraj singh ji 2024",
    "International business award by Sonu Sood in Delhi 2023",
    "Health care Achievers award for most trusted Joint Replacement Surgeon of the year 2023",
    "Excellence in Hip and Knee Replacement in Rajasthan by Big FM 2023",
    "ET leadership excellence award (Times of India) in the field of Joint Replacement Surgery by Governor of Rajasthan and Miss universe 2023",
    "Health care award for Best Joint Replacement Surgeon of Rajasthan by Dainik Bhaskar 2022",
    "Big Impact award by Big FM for Excellence in Joint Replacement Surgery",
    "'World Record Holder' of performing 'Highest Numbers Of Joint Replacement Surgeries in a Single Day' Acknowledged by Forbes, IBR and Golden book of World Records in 2024",
    "One of best Joint Replacement surgeon of the North India performing highest numbers of Knee and Hip Replacements per month",
    "One of the fastest Joint Replacement Surgeon of the India who performed Knee Replacement within 10 to 15 minutes by his latest Zero technique with fast track Rehabilitation",
  ];

  const academicAchievements = [
    "International Conference on Joint Replacement Surgery, London, UK 2024",
    "European Orthopedic Society Annual Meeting, Berlin, Germany 2023",
    "Asia Pacific Joint Replacement Summit, Singapore 2023",
    "Indian Orthopedic Association National Conference, Mumbai 2022",
    "World Congress on Orthopedic Surgery, Dubai 2022",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#f0f4ff] to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
            Recognition & Excellence
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Celebrating our achievements and awards in the field of joint replacement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Academic Achievements</h2>
            <ul className="space-y-4">
              {academicAchievements.map((achievement, index) => (
                <li key={index} className="text-lg text-gray-700">
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">Professional Achievements</h2>
            <ul className="space-y-4">
              {professionalAchievements.map((achievement, index) => (
                <li key={index} className="text-lg text-gray-700">
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
