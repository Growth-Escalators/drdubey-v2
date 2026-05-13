"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

type FeaturedAchievement = {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  imageUrl: string;
};

interface Props {
  achievements: FeaturedAchievement[];
}

export default function FeaturedAchievementsSection({ achievements }: Props) {
  if (!achievements || achievements.length === 0) return null;

  return (
    <section className="w-[90%] mx-auto my-16">
      <div className="text-center mb-10">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
          Recognition
        </h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-2">
          Awards &amp; Achievements
        </h3>
        <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
          Milestones that reflect our commitment to excellence in orthopaedic care.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement) => (
          <Link
            key={achievement.id}
            href={`/achievements/${achievement.slug}`}
            className="group rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-52 bg-gray-100">
              <Image
                src={achievement.imageUrl}
                alt={achievement.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <span className="inline-block text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 mb-3 uppercase tracking-wider">
                {achievement.category}
              </span>
              <h4 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
                {achievement.title}
              </h4>
              <p className="text-sm text-gray-500 mt-2">
                {new Date(achievement.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                })}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/achievements"
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
        >
          View All Achievements
        </Link>
      </div>
    </section>
  );
}
