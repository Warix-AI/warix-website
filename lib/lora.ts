export type LoraInterfaceId =
  | "desktop"
  | "phone"
  | "vehicle"
  | "robot"
  | "wearable";

export interface LoraInterface {
  id: LoraInterfaceId;
  name: string;
  context: string;
  surfaces: string[];
}

export const LORA_INTERFACES: LoraInterface[] = [
  {
    id: "desktop",
    name: "Desktop",
    context: "Chat, voice, files, connected apps, automations, and device management.",
    surfaces: [
      "AI chat",
      "Voice",
      "Files",
      "Connected apps",
      "Automations",
      "Device management",
      "Search",
      "Controls",
    ],
  },
  {
    id: "phone",
    name: "Phone",
    context: "A lighter surface for the same platform — chat, voice, and quick control.",
    surfaces: [
      "Chat",
      "Voice",
      "Notifications",
      "Connected apps",
      "Quick actions",
      "Hardware controls",
      "Status",
    ],
  },
  {
    id: "vehicle",
    name: "Vehicle",
    context: "A dashboard built for motion — navigation, status, voice, and alerts.",
    surfaces: [
      "Dashboard",
      "Navigation",
      "Vehicle information",
      "System status",
      "Voice",
      "Controls",
      "Alerts",
    ],
  },
  {
    id: "robot",
    name: "Robot",
    context: "Tasking, cameras, diagnostics, and conversation around a physical machine.",
    surfaces: [
      "Robot controls",
      "Task management",
      "Status",
      "Camera feeds",
      "Automation",
      "Conversation",
      "Diagnostics",
    ],
  },
  {
    id: "wearable",
    name: "Wearable",
    context: "A quiet, close-to-the-body interface for context and simple control.",
    surfaces: [
      "Contextual information",
      "Notifications",
      "Voice",
      "Device information",
      "Simple controls",
    ],
  },
];

export const LORA_INTELLIGENCE = [
  {
    title: "AI",
    body: "Reasoning, language, and perception sit in the platform — not in a single chat window.",
  },
  {
    title: "Voice",
    body: "Speech is one interface into Lora. It becomes primary when a screen is the wrong object.",
  },
  {
    title: "Agents",
    body: "The customer-facing agent is also called Lora. It is one way in, not the whole platform.",
  },
  {
    title: "Automation",
    body: "Work can continue without a conversation. Lora orchestrates tasks across software and devices.",
  },
  {
    title: "Memory",
    body: "Context persists across interfaces. A phone, a vehicle, and a robot can share the same identity.",
  },
  {
    title: "Connected services",
    body: "Apps, accounts, and tools attach to the platform rather than to a single screen.",
  },
];

export const LORA_CONNECTED = [
  {
    title: "Apps",
    body: "Connected software appears inside Lora instead of becoming a second product.",
  },
  {
    title: "APIs",
    body: "Services and data can move through Lora without each device inventing its own stack.",
  },
  {
    title: "Hardware",
    body: "Warix machines run Lora. The implementation changes. The platform does not.",
  },
  {
    title: "Cloud systems",
    body: "Infrastructure, identity, and orchestration are part of Lora — not a separate brand.",
  },
  {
    title: "User data",
    body: "Permissions follow the environment. A robot, a phone, and a computer are not the same room.",
  },
];
