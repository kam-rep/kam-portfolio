export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-cyan-500/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-white">
          KV
        </h1>

        {/* Navigation */}
        <div className="flex gap-8 text-sm font-medium text-gray-300">
          <a
            href="#about"
            className="transition hover:text-cyan-400"
          >
            About
          </a>

          <a
            href="#projects"
            className="transition hover:text-cyan-400"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="transition hover:text-cyan-400"
          >
            Skills
          </a>

          <a
            href="#contact"
            className="transition hover:text-cyan-400"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}