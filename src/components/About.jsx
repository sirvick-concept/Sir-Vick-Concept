import { CheckCircle } from "lucide-react";

const About = () => {
  const highlights = [
    "Modern and responsive websites",
    "Creative and professional photography",
    "Live and studio instrumental performances",
    "Creative solutions tailored to each client",
  ];

  return (
    <section
      id="about"
      className="bg-gray-50 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Image */}
        <div className="relative">
          <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full bg-blue-100"></div>

          <img
            src="/images/about.jpg"
            alt="About Sir Vick Concept"
            className="relative h-[600px] w-full rounded-3xl object-cover shadow-xl"
          />
        </div>

        {/* Content */}
        <div>
          <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">
            About Us
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Creativity Meets Technology
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Sir Vick Concept is a creative brand focused on technology,
            photography, and music. We combine creativity, technical skills,
            and artistic expression to provide quality services for
            individuals, businesses, and organizations.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Whether you need a professional website, beautiful photographs,
            or an instrumentalist for your musical project or event, Sir Vick
            Concept is ready to bring your ideas to life.
          </p>

          {/* Highlights */}
          <div className="mt-8 space-y-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle
                  size={20}
                  className="shrink-0 text-blue-600"
                />

                <span className="text-gray-700">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;