import portfolio from "../assets/projectThumbnails/portfolio.png";
import phoneBookApp from "../assets/projectThumbnails/phone-book-app.png";
import coffeeDelivery from "../assets/projectThumbnails/coffee-delivery.png";
import capputeenoEcommerce from "../assets/projectThumbnails/capputeeno-delivery.png";
import todoList from "../assets/projectThumbnails/todo-list.png";
import githubTasksBlog from "../assets/projectThumbnails/github-blog.png";
import dtMoney from "../assets/projectThumbnails/dt-money.png";
import formProgress from "../assets/projectThumbnails/form-progess-bar.png";
import loginForm from "../assets/projectThumbnails/login-form.png";
import screenDots from "../assets/projectThumbnails/screen-dots.png";

enum TOOL_COLOR_PALETTE {
  "TypeScript" = "bg-[var(--ts-color)]",
  "JavaScript" = "bg-[var(--js-color)]",
  "HTML" = "bg-[var(--html-color)]",
  "CSS" = "bg-[var(--css-color)]",
  "SCSS" = "bg-[var(--scss-color)]",
  "PHP" = "bg-[var(--php-color)]",
  "React" = "text-[var(--react-color)]",
  "Node" = "text-[var(--node-color)]",
  "Next" = "text-[var(--next-color)]",
}

