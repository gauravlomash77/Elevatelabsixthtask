import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full bg-dark/70 backdrop-blur-lg shadow-md z-50"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-primary">MyPortfolio</h1>
        <ul className="flex space-x-6 text-lg">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-secondary transition-colors cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
