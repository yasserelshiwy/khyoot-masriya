import { motion } from "framer-motion";

// import FloatingImages from "./FloatingImages";
export default function Header({ headerImage }) {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -20, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 250, damping: 20 },
    },
  };

  return (
    <header>
      <motion.div
        className="border-b border-[#c79d56] flex flex-col justify-center items-center p-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.img
          src={headerImage}
          alt="header"
          className="w-100"
          variants={item}
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        />

        <motion.p
          className="text-[#c79d56] mt-2 text-[15px] md:text-lg font-semibold"
          variants={item}
        >
          خيوط مصرية.. أناقة، راحة، وأصالة في كل تفصيلة
        </motion.p>

        <motion.p className="text-[#c79d56] text-base" variants={item}>
          Home Collection
        </motion.p>
      </motion.div>
    </header>
  );
}
