import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
  FaEnvelope,
  FaWhatsappSquare,
} from "react-icons/fa";
import moment from "moment";

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

export const jobExperiences: JobTypes[] = [
  {
    period: {
      start: "2021/09/01",
      end: moment().format("YYYY/MM/DD"),
    },
    companyName: "Intelie by Viasat",
    site: "https://www.intelie.ai/",
    role: "Software Developer",
    locationType: "Remote",
    description:
      "I have been developing and optimizing dashboards for the KPI Performance team, focusing on the Oil & Gas industry. These dashboards handle time series events and can be fully dynamically built according to user needs, such as Grafana. Events come from O&G platforms, energy platforms and vehicles.",
    isPresent: true,
  },
  {
    period: {
      start: "2021/01/05",
      end: "2022/08/27",
    },
    companyName: "Eleven Up",
    role: "Web Developer",
    site: "https://elevenup.com.br/",
    locationType: "Botucatu, SP",
    description:
      "I was responsible for the development of institutional websites and landing pages. I collected requirements, made the prototype of the page in Figma and, after approval, I started the development process using the WordPress CMS.",
    isPresent: false,
  },
];

export const collegeAndPresentCertifications: CourseTypes[] = [
  {
    schoolName: "FATEC - Botucatu, SP",
    courseName: "Analysis and Systems Development",
    period: "2019 - 2022",
    type: "Undergraduate",
  },
  {
    schoolName: "Master Method",
    courseName: "English Language",
    period: "2021 (Present)",
    type: "Certificate",
  },
  {
    schoolName: "Full Stack Club",
    courseName: "Full Stack Programming",
    period: "2024 (Present)",
    type: "Certificate",
  },
];

export const allCertifications: CourseTypes[] = [
  {
    period: "Completed in 2021",
    courseName: "React | Certificate of Authority",
    schoolName: "DevMedia",
    credentialLink:
      "https://www.devmedia.com.br/certificado/tecnologia/react/jhonatan-91",
  },
  {
    period: "Completed in 2021",
    courseName: "React | Creating my First Routes",
    schoolName: "DevMedia",
    credentialLink: "http://www.devmedia.com.br/cert/?id=112081",
  },
  {
    period: "Completed in 2021",
    courseName: "React | State Hooks and onClick event",
    schoolName: "DevMedia",
    credentialLink: "http://www.devmedia.com.br/cert/?id=112024",
  },
  {
    period: "Completed in 2021",
    courseName: "React | Creating my First Components",
    schoolName: "DevMedia",
    credentialLink: "http://www.devmedia.com.br/cert/?id=111937",
  },
  {
    period: "Completed in 2021",
    courseName: "Front-end Programmer | Introduction",
    schoolName: "DevMedia",
    credentialLink: "https://www.devmedia.com.br/cursos/certificado/?id=111908",
  },
  {
    period: "Completed in 2021",
    courseName: "More Techniques and Good Practices",
    schoolName: "Alura",
    credentialLink:
      "https://www.devmedia.com.br/certificado/tecnologia/react/jhonatan-91",
  },
  {
    period: "Completed in 2021",
    courseName: "TypeScript | Advancing the Language",
    schoolName: "Alura",
    credentialLink:
      "https://cursos.alura.com.br/certificate/d047ed8d-9f7b-44af-9cdc-c053fcf1c60f",
  },
  {
    period: "Completed in 2021",
    courseName: "TypeScript | Evolving your JavaScript",
    schoolName: "Alura",
    credentialLink:
      "https://cursos.alura.com.br/certificate/167ceaee-295a-4fa5-95fc-cd53b1eff358",
  },
  {
    period: "Completed in 2021",
    courseName: "Introduction to Git and GitHub",
    schoolName: "DIO",
    credentialLink: "https://certificates.digitalinnovation.one/217CC25C",
  },
  {
    period: "Completed in 2021",
    courseName: "Essential Programming Logic",
    schoolName: "DIO",
    credentialLink: "https://certificates.digitalinnovation.one/F3C61B02",
  },
  {
    period: "Completed in 2021",
    courseName: "JavaScript",
    schoolName: "B7Web",
    credentialLink:
      "https://alunos.b7web.com.br/media/certificates/certificado_9988957.jpg",
  },
  {
    period: "Completed in 2020",
    courseName: "Git/GitHub",
    schoolName: "B7Web",
    credentialLink:
      "https://alunos.b7web.com.br/media/certificates/certificado_9665643.jpg",
  },
  {
    period: "Completed in 2020",
    courseName: "HTML5 & CSS3",
    schoolName: "B7Web",
    credentialLink:
      "https://alunos.b7web.com.br/media/certificates/certificado_2730535.jpg",
  },
  {
    period: "Completed in 2011",
    courseName: "Assembly and maintenance of computers and networks",
    schoolName: "Microlins",
  },
  {
    period: "Completed in 2011",
    courseName: "Computer Operator",
    schoolName: "Microlins",
  },
];
