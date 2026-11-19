import { useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Adefam Computer Infotech Hub",
    category: "Web Development",
    description:
      "Educational platform with student and administrative features.",
    image: "/images/projects/adefam.png",
    link: "https://adefam.vercel.app/",
  },

  {
    id: 2,
    title: "BrightFuture School",
    category: "Web Development",
    description:
      "Modern and responsive school website.",
    image: "/images/projects/ara-ire.png",
    link: " https://sirvick-concept.github.io/supersimple-website/",
  },

  {
    id: 3,
    title: "Portrait Session",
    category: "Photography",
    description:
      "Creative portrait photography session.",
    image: "/images/projects/faith20.png",
    link: "https://sirvickphotography.mypixieset.com/",
  },

  {
    id: 4,
    title: "Portrait Session",
    category: "Photography",
    description:
      "Creative portrait photography session.",
    image: "/images/projects/jp.png",
    link: "https://sirvickphotography.mypixieset.com/",
  },

  {
    id: 5,
    title: "Live Guitar Performance",
    category: "Music",
    description:
      "Live instrumental performance.",
    image: "/images/projects/04.jpg",
    link: "https://example.com/guitar-performance-1",
  },

  {
    id: 6,
    title: "Live Guitar Performance",
    category: "Music",
    description:
      "Live instrumental performance.",
    image: "/images/projects/m1.png",
    link: "https://example.com/guitar-performance-2",
  },
];

const categories = [
  "All",
  "Web Development",
  "Photography",
  "Music",
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section
      id="portfolio"
      className="bg-gray-50 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">
            My Work
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Selected Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Explore some of my work across technology, photography and music.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {project.description}
                </p>

                {/* Individual Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800 transition"
                >
                  View Project
                  <ExternalLink size={17} />
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Portfolio;