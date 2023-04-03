const posts = [
  {
    "id": "1",
    "image": "https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png?f=webp&w=256",
    "title": "What is React",
    "shortDescription": "ReactJS, also known as React, is an open-source JavaScript library for building user interfaces...",
    "fullDescription": "ReactJS, also known as React, is an open-source JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by a community of developers. React allows developers to create reusable UI components and build complex, interactive user interfaces for web and mobile applications.\nReact uses a declarative programming model, which means that developers specify the desired outcome, and React handles the details of how to achieve that outcome. This simplifies the development process and makes it easier to build complex applications.\nReact uses a virtual DOM (Document Object Model) to manage the state and update the UI efficiently. When a user interacts with the application, React updates the virtual DOM, compares it with the previous state, and updates only the necessary changes in the actual DOM. This makes the application faster and more efficient.\nReact has a large and active community of developers who create and maintain a wide range of libraries, tools, and extensions. This makes it easy to integrate React into existing projects and extend its functionality.\nReact is widely used in web development, and many popular websites and applications, including Facebook, Instagram, and Netflix, have been built with React.",
    "category": "react",
  },
  {
    "id": "2",
    "image": "https://cdn.iconscout.com/icon/free/png-256/redux-283024.png",
    "title": "About Redux",
    "shortDescription": "Redux is a state management library for React applications...",
    "fullDescription": "Redux is a state management library for React applications. It was created to solve the problem of managing the state of a large-scale application, where the state can become complex and difficult to manage. Redux provides a predictable state container for an application, which makes it easier to manage and update the state.\nIn a Redux application, the state is stored in a single store, which is managed by a set of reducers. A reducer is a pure function that takes the current state and an action, and returns a new state. Actions are dispatched to the store, which triggers the reducers to update the state.\nRedux also provides middleware, which allows developers to intercept and modify actions before they reach the reducers. This can be used to implement features such as logging, caching, and asynchronous behavior.\nOne of the key benefits of using Redux is that it provides a clear separation between the state and the UI components. This makes it easier to reason about the state of the application and the behavior of the UI components.\nRedux is widely used in React applications, and many popular libraries and frameworks, such as React Native, Angular, and Vue, have also been adapted to work with Redux.",
    "category": "react",
  },
  {
    "id": "3",
    "image": "https://icon-library.com/images/web-developer-icon/web-developer-icon-1.jpg",
    "title": "Frontend web development",
    "shortDescription": "Frontend web development is the process of creating and designing the visible parts of a website or web application that users interact with...",
    "fullDescription": "Frontend web development is the process of creating and designing the visible parts of a website or web application that users interact with. It involves creating the user interface (UI) and the user experience (UX) design, as well as the functionality that is visible to the user.\nFrontend developers use a combination of HTML, CSS, and JavaScript, to create the layout, design, and functionality of a website. They work closely with designers to create a visually appealing and user-friendly interface that meets the needs of the users.\nFrontend development also involves creating responsive designs that work across different devices and screen sizes, as well as ensuring that the website is accessible to users with disabilities.\nIn addition to creating the user interface, frontend developers also handle the interaction between the frontend and the backend of a website or web application. This involves handling user input and making requests to the backend to retrieve data or perform actions.\nOverall, frontend web development plays a crucial role in creating a positive user experience and ensuring that a website or web application is both functional and visually appealing.",
    "category": "web-development",
  },
  {
    "id": "4",
    "image": "https://destatic.blob.core.windows.net/images/bootstrap-logo.png",
    "title": "Bootstrap",
    "shortDescription": "Bootstrap is a free and open-source CSS framework that is used for building responsive, mobile-first web applications...",
    "fullDescription": "Bootstrap is a free and open-source CSS (Cascading Style Sheets) framework that is used for building responsive, mobile-first web applications. It was created by Twitter and is now maintained by a community of developers.\nBootstrap provides a set of pre-designed templates, styles, and components, such as buttons, forms, and navigation bars, that can be easily customized and used in web development projects. It also provides a grid system that allows developers to create responsive layouts that adjust to different screen sizes.\nBootstrap uses HTML, CSS, and JavaScript, and is compatible with all modern web browsers. It is designed to make web development faster and easier, and to ensure that websites and web applications are consistent and visually appealing.\nBootstrap is widely used in web development and is popular among developers due to its ease of use, versatility, and wide range of features and components. It is also highly customizable and can be used to create unique and customized designs for web applications.",
    "category": "web-development",
  },
  {
    "id": "5",
    "image": "https://static-00.iconduck.com/assets.00/apps-figma-icon-256x256-paa4u9ra.png",
    "title": "Figma",
    "shortDescription": "Figma is a cloud-based design and prototyping tool used for creating user interfaces, web and mobile app designs, and other digital products...",
    "fullDescription": "Figma is a cloud-based design and prototyping tool used for creating user interfaces, web and mobile app designs, and other digital products. It is a collaborative tool that allows designers to work on a project simultaneously and in real-time.\nFigma provides a wide range of design tools and features, including vector editing, prototyping, and design libraries. It also has a built-in collaboration feature, which allows multiple designers to work on the same project and share feedback and comments.\nOne of the key benefits of Figma is that it is cloud-based, which means that designers can access their projects from anywhere with an internet connection. It also allows for easy sharing and collaboration with team members and clients.\nFigma is widely used in web and mobile app design, and is popular among designers and developers due to its ease of use, collaboration features, and ability to create high-quality designs quickly.",
    "category": "tools",
  },
];

export default posts;