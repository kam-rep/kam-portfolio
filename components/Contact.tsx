export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="rounded-3xl border border-gray-800 bg-gray-900/40 p-10 backdrop-blur-md">

        <p className="text-cyan-400">
          Contact
        </p>

        <h2 className="mt-2 text-4xl font-bold">
          Let’s Build Something Reliable
        </h2>

        <p className="mt-4 max-w-2xl text-gray-400">
          Interested in cloud infrastructure, DevOps engineering,
          Kubernetes platforms, or scalable backend systems?
          Let’s connect.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {/* Email */}
          <div className="rounded-2xl border border-gray-800 bg-black/40 p-6">
            <p className="text-sm text-gray-500">
              Email
            </p>

            <p className="mt-2 text-lg text-white">
              kameshtech1@gmail.com
            </p>
          </div>

          {/* LinkedIn */}
          <div className="rounded-2xl border border-gray-800 bg-black/40 p-6">
            <p className="text-sm text-gray-500">
              LinkedIn
            </p>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="mt-2 block text-lg text-cyan-400 hover:underline"
            >
              linkedin.com/in/kameshwar-vivekananthan
            </a>
          </div>

          {/* GitHub */}
          <div className="rounded-2xl border border-gray-800 bg-black/40 p-6">
            <p className="text-sm text-gray-500">
              GitHub
            </p>

            <a
              href="https://github.com"
              target="_blank"
              className="mt-2 block text-lg text-cyan-400 hover:underline"
            >
              github.com/kam-rep
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}