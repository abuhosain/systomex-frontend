import {
  Bot,
  Factory,
  Wifi,
  Cpu,
  ShoppingCart,
  GraduationCap,
  CircuitBoard,
  Lightbulb,
} from "lucide-react";
import type { Service } from "@/types/website";

export const SERVICES: Service[] = [
  {
    id: "robotics-solutions",
    title: "Robotics Solutions",
    description:
      "Custom robotic systems designed for research, education, and industrial applications with precision engineering.",
    icon: Bot,
  },
  {
    id: "industrial-automation",
    title: "Industrial Automation",
    description:
      "End-to-end automation solutions that optimize production lines, reduce downtime, and increase operational efficiency.",
    icon: Factory,
  },
  {
    id: "iot-development",
    title: "IoT Development",
    description:
      "Connected smart systems with real-time monitoring, cloud integration, and intelligent data analytics.",
    icon: Wifi,
  },
  {
    id: "robotics-project-development",
    title: "Robotics Project Development",
    description:
      "Full-cycle robotics project development from concept and prototyping to testing and deployment.",
    icon: Cpu,
  },
  {
    id: "engineering-project-sales",
    title: "Engineering Project Sales",
    description:
      "Ready-made engineering and robotics project kits for students, researchers, and technology enthusiasts.",
    icon: ShoppingCart,
  },
  {
    id: "robotics-courses",
    title: "Robotics Courses",
    description:
      "Hands-on training programs covering Arduino, ESP32, Raspberry Pi, and advanced robotics concepts.",
    icon: GraduationCap,
  },
  {
    id: "embedded-systems",
    title: "Embedded Systems Development",
    description:
      "Firmware and hardware development for microcontrollers including Arduino, ESP32, and Raspberry Pi platforms.",
    icon: CircuitBoard,
  },
  {
    id: "research-innovation",
    title: "Research & Innovation",
    description:
      "Collaborative research support and innovation consulting for academic institutions and startups.",
    icon: Lightbulb,
  },
];
