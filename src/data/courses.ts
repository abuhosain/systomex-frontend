import type { Course } from "@/types/website";

export const COURSES: Course[] = [
  {
    id: "beginner-robotics",
    title: "Beginner Robotics",
    duration: "6 Weeks",
    level: "Beginner",
    features: ["Robot assembly", "Basic programming", "Sensor basics", "Project portfolio"],
    gradient: "from-primary/40 to-secondary/30",
  },
  {
    id: "arduino-programming",
    title: "Arduino Programming",
    duration: "4 Weeks",
    level: "Beginner",
    features: ["C/C++ fundamentals", "GPIO control", "Serial communication", "5 mini projects"],
    gradient: "from-secondary/40 to-accent/30",
  },
  {
    id: "esp32-iot",
    title: "ESP32 & IoT",
    duration: "8 Weeks",
    level: "Intermediate",
    features: ["Wi-Fi & MQTT", "Cloud dashboards", "OTA updates", "Smart device builds"],
    gradient: "from-accent/40 to-primary/30",
  },
  {
    id: "industrial-automation",
    title: "Industrial Automation",
    duration: "10 Weeks",
    level: "Advanced",
    features: ["PLC basics", "SCADA systems", "Process control", "Industry case studies"],
    gradient: "from-primary/35 to-accent/35",
  },
  {
    id: "embedded-systems",
    title: "Embedded Systems",
    duration: "8 Weeks",
    level: "Intermediate",
    features: ["Microcontroller arch", "RTOS concepts", "Hardware interfacing", "Debugging tools"],
    gradient: "from-secondary/35 to-primary/35",
  },
  {
    id: "ai-for-robotics",
    title: "AI for Robotics",
    duration: "12 Weeks",
    level: "Advanced",
    features: ["Computer vision", "Path planning", "ML integration", "Autonomous navigation"],
    gradient: "from-accent/35 to-secondary/35",
  },
];
