export type NavItem = {
  label: string;
  href: string;
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export const business = {
  name: "Axxess Denied LLP",
  owner: "Tarvis Smith",
  phone: "901-303-5875",
  phoneHref: "tel:19013035875",
  email: "tarvis.smith@axxessdenied.net",
  emailHref: "mailto:tarvis.smith@axxessdenied.net",
  hours: "6:00 AM - 6:00 PM",
  website: "https://www.axxessdenied.net",
  tagline: "We Pop Locks, Not Pockets",
};
