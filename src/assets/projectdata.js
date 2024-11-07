// src/data/projectData.js
import osasuna1 from "@/assets/imgs/Osasuna/7.jpg";

const projectData = [
  {
    id: "labal-safi",
    title: "Label Safi",
    description: "A premium e-commerce platform showcasing exclusive designer shoes and clothing collections. Features a sophisticated shopping experience with real-time inventory management, personalized recommendations, and seamless checkout process. The platform combines luxury fashion with modern e-commerce functionality.",
    techStack: ["React", "Firebase", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "MongoDB"],
    liveLink: "https://labalsafike.onrender.com/",
    category: "Fashion E-commerce",
    images: {
      gallery: [
        'https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg',
        'https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg',
      ]
    }
  },
  {
    id: "royal-watches",
    title: "Royal Watches",
    description: "Discover our latest luxury watch collection, featuring exquisite craftsmanship and timeless design. Elevate your style with our curated selection of high-end timepieces.",
    techStack: ["React", "Node.js", "MongoDB", "Redux Toolkit", "Tailwind CSS"],
    liveLink: "https://royalwatcheske.onrender.com/",
    category: "E-commerce",
    images: {
      gallery: [
        'https://cdn.pixabay.com/photo/2018/01/18/19/06/time-3091031_1280.jpg',
        'https://cdn.pixabay.com/photo/2013/07/11/15/30/male-watch-144648_1280.jpg',
      ]
    }
  },
  {
    id: "osasuna-fc",
    title: "Osasuna FC",
    description: "The Osasuna FC website is a dynamic web app showcasing the renowned football club, Osasuna, and delivering real-time updates to fans.",
    techStack: ["Node.js", "Express", "Tailwind CSS", "MongoDB", "Redux"],
    liveLink: "https://osasuna-fc.onrender.com/",
    category: "Sports",
    images: {
      gallery: [
        osasuna1,
        'https://cdn.pixabay.com/photo/2016/06/15/01/11/soccer-1458766_1280.jpg'
      ]
    }
  },
  {
    id: "shutterspot",
    title: "ShutterSpot",
    description: "Shutterspot is a cutting-edge application designed for booking photographers, providing users with a seamless and intuitive platform to connect with talented professionals.",
    techStack: ["React", "Vite", "MongoDB", "Redux Toolkit", "Framer Motion"],
    liveLink: "#",
    category: "Service Booking",
    images: {
      gallery: [
        "https://cdn.pixabay.com/photo/2016/11/29/04/54/photographer-1867417_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/10/28/07/04/men-1777352_1280.jpg"
      ]
    }
  },
  {
    id: "skillup",
    title: "SkillUp",
    description: "SkillUp is a platform that helps users discover in-demand skills and find relevant learning resources. SkillUp simplifies skill discovery and learning by analyzing demand levels and directing users to appropriate resources.",
    techStack: ["React Native", "Node.js", "Firebase", "Redux", "Axios"],
    liveLink: "#",
    category: "Education",
    images: {
      gallery: [
        "https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/11/29/06/16/kindle-1867751_1280.jpg",
      ]
    }
  }
];

export default projectData;