import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">
            Get In Touch
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-600">
            Have a project, event or creative idea? Tell me about it and
            let's bring it to life.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Contact Information
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Feel free to reach out for web development, photography,
              instrumental performances or other creative projects.
            </p>

            <div className="mt-8 space-y-6">

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Mail size={22} />
                </div>

                
<div> 
  <p className="text-sm text-gray-500">Email</p> 
  <a href="mailto:Sirvick2000@gmail.com" 
  className="font-medium text-gray-900 hover:text-blue-600 transition" >
     Sirvick2000@gmail.com </a>
      </div>

              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-gray-900">
                    +234 813 887 2318
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-gray-900">
                    Nigeria
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <form className="rounded-3xl bg-gray-50 p-6 sm:p-8">

            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

            </div>

            <div className="mt-6">
              <label
                htmlFor="service"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Service
              </label>

              <select
                id="service"
                required
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">Select a service</option>
                <option>Web Development</option>
                <option>Photography</option>
                <option>Instrumentalist</option>
                <option>Music Instruction</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Message
              </label>

              <textarea
                id="message"
                rows="5"
                placeholder="Tell me about your project..."
                required
                className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message
              <Send size={18} />
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;