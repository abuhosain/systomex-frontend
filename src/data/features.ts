import { Sparkles, Users, Building2, BookOpen } from "lucide-react";
import type { Feature, ProcessStep } from "@/types/website";

export const WHY_CHOOSE_US: Feature[] = [
  {
    id: "innovation",
    title: "Innovation First",
    description:
      "We stay at the forefront of robotics and automation technology, bringing cutting-edge solutions to every project.",
    icon: Sparkles,
  },
  {
    id: "expert-team",
    title: "Expert Team",
    description:
      "Our engineers and educators bring years of industry experience in robotics, IoT, and embedded systems development.",
    icon: Users,
  },
  {
    id: "industry-solutions",
    title: "Industry Solutions",
    description:
      "Battle-tested solutions designed for real-world industrial challenges with proven reliability and scalability.",
    icon: Building2,
  },
  {
    id: "practical-learning",
    title: "Practical Learning",
    description:
      "Hands-on, project-based training that prepares students and professionals for real engineering challenges.",
    icon: BookOpen,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "consultation",
    step: 1,
    title: "Consultation",
    description:
      "We understand your requirements, goals, and constraints through detailed discovery sessions.",
  },
  {
    id: "planning",
    step: 2,
    title: "Planning",
    description:
      "Our team creates a comprehensive roadmap with architecture, timeline, and resource allocation.",
  },
  {
    id: "development",
    step: 3,
    title: "Development",
    description:
      "Agile development with regular updates, prototyping, testing, and iterative refinement.",
  },
  {
    id: "deployment",
    step: 4,
    title: "Deployment",
    description:
      "Seamless deployment with training, documentation, and ongoing support for long-term success.",
  },
];
