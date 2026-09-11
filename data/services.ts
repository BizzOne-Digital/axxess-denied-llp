export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  icon:
    | "key-programming"
    | "duplicate-keys"
    | "ignition"
    | "key-cutting"
    | "lost-key"
    | "remote"
    | "emergency"
    | "discount";
};

export const services: Service[] = [
  {
    slug: "key-programming",
    title: "Key Programming",
    shortDescription:
      "Program new vehicle keys, smart keys and remotes for compatible makes and models.",
    description:
      "Modern vehicles rely on programmed keys and transponders to start safely. We program new keys, smart keys and remotes on-site for a wide range of compatible makes and models, so you don't need a tow or a dealership appointment.",
    benefits: [
      "On-site programming for compatible vehicles",
      "Smart key and transponder key support",
      "No dealership wait times",
    ],
    icon: "key-programming",
  },
  {
    slug: "duplicate-keys",
    title: "Duplicate Keys",
    shortDescription:
      "Get dependable spare vehicle keys prepared quickly and professionally.",
    description:
      "Having a spare key on hand saves time and stress. We prepare dependable duplicate vehicle keys at your location, giving you a reliable backup before you ever need one.",
    benefits: [
      "Convenient on-site duplication",
      "A reliable backup for your household or team",
      "Professional, precise results",
    ],
    icon: "duplicate-keys",
  },
  {
    slug: "ignition-cylinder-replacement",
    title: "Ignition Cylinder Replacement",
    shortDescription:
      "Replace damaged or malfunctioning ignition cylinders and restore reliable vehicle access.",
    description:
      "A worn or damaged ignition cylinder can leave you stuck. Our mobile team diagnoses and replaces faulty ignition cylinders on-site, restoring safe and reliable operation.",
    benefits: [
      "On-site diagnosis and replacement",
      "Restores safe, reliable ignition operation",
      "Mobile service means no towing required",
    ],
    icon: "ignition",
  },
  {
    slug: "key-cutting",
    title: "Key Cutting",
    shortDescription: "Precision automotive key cutting performed on-site.",
    description:
      "From standard keys to laser-cut and high-security keys, we perform precision automotive key cutting directly at your location using professional equipment.",
    benefits: [
      "Precision on-site cutting",
      "Standard and high-security key options",
      "Fast turnaround",
    ],
    icon: "key-cutting",
  },
  {
    slug: "lost-key-replacement",
    title: "Lost Key Replacement",
    shortDescription: "Lost all your keys? We'll get you back on the road.",
    description:
      "Losing all your vehicle keys is stressful. We help you regain access quickly with lost key replacement services, cutting and programming a new key on-site when possible.",
    benefits: [
      "Full lost key replacement solutions",
      "On-site service, no towing in many cases",
      "Get back on the road faster",
    ],
    icon: "lost-key",
  },
  {
    slug: "car-remote-replacement",
    title: "Car Remote Replacement",
    shortDescription:
      "Replacement and programming solutions for vehicle remotes and key fobs.",
    description:
      "A malfunctioning or lost remote doesn't have to slow you down. We provide replacement and programming solutions for vehicle remotes and key fobs on compatible models.",
    benefits: [
      "Remote and key fob replacement",
      "On-site programming",
      "Support for many makes and models",
    ],
    icon: "remote",
  },
  {
    slug: "emergency-lockouts",
    title: "24/7 Emergency Lockouts",
    shortDescription:
      "Locked out? Contact us for emergency automotive lockout assistance.",
    description:
      "Locked out of your car? Emergency automotive lockout assistance is available, including outside of normal business hours, to help you get back into your vehicle safely.",
    benefits: [
      "Emergency assistance available outside normal hours",
      "Safe, non-damaging entry techniques",
      "Mobile service comes to your location",
    ],
    icon: "emergency",
  },
  {
    slug: "multi-service-discounts",
    title: "Multi-Service Discounts",
    shortDescription:
      "Need more than one service? Ask about our special discounts.",
    description:
      "Combining services such as key cutting, programming or remote replacement in a single visit can save you time and money. Ask about available multi-service discounts.",
    benefits: [
      "Savings when combining services",
      "One convenient visit",
      "Contact us for details",
    ],
    icon: "discount",
  },
];