export const MY_PROJECTS: ProjectsTypes[] = [
  {
    id: 1,
    name: "Jhonatan's Portfolio",
    description: "Description",
    url: "https://github.com/JhonatanGAlves/jhonatans-portfolio",
    productionUrl: "https://jhonatandev-alves-app.vercel.app/",
    tools: {
      TypeScript: {
        percentage: 95.0,
        color: TOOL_COLOR_PALETTE.TypeScript,
      },
      HTML: {
        percentage: 1.1,
        color: TOOL_COLOR_PALETTE.HTML,
      },
      JavaScript: {
        percentage: 2.4,
        color: TOOL_COLOR_PALETTE.JavaScript,
      },
      CSS: {
        percentage: 1.5,
        color: TOOL_COLOR_PALETTE.CSS,
      },
    },
    stack: "FRONTEND",
    mainTools: {
      React: {
        color: TOOL_COLOR_PALETTE.React,
        borderColor: "cyan",
      },
    },
    image: portfolio,
  },
  {
    id: 2,
    name: "Phone Book App",
    description: "A FullStack App.",
    url: "https://github.com/JhonatanGAlves/phone-book-app",
    productionUrl: "",
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
    image: phoneBookApp,
  },
  {
    id: 3,
    name: "Coffee Delivery",
    description: "Description",
    url: "https://github.com/JhonatanGAlves/coffee-delivery",
    productionUrl: "https://coffee-delivery-rose.vercel.app/",
    tools: {
      TypeScript: {
        percentage: 97.6,
        color: TOOL_COLOR_PALETTE.TypeScript,
      },
      JavaScript: {
        percentage: 0.3,
        color: TOOL_COLOR_PALETTE.JavaScript,
      },
      CSS: {
        percentage: 2.1,
        color: TOOL_COLOR_PALETTE.CSS,
      },
    },
    stack: "FRONTEND",
    mainTools: {
      React: {
        color: TOOL_COLOR_PALETTE.React,
        borderColor: "cyan",
      },
      Next: {
        color: TOOL_COLOR_PALETTE.Next,
        borderColor: "gray",
      },
    },
    image: coffeeDelivery,
  },
  {
    id: 4,
    name: "Capputeeno E-commerce",
    description: "Description",
    url: "https://github.com/JhonatanGAlves/capputeeno-e-commerce",
    productionUrl: "",
    tools: {
      TypeScript: {
        percentage: 90.4,
        color: TOOL_COLOR_PALETTE.TypeScript,
      },
      JavaScript: {
        percentage: 6.9,
        color: TOOL_COLOR_PALETTE.JavaScript,
      },
      CSS: {
        percentage: 2.7,
        color: TOOL_COLOR_PALETTE.CSS,
      },
    },
    stack: "BACKEND",
    mainTools: {
      React: {
        color: TOOL_COLOR_PALETTE.React,
        borderColor: "cyan",
      },
      Next: {
        color: TOOL_COLOR_PALETTE.Next,
        borderColor: "gray",
      },
    },
    image: capputeenoEcommerce,
  },
  {
    id: 5,
    name: "Dtmoney Financial Control",
    description:
      "This is a financial control application built on the Ignite course by @Rocketseat using the following tecs: React, TypeScript, miragejs for fake API, axios for requesting API and Styled Components for CSS in JS.",
    url: "https://github.com/JhonatanGAlves/dtmoney-financial-control",
    productionUrl: "",
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
    id: 6,
    name: "Todo List",
    description: "Description",
    url: "https://github.com/JhonatanGAlves/todo-list",
    productionUrl: "https://todo-list-seven-hazel.vercel.app/",
    tools: {
      TypeScript: {
        percentage: 88.4,
        color: TOOL_COLOR_PALETTE.TypeScript,
      },
      HTML: {
        percentage: 3.6,
        color: TOOL_COLOR_PALETTE.HTML,
      },
      JavaScript: {
        percentage: 6.8,
        color: TOOL_COLOR_PALETTE.JavaScript,
      },
      CSS: {
        percentage: 1.2,
        color: TOOL_COLOR_PALETTE.CSS,
      },
    },
    stack: "FRONTEND",
    mainTools: {
      React: {
        color: TOOL_COLOR_PALETTE.React,
        borderColor: "cyan",
      },
    },
    image: todoList,
  },
  {
    id: 7,
    name: "Github Tasks Blog",
    description: "Description",
    url: "https://github.com/JhonatanGAlves/github-tasks-blog",
    productionUrl: "https://github-tasks-blog.vercel.app/",
    tools: {
      TypeScript: {
        percentage: 92.5,
        color: TOOL_COLOR_PALETTE.TypeScript,
      },
      CSS: {
        percentage: 5.3,
        color: TOOL_COLOR_PALETTE.CSS,
      },
      JavaScript: {
        percentage: 2.2,
        color: TOOL_COLOR_PALETTE.JavaScript,
      },
    },
    stack: "FRONTEND",
    mainTools: {
      React: {
        color: TOOL_COLOR_PALETTE.React,
        borderColor: "cyan",
      },
    },
    image: githubTasksBlog,
  },
  {
    id: 8,
    name: "Form Progress Bar",
    description: "Description",
    url: "https://github.com/JhonatanGAlves/form-with-progress-bar",
    productionUrl: "",
    tools: {
      TypeScript: {
        percentage: 96.7,
        color: TOOL_COLOR_PALETTE.TypeScript,
      },
      HTML: {
        percentage: 3.3,
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
    image: formProgress,
  },
  {
    id: 9,
    name: "Login Form",
    description:
      "Login Form is a small application that simulates a login system that triggers a Promise function simulating a request. I came across a video on Youtube that contained this challenge -> https://www.youtube.com/watch?v=NAtf3T9gG7s | The following tecs were used: TypeScript, React, Styled-components and Phosphor-react",
    url: "https://github.com/JhonatanGAlves/login-form",
    productionUrl: "",
    tools: {
      TypeScript: {
        percentage: 96.2,
        color: TOOL_COLOR_PALETTE.TypeScript,
      },
      HTML: {
        percentage: 3.8,
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
    image: loginForm,
  },
  {
    id: 10,
    name: "Screen Dots",
    description:
      "Screen Dots is a small application that renders elements on the screen according to where they are clicked. The following tecs were used: TypeScript, React, Styled-components and Phosphor-react",
    url: "https://github.com/JhonatanGAlves/screen-dots",
    productionUrl: "",
    tools: {
      TypeScript: {
        percentage: 93.0,
        color: TOOL_COLOR_PALETTE.TypeScript,
      },
      HTML: {
        percentage: 7.0,
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
    image: screenDots,
  },
];
