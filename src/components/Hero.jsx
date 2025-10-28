import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-b from-dark via-black to-gray-900">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 120, duration: 0.4 },
            },
          },
          particles: {
            color: { value: ["#6366F1", "#F472B6", "#22D3EE"] },
            links: { color: "#6366F1", distance: 150, enable: true, opacity: 0.3, width: 1 },
            move: { enable: true, speed: 1, outModes: "out" },
            number: { value: 60, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Profile Avatar */}
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
        <motion.div
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-primary shadow-[0_0_20px_#6366F1] overflow-hidden mb-6"
        >
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" // replace this with your photo
            alt="Gaurav Sharma"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </Tilt>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold mb-4 text-white"
      >
        Hi, I'm <span className="text-primary">Gaurav Sharma</span>
      </motion.h1>

      {/* Typing Effect */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-xl md:text-2xl text-gray-300 mb-6"
      >
        <Typewriter
          words={[
            "DevOps Engineer 🧠",
            "Full Stack Developer 💻",
            "Cloud Architect ☁️",
            "Tech Innovator 🚀",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </motion.div>

      {/* CTA Button */}
      <motion.button
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 20px #6366F1, 0 0 40px #F472B6",
        }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold transition-all"
      >
        Explore My Work
      </motion.button>

      {/* Floating Glow Animation */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-12 text-gray-400 text-sm"
      >
        Scroll Down ⬇️
      </motion.div>
    </section>
  );
}
