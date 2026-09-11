import {
  KeyIcon,
  ScissorsIcon,
  IgnitionIcon,
  AlertIcon,
  RemoteIcon,
  TagIcon,
  type IconProps,
} from "@/components/icons";
import type { Service } from "@/data/services";

export function ServiceIcon({
  icon,
  ...props
}: { icon: Service["icon"] } & IconProps) {
  switch (icon) {
    case "key-programming":
      return <KeyIcon {...props} />;
    case "duplicate-keys":
      return <KeyIcon {...props} />;
    case "ignition":
      return <IgnitionIcon {...props} />;
    case "key-cutting":
      return <ScissorsIcon {...props} />;
    case "lost-key":
      return <AlertIcon {...props} />;
    case "remote":
      return <RemoteIcon {...props} />;
    case "emergency":
      return <AlertIcon {...props} />;
    case "discount":
      return <TagIcon {...props} />;
    default:
      return <KeyIcon {...props} />;
  }
}
