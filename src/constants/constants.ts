import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
  FaEnvelope,
  FaWhatsappSquare,
} from "react-icons/fa";

import reactIcon from "../assets/toolIcons/react.icon.svg";
import tsIcon from "../assets/toolIcons/ts-icon.svg";
import jsIcon from "../assets/toolIcons/js-icon.svg";
import nodeIcon from "../assets/toolIcons/nodejs-icon.svg";

export const mainExperiences = [
  {
    alt: "React Icon",
    tool: "React",
    image: reactIcon,
  },
  {
    alt: "TypeScript Icon",
    tool: "TypeScript",
    image: tsIcon,
  },
  {
    alt: "JavaScript Icon",
    tool: "JavaScript",
    image: jsIcon,
  },
  {
    alt: "NodeJS Icon",
    tool: "NodeJS",
    image: nodeIcon,
  },
];

export const socialMedia = [
  {
    mediaName: "LinkedIn",
    href: "https://www.linkedin.com/in/jhonatan-alves-11b28015b/",
    icon: FaLinkedin,
  },
  {
    mediaName: "GitHub",
    href: "https://github.com/JhonatanGAlves",
    icon: FaGithubSquare,
  },
  {
    mediaName: "Instagram",
    href: "https://www.instagram.com/jhonatangalves/",
    icon: FaInstagramSquare,
  },
  {
    mediaName: "Mail",
    href: "mailto:jhonatan.galves1996@gmail.com",
    icon: FaEnvelope,
  },
  {
    mediaName: "WhatsApp",
    href: "https://wa.me/5514991725235",
    icon: FaWhatsappSquare,
  },
];
