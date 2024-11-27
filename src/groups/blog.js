export const blogs = [
  {
    id: 1,
    title: "Mastering React: Tips for Beginners",
    author: {
      name: "Jane Doe",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fakeTitle: "Frontend Developer Extraordinaire",
    },
    date: "November 15, 2024",
    excerpt:
      "React can feel overwhelming, but these beginner tips will have you building dynamic web apps in no time!",
    content:
      "React is a powerful library for building user interfaces with reusable components. Start by learning components, props, and state—React's core concepts. Practice with small projects like to-do lists or counters to solidify your knowledge. Explore hooks like `useState` and `useEffect` for dynamic behavior. Once confident, dive into advanced topics like context and routing with React Router. Learning React step by step ensures a strong foundation, and with practice, you'll be ready to create robust web apps in no time!",
    image: {
      link: "https://i.ytimg.com/vi/ACaT1Gfhe6I/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDBlVbyPPN3UZQRVVA--AwcUleyIg",
      alt: "A javascript logo linked to react",
    },
  },
  {
    id: 2,
    title: "Why Tailwind CSS is a Game-Changer",
    author: {
      name: "John Smith",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fakeTitle: "CSS Guru and Design Whisperer",
    },
    date: "October 30, 2024",
    excerpt:
      "Forget writing CSS from scratch! Tailwind CSS provides utility classes that speed up development.",
    content:
      "Tailwind CSS revolutionizes web styling with utility-first classes, eliminating custom CSS files and speeding up development. Its JIT engine generates optimized builds, ensuring only used classes are included. Tailwind also supports extensive customization, enabling brands to align designs with their identity. Responsive design is simpler, as classes can be directly applied in HTML. With consistent styling, Tailwind saves developers time, especially in large-scale projects. If you’re not using it yet, it’s time to explore this framework and simplify your workflow.",
    image: {
      link: "https://media.licdn.com/dms/image/D4D12AQHw9SjCddUhjQ/article-cover_image-shrink_720_1280/0/1715021638881?e=2147483647&v=beta&t=VuDjk7oMCOy2lSJtXjHerIg7QURxNCkcWdzUmfuVlu4",
      alt: "A designer working with CSS and design tools.",
    },
  },
  {
    id: 3,
    title: "Awesome JS ES6 Features",
    author: {
      name: "Alex Johnson",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fakeTitle: "JavaScript Jedi and Code Master",
    },
    date: "September 25, 2024",
    excerpt:
      "Arrow functions, destructuring, and template literals—here’s what makes ES6 indispensable.",
    content:
      "ES6 introduced many useful features that improve JavaScript. `let` and `const` provide block scoping, making code more predictable. Arrow functions (`=>`) simplify syntax and preserve the `this` context. Destructuring reduces repetitive property access for objects and arrays, while template literals simplify string interpolation and multi-line strings. Promises streamline async code, and default parameters improve function flexibility. These features make JavaScript more modern, readable, and efficient. Embracing ES6 features enhances your coding practices significantly.",
    image: {
      link: "https://attck.com/wp-content/uploads/Blog-hero-CodeZen-Hero.png",
      alt: "JavaScript code displayed on a screen.",
    },
  },
  {
    id: 4,
    title: "How to Build Accessible Websites",
    author: {
      name: "Emily Davis",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fakeTitle: "Digital Accessibility Advocate",
    },
    date: "August 10, 2024",
    excerpt:
      "Accessibility is not an afterthought. Learn how to make your websites inclusive for everyone.",
    content:
      "Accessibility ensures your website is usable by everyone, including people with disabilities. Start by using semantic HTML like `<header>` and `<main>` to help screen readers. Ensure text is readable with proper color contrast and add descriptive `alt` attributes to images. Keyboard navigation is essential for interactive elements. ARIA roles can enhance accessibility when used correctly. Test your site with tools like Axe or Lighthouse to identify issues. Building accessible websites isn’t just ethical; it expands your audience and improves SEO.",
    image: {
      link: "https://www.websitepulse.com/blog/uploads/website-access.png",
      alt: "A desk setup with accessibility tools for web development.",
    },
  },
  {
    id: 5,
    title: "Top 10 VS Code Extensions",
    author: {
      name: "Michael Brown",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fakeTitle: "Code Productivity Specialist",
    },
    date: "July 5, 2024",
    excerpt:
      "Boost your productivity with these must-have extensions for Visual Studio Code.",
    content:
      "VS Code is a favorite among developers, thanks to its versatility and extensions. Prettier keeps code formatted, while GitLens enhances Git integration. Live Server provides real-time previews. Bracket Pair Colorizer improves readability, and Path Intellisense helps auto-complete file paths. Other useful tools include IntelliCode for AI-driven code suggestions and Debugger for Chrome for enhanced debugging. These extensions streamline your workflow and improve coding efficiency, whether you’re a beginner or an expert.",
    image: {
      link: "https://cdn-images-1.medium.com/max/800/0*xnUbHondmQX7aBEH.png",
      alt: "A screen showcasing VS Code and extensions.",
    },
  },
];
