import { ArrowRight,  } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-white px-6 pt-24 text-gray-900 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Hero Content */}
        <div>
          <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-blue-600">
            Sir Vick Concept
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Creative Ideas.
            <br />
            <span className="text-blue-600">
              Digital Experiences.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            I create modern digital experiences, capture meaningful moments
            through photography, and deliver professional instrumental
            performances.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700"
            >
              View My Work
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-blue-600 px-6 py-3 font-semibold text-blue-600 transition duration-300 hover:bg-blue-600 hover:text-white"
            >
              Let's Talk
            </a>

          </div>

          {/* Services */}
          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Web Developer
            </span>

            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Photographer
            </span>

            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Instrumentalist
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-100"></div>

          <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-blue-50"></div>

          <div className="relative overflow-hidden rounded-3xl bg-blue-600 p-3 shadow-2xl">
            <img
              src="/images/mylogo.png"
              alt="Sir Vick Concept"
              className="h-[500px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;