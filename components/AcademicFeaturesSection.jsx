"use client";

import React from "react";
import { Book, Users, Calendar, Award, Clock, Lightbulb } from "lucide-react";

export function AcademicFeaturesSection() {
  const features = [
    {
      icon: <Book className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Diverse Curriculum",
      description:
        "Offering a wide range of subjects in Sciences, Arts, and Commerce streams.",
    },
    {
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Experienced Faculty",
      description:
        "Learn from highly qualified teachers with years of academic experience.",
    },
    {
      icon: <Calendar className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Structured Programs",
      description:
        "Well-designed academic calendar with regular assessments and feedback.",
    },
    {
      icon: <Award className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Academic Excellence",
      description:
        "Consistent record of outstanding results in board examinations.",
    },
    {
      icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Regular Classes",
      description:
        "Maintained schedule with timely completion of syllabus and revision.",
    },
    {
      icon: <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Innovation & Research",
      description: "Encouraging creative thinking and research-based learning.",
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32">
      <div className="container mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Academic Excellence
            </h2>
            <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 dark:text-gray-400 leading-relaxed px-4">
              Providing quality education with modern teaching methodologies
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 sm:space-y-3 border rounded-lg p-4 sm:p-6 transition-all hover:shadow-md dark:border-gray-800 text-center"
            >
              <div className="p-2 sm:p-3 rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
