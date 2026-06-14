import type { Product } from "@/types/website";

export const PRODUCTS: Product[] = [
  {
    id: "smart-robot-car",
    name: "Smart Robot Car",
    description:
      "Programmable autonomous robot car with obstacle avoidance, Bluetooth control, and modular sensor support.",
    category: "Robotics Kit",
    gradient: "from-primary/30 via-secondary/20 to-accent/30",
  },
  {
    id: "line-follower-robot",
    name: "Line Follower Robot",
    description:
      "Precision line-tracking robot ideal for competitions, learning PID control, and sensor calibration.",
    category: "Education",
    gradient: "from-secondary/30 via-primary/20 to-accent/20",
  },
  {
    id: "iot-monitoring-system",
    name: "IoT Monitoring System",
    description:
      "Real-time environmental monitoring with cloud dashboard, alerts, and multi-sensor integration.",
    category: "IoT",
    gradient: "from-accent/30 via-primary/20 to-secondary/30",
  },
  {
    id: "home-automation-kit",
    name: "Home Automation Kit",
    description:
      "Complete smart home starter kit with relay modules, sensors, and mobile app integration.",
    category: "Automation",
    gradient: "from-primary/25 via-accent/25 to-secondary/25",
  },
  {
    id: "esp32-dev-kit",
    name: "ESP32 Development Kit",
    description:
      "Professional ESP32 development board with Wi-Fi, Bluetooth, and extensive peripheral support.",
    category: "Embedded",
    gradient: "from-secondary/25 via-accent/20 to-primary/30",
  },
  {
    id: "robotics-learning-bundle",
    name: "Robotics Learning Bundle",
    description:
      "All-in-one educational bundle with components, guides, and project templates for beginners.",
    category: "Bundle",
    gradient: "from-accent/25 via-secondary/25 to-primary/25",
  },
];
