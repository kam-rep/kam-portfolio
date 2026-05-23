"use client";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-black text-white">
        
        {/* Background Glow */}
        <div className="absolute left-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-cyan-500/20 blur-3xl"></div>

        <div className="absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-3xl"></div>

        {/* Hero Section */}
        <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-32 md:flex-row md:pt-0">
          
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <p className="mb-4 text-cyan-400">
              DevOps Engineer • Cloud Engineer
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Building Reliable <br />
              Cloud Infrastructure
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-400">
              I specialize in Kubernetes, GCP, AWS, CI/CD pipelines,
              Infrastructure Automation, and scalable cloud-native platforms
              with production-grade reliability.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-lg bg-cyan-500 px-6 py-3 font-medium text-black transition hover:bg-cyan-400">
                View Projects
              </button>

              <a
                href="/Kameshwar_Resume.pdf"
                download
                className="rounded-lg border border-gray-700 px-6 py-3 transition hover:border-cyan-400"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mt-16 flex-1 md:mt-0"
          >
            <div className="animate-float rounded-2xl border border-gray-800 bg-gray-900/50 p-6 shadow-2xl backdrop-blur-md">
              
              <div className="mb-4 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>

              <TypeAnimation
                sequence={[
                  `$ kubectl get pods

              NAME                    STATUS
              auth-service            Running
              billing-service         Running
              notification-service    Running
              gateway-service         Running`,

                  2000,

                  `$ terraform apply

              Apply complete!
              Infrastructure deployed successfully.`,

                  2000,

                  `$ argocd app sync production

              Application synced.
              Zero downtime deployment completed.`,

                  2000,
                ]}
                speed={70}
                repeat={Infinity}
                className="overflow-x-auto whitespace-pre-wrap text-sm text-green-400"
              />
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <Skills />
        {/* Projects Section */}
        <Projects />
        {/* Contact Section */}
        <Contact />

      </main>
    </>
  );
}