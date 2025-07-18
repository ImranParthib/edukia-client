import React from "react";
import { Book, Calendar, Users, Award, Clock, Lightbulb } from "lucide-react";

export function AcademicFeaturesSection() {
  const features = [
    {
      icon: <Book className="h-6 w-6" />,
      title: "Diverse Curriculum",
      description:
        "Offering a wide range of subjects in Sciences, Arts, and Commerce streams.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Experienced Faculty",
      description:
        "Learn from highly qualified teachers with years of academic experience.",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Structured Programs",
      description:
        "Well-designed academic calendar with regular assessments and feedback.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Academic Excellence",
      description:
        "Consistent record of outstanding results in board examinations.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Regular Classes",
      description:
        "Maintained schedule with timely completion of syllabus and revision.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation & Research",
      description: "Encouraging creative thinking and research-based learning.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Academic Excellence
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Providing quality education with modern teaching methodologies
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 border rounded-lg p-6 transition-all hover:shadow-md dark:border-gray-800"
            >
              <div className="p-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
