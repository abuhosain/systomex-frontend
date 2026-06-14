import type { Project, ProjectCategory } from "@/types/website";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "All",
  "Robotics",
  "IoT",
  "Automation",
  "Industrial",
];

export const PROJECTS: Project[] = [
  {
    id: "autonomous-robot",
    title: "Autonomous Robot",
    description:
      "Self-navigating robot with LiDAR mapping, obstacle detection, and autonomous path planning.",
    category: "Robotics",
    tags: ["SLAM", "Computer Vision", "ROS"],
    gradient: "from-primary/40 via-secondary/20 to-dark",
  },
  {
    id: "smart-agriculture",
    title: "Smart Agriculture System",
    description:
      "IoT-powered crop monitoring with soil sensors, automated irrigation, and weather analytics.",
    category: "IoT",
    tags: ["Sensors", "Cloud", "Automation"],
    gradient: "from-accent/30 via-primary/20 to-dark",
  },
  {
    id: "industrial-dashboard",
    title: "Industrial Monitoring Dashboard",
    description:
      "Real-time SCADA dashboard for factory floor monitoring with predictive maintenance alerts.",
    category: "Industrial",
    tags: ["SCADA", "Analytics", "MQTT"],
    gradient: "from-secondary/30 via-accent/20 to-dark",
  },
  {
    id: "home-automation",
    title: "Home Automation System",
    description:
      "Complete smart home solution with voice control, energy management, and security integration.",
    category: "Automation",
    tags: ["ESP32", "Mobile App", "Voice"],
    gradient: "from-primary/30 via-accent/25 to-dark",
  },
  {
    id: "warehouse-robot",
    title: "Warehouse Robot",
    description:
      "Automated guided vehicle for inventory management with RFID tracking and fleet coordination.",
    category: "Robotics",
    tags: ["AGV", "RFID", "Fleet Control"],
    gradient: "from-secondary/35 via-primary/25 to-dark",
  },
  {
    id: "smart-energy",
    title: "Smart Energy Management",
    description:
      "Intelligent energy monitoring system with load balancing, solar integration, and cost optimization.",
    category: "IoT",
    tags: ["Energy", "Solar", "Analytics"],
    gradient: "from-accent/35 via-secondary/20 to-dark",
  },
];
