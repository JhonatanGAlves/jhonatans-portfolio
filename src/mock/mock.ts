import imageDefault from "../assets/projectThumbnails/default.png";
import dtMoney from "../assets/projectThumbnails/dtmoney-financial-control.png";

enum TOOL_COLOR_PALETTE {
  "TypeScript" = "bg-[var(--ts-color)]",
  "JavaScript" = "bg-[var(--js-color)]",
  "HTML" = "bg-[var(--html-color)]",
  "CSS" = "bg-[var(--css-color)]",
  "SCSS" = "bg-[var(--scss-color)]",
  "PHP" = "bg-[var(--php-color)]",
  "React" = "text-[var(--react-color)]",
  "Node" = "text-[var(--node-color)]",
}

export const MY_PROJECTS: ProjectsTypes[] = [
  {
    id: 1,
    name: "Dtmoney Financial Control",
    description:
      "This is a financial control application built on the Ignite course by @Rocketseat using the following tecs: React, TypeScript, miragejs for fake API, axios for requesting API and Styled Components for CSS in JS.",
    url: "https://github.com/JhonatanGAlves/dtmoney-financial-control",
    createdAt: "2022-04-28T13:31:26Z",
    tools: {
      TypeScript: {
        percentage: 96.4,
        color: TOOL_COLOR_PALETTE.TypeScript,
      },
      HTML: {
        percentage: 3.6,
        color: TOOL_COLOR_PALETTE.HTML,
      },
    },
    stack: "FRONTEND",
    mainTools: {
      React: {
        color: TOOL_COLOR_PALETTE.React,
        borderColor: "cyan",
      },
    },
    image: dtMoney,
  },
  {
    id: 2,
    name: "Phone Book App",
    description: "A FullStack App.",
    url: "https://github.com/JhonatanGAlves/phone-book-app",
    createdAt: "2024-08-15T22:46:29Z",
    tools: {
      TypeScript: {
        percentage: 55.2,
        color: TOOL_COLOR_PALETTE.TypeScript,
      },
      HTML: {
        percentage: 1.3,
        color: TOOL_COLOR_PALETTE.HTML,
      },
      JavaScript: {
        percentage: 43.3,
        color: TOOL_COLOR_PALETTE.JavaScript,
      },
      CSS: {
        percentage: 0.2,
        color: TOOL_COLOR_PALETTE.CSS,
      },
    },
    stack: "FULLSTACK",
    mainTools: {
      React: {
        color: TOOL_COLOR_PALETTE.React,
        borderColor: "cyan",
      },
      Node: {
        color: TOOL_COLOR_PALETTE.Node,
        borderColor: "green",
      },
    },
    image: imageDefault,
  },
];
