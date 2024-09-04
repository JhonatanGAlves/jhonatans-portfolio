import portfolio from "../assets/projectThumbnails/portfolio.png";
import phoneBookApp from "../assets/projectThumbnails/phone-book-app.png";
import coffeeDelivery from "../assets/projectThumbnails/coffee-delivery.png";
import capputeenoEcommerce from "../assets/projectThumbnails/capputeeno-delivery.png";
import todoList from "../assets/projectThumbnails/todo-list.png";
import githubTasksBlog from "../assets/projectThumbnails/github-blog.png";
import dtMoney from "../assets/projectThumbnails/dt-money.png";
import formProgress from "../assets/projectThumbnails/form-progess-bar.png";
import geolocationApp from "../assets/projectThumbnails/geolocation-app.png";
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
    description:
      "Personal portfolio website showcasing my projects, professional experience, and certifications. Built with modern web technologies to demonstrate my skills as a full stack developer.",
    url: "https://github.com/JhonatanGAlves/jhonatans-portfolio",
    productionUrl: "https://jhonatandev-alves-app.vercel.app/",
    tools: {
      TypeScript: {
        percentage: 91.6,
        color: TOOL_COLOR_PALETTE.TypeScript,
      },
      HTML: {
        percentage: 0.9,
        color: TOOL_COLOR_PALETTE.HTML,
      },
      JavaScript: {
        percentage: 6.2,
        color: TOOL_COLOR_PALETTE.JavaScript,
      },
      CSS: {
        percentage: 1.3,
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
    description:
      "Phone Book App is a full-stack application designed to manage and store contact information. This project is built with modern web technologies and follows best practices for a scalable and maintainable codebase.",
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
    description:
      "Project made through the Ignite course on the Rocketseat platform. Project carried out as the 2nd challenge to reinforce important ReactJS concepts.",
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
    description:
      "Capputeeno Ecommerce is an online store for coffee-related products, such as mugs and t-shirts. Features include adding and removing items from the cart, and a smooth checkout process.",
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
    url: "https://github.com/JhonatanGAlves/dt-money",
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
    description:
      "A simple front-end to-do list application for managing tasks efficiently. Built with modern web technologies to provide a clean and intuitive user experience.",
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
    description:
      "A web application that fetches GitHub profile information and displays user tasks as blog posts.",
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
    description:
      "A simple form where each filled field contributes to a dynamic progress bar. This interactive UI element provides visual feedback as users complete form fields.",
    url: "https://github.com/JhonatanGAlves/form-with-progress-bar",
    productionUrl: "https://form-with-progress-bar-eight.vercel.app/",
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
    name: "Geolocation App",
    description:
      "A React-based geolocation application utilizing the Leaflet library. Users can click on the map to add pins, each representing a location. Clicking on a pin opens a Bootstrap 5 modal displaying detailed information about the pin's latitude and longitude, including its address.",
    url: "https://github.com/JhonatanGAlves/geolocation-app",
    productionUrl: "https://geolocation-app-nine.vercel.app/",
    tools: {
      TypeScript: {
        percentage: 76.7,
        color: TOOL_COLOR_PALETTE.TypeScript,
      },
      HTML: {
        percentage: 9.6,
        color: TOOL_COLOR_PALETTE.HTML,
      },
      JavaScript: {
        percentage: 12.9,
        color: TOOL_COLOR_PALETTE.JavaScript,
      },
      CSS: {
        percentage: 0.8,
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
    image: geolocationApp,
  },
  {
    id: 10,
    name: "Login Form",
    description:
      "Login Form is a small application that simulates a login system that triggers a Promise function simulating a request. I came across a video on Youtube that contained this challenge -> https://www.youtube.com/watch?v=NAtf3T9gG7s",
    url: "https://github.com/JhonatanGAlves/login-form",
    productionUrl: "login-form-alves-app.vercel.app",
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
    id: 11,
    name: "Screen Dots",
    description:
      "Screen Dots is a small application that renders elements on the screen according to where they are clicked, allowing you to undo and redo steps. The following technologies were used: TypeScript, React, Styled-components and Phosphor-react",
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
