import {
  Shield,
  Database,
  Cookie,
  Lock,
  Globe,
  Eye,
  Mail,
  Scale,
} from "lucide-react";

export const privacySections = [
  {
    id: "introduction",
    title: "Introduction",
    icon: Shield,
    content: [
      "Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website.",
      "By using our services, you agree to the practices described in this policy.",
    ],
  },
  {
    id: "collection",
    title: "Information We Collect",
    icon: Database,
    content: [
      "Personal information such as your name, email address, and phone number.",
      "Technical information including browser type, IP address, operating system, and device information.",
      "Usage information describing how you interact with our website.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    icon: Cookie,
    content: [
      "Cookies help us improve your browsing experience and analyze website traffic.",
      "You may disable cookies through your browser settings at any time.",
    ],
  },
  {
    id: "security",
    title: "Security",
    icon: Lock,
    content: [
      "We implement industry-standard security measures to protect your information.",
      "Although we strive for complete security, no online transmission can be guaranteed to be 100% secure.",
    ],
  },
  {
    id: "sharing",
    title: "Third-Party Services",
    icon: Globe,
    content: [
      "We may work with trusted third-party providers to operate our services.",
      "These providers only access the information necessary to perform their functions.",
    ],
  },
  {
    id: "rights",
    title: "Your Rights",
    icon: Scale,
    content: [
      "You have the right to access, update, or delete your personal information.",
      "You may request a copy of the data we store about you.",
    ],
  },
  {
    id: "changes",
    title: "Policy Updates",
    icon: Eye,
    content: [
      "We may update this Privacy Policy periodically.",
      "Changes become effective immediately after publication.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    icon: Mail,
    content: ["For any privacy-related questions, please contact our team."],
  },
];
