import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
  faTiktok,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { motion, useReducedMotion } from "framer-motion";

const links = [
  {
    label: "Khyoot Masriya Store",
    url: "https://khyootmasriya.com/",
    icon: faShoppingBag,
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/share/1B2JiEbJCP/?mibextid=wwXIfr",
    icon: faFacebook,
  },
  { label: "WhatsApp", url: "https://wa.me/201553414673", icon: faWhatsapp },
  {
    label: "Instagram",
    url: "https://www.instagram.com/khyootmasriya/?hl=en",
    icon: faInstagram,
  },

  {
    label: "TikTok",
    url: "https://www.tiktok.com/@khyoot_masriya",
    icon: faTiktok,
  },
  { label: "X", url: "https://x.com/KhyootMasriya", icon: faXTwitter },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/khyootmasriya/",
    icon: faLinkedin,
  },
];

export default function LandingLinks() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { type: "spring", stiffness: 300, damping: 22 },
    },
  };

  return (
    <div className="my-10 flex flex-col items-center justify-center px-6">
      <motion.div
        className="w-full max-w-md space-y-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {links.map((link, i) => (
          <motion.a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            whileHover={prefersReducedMotion ? {} : { y: -2, scale: 1.02 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            className="block text-center w-full bg-transparent backdrop-blur-2xl border border-[#c79d56] text-[#c79d56] font-semibold py-3 rounded-2xl shadow-md hover:bg-[#c79d56] hover:text-black transition-colors duration-300"
            aria-label={link.label}
          >
            <FontAwesomeIcon icon={link.icon} className="text-lg" />{" "}
            {link.label}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
