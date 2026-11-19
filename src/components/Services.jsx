import {
  Code2,
  Camera,
  Guitar,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, responsive and user-friendly websites and web applications for businesses, organizations and personal brands.",
    skills: ["React", "JavaScript", "Tailwind CSS"],
  },

  {
    icon: Camera,
    title: "Photography",
    description:
      "Creative photography services designed to capture people, events, products and important moments.",
    skills: ["Portraits", "Events", "Creative"],
  },

  {
    icon: Guitar,
    title: "Instrumentalist",
    description:
      "Professional instrumental services for live performances, worship, studio sessions, events and musical projects.",
    skills: ["Guitar", "Live Performance", "Music"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-white px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">
            What I Do
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            My Services
          </h2>

          <p className="mt-5 text-gray-600">
            Technology, photography and music — bringing creativity and
            professional skills together.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  Let's Work
                  <ArrowUpRight size={18} />
                </a>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Services;