import React from "react";
import { Separator } from "@/components/ui/separator";
import { Users, Award, BookOpen, GraduationCap, History, MapPin } from "lucide-react";

export const metadata = {
  title: 'About Us | Mohammadpur Mohila College',
  description: 'Learn about the history, mission, vision, and achievements of Mohammadpur Mohila College.',
};

export default function AboutPage() {
  return (
    <main className="container px-4 py-12 md:px-6 md:py-24">
      {/* Hero section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">About Mohammadpur Mohila College</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-500 dark:text-gray-400">
          A premier institution committed to quality education for women since 1960
        </p>
      </section>

      {/* History section */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-4">
          <History className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Our History</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-lg mb-4">
              Mohammadpur Mohila College was established in 1960 with a vision to provide quality education to women in Bangladesh. The college started its journey with a small number of students and limited resources.
            </p>
            <p className="text-lg mb-4">
              Over the decades, the institution has grown significantly, expanding its infrastructure, faculty, and academic programs to meet the evolving educational needs of women in the country.
            </p>
            <p className="text-lg">
              Today, the college stands as a symbol of women&apos;s education and empowerment, having produced thousands of graduates who have made significant contributions to society in various fields.
            </p>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-lg h-[300px] flex items-center justify-center">
            <span className="text-lg text-gray-500 dark:text-gray-400">Historical Timeline Image</span>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Mission & Vision section */}
      <section className="mb-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-lg">
              To provide quality education to women, empowering them with knowledge, skills, and values to become responsible citizens and leaders of tomorrow. We aim to create an environment that fosters academic excellence, critical thinking, and holistic development.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-lg">
              To be the premier educational institution for women in Bangladesh, known for academic excellence and holistic development. We envision producing graduates who are not only academically proficient but also socially responsible, culturally sensitive, and morally upright.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements section */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-8">
          <Award className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Our Achievements</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col items-center p-6 text-center border rounded-lg">
            <span className="text-4xl font-bold text-primary mb-2">98%</span>
            <h3 className="text-xl font-semibold mb-2">Pass Rate</h3>
            <p className="text-gray-500 dark:text-gray-400">Consistently high success rate in board examinations</p>
          </div>
          <div className="flex flex-col items-center p-6 text-center border rounded-lg">
            <span className="text-4xl font-bold text-primary mb-2">50+</span>
            <h3 className="text-xl font-semibold mb-2">Years of Excellence</h3>
            <p className="text-gray-500 dark:text-gray-400">Decades of providing quality education to women</p>
          </div>
          <div className="flex flex-col items-center p-6 text-center border rounded-lg">
            <span className="text-4xl font-bold text-primary mb-2">10,000+</span>
            <h3 className="text-xl font-semibold mb-2">Alumni Network</h3>
            <p className="text-gray-500 dark:text-gray-400">Successful graduates across various professions</p>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Faculty section */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-8">
          <Users className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Our Faculty</h2>
        </div>
        <p className="text-lg mb-6">
          Our college takes pride in its team of dedicated and highly qualified faculty members who bring extensive academic knowledge and real-world experience to the classroom. They are committed to providing quality education and mentoring students to achieve their full potential.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {["Science", "Arts", "Commerce", "Language"].map((dept, i) => (
            <div key={i} className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{dept} Department</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                {Math.floor(Math.random() * 10) + 15} Faculty Members
              </p>
              <p className="text-sm">
                Specialized in various disciplines with extensive teaching experience.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Campus section */}
      <section>
        <div className="flex items-center gap-2 mb-8">
          <MapPin className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Our Campus</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-lg mb-4">
              Located in Mohammadpur, Dhaka, our campus provides a conducive environment for academic learning and personal growth. We have modern facilities including well-equipped classrooms, laboratories, library, and recreational spaces.
            </p>
            <p className="text-lg mb-4">
              The campus is designed to offer a safe and secure environment for female students, with facilities that cater to their educational, physical, and emotional wellbeing.
            </p>
            <p className="text-lg">
              We continuously upgrade our infrastructure to keep pace with technological advancements and ensure that our students have access to the best resources for their education.
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 rounded-lg h-[300px] flex items-center justify-center">
            <span className="text-lg text-gray-500 dark:text-gray-400">Campus View Image</span>
          </div>
        </div>
      </section>
    </main>
  );
}
