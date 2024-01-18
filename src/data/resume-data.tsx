import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Manan Gupta",
  initials: "Mr",
  location: "Ahmedabad, Gujarat, India",
  locationLink: "https://www.google.com/maps/place/ahmedabad",
  about:
    "Undergrad Student who loves to explore new technologies and build cool stuff.",
  summary:
    "Computer Science undergraduate with a focus on CV, AR/VR, and deep learning AI. Eager to learn new technologies. Enjoys producing music and graphic design in free time.",
  avatarUrl: "https://avatars.githubusercontent.com/u/99275086?v=4",
  personalWebsiteUrl: "__PERSONAL_WEBSITE_URL__",
  contact: {
    email: "gmanan.dev@gmail.com",
    tel: "+91 9510463438",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/manan152003",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/manan152003/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/am_naanroti",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Pandit Deendayal Energy University",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      start: "2021",
      end: "2025",
    },
  ],

  skills: [
    "Programming Languages: Python, Java, C/C++, Bash, JavaScript, MATLAB(Basics)",
    "Databases: MySQL, MongoDB",
    "Frameworks/Libraries: NumPy, Pandas, Matplotlib, OpenCV, PIL, Tensorflow, Keras, PyTorch, Transformers, Streamlit, Flask, ROS",
    "Tools/Platforms: Postman, Git, GNU/Linux, Docker, Figma",
  ],
  projects: [
    {
      title: "Nyx",
      techStack: [
        "Co-Founder",
        "ROS",
        "Python",
      ],
      description: "Developing a self-driving robot using only cameras for environmental sensing and using ROS for software simulations.",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Turf Tap",
      techStack: ["Co-Founder", "Figma", "Flutter", "Firebase"],
      description:
        "Developing a mobile application that enables athletes and sports enthusiasts to connect with one another and discover suitable for playing sports.",
      link: {
        label: "turftap.dev",
        href: "",
      },
    },
    {
      title: "Subway Surfers using Head Pose Estimation",
      techStack: ["Side Project", "Mediapipe", "Python", "OpenCV"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      link: {
        label: "github.com/manan152003/Subway-Surfers-AR",
        href: "https://github.com/manan152003/Subway-Surfers-AR",
      },
    },
    {
      title: "A.I. based Attendance System",
      techStack: ["Side Project", "Python", "OpenCV"],
      description:
        "",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Personal Website ",
      techStack: ["Side Project", "Next.js", "Tailwind CSS"],
      description:
        "Creating a personal minimalistic website using Next.js and shadcn/ui",
      link: {
        label: "manan.dev",
        href: "",
      },
    },
    {
      title: "Mars Runner",
      techStack: ["Side Project", "Unity", "OpenCV", "Python"],
      description: "An endless runner game where the player has to dodge obstacles and collect coins to score points using head pose estimation.",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Password Strength Checker",
      techStack: ["University Project", "Python"],
      description: "A machine-learning model that checks the strength of passwords using the XGBoost algorithm. It classifies passwords into three categories: Weak, Moderate, and Strong based on their complexity and security.",
      link: {
        label: "github.com/manan152003/info-sec_project",
        href: "https://github.com/manan152003/info-sec_project",
      },
    },
    {
      title: "Image Classifier",
      techStack: ["Udacity", "Python"],
      description: "A machine-learning model that classifies images into 102 different categories using the vgg19, resnet50, and inceptionv3.",
      link: {
        label: "github.com/manan152003/Udacity_AIPND",
        href: "https://github.com/manan152003/Udacity_AIPND",
      },
    },
  ],
} as const;
