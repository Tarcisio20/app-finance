import { Image, View } from "react-native";
import { assertEasingIsWorklet } from "react-native-reanimated/lib/typescript/reanimated2/animation/util";

type Props = {
  image?: string;
  size?: string;
  color?: string;
  active?: boolean;
};

export const ImageMenu = ({ image, size, color, active = false }: Props) => {
  switch (image) {
    case "home":
      return (
        <Image
          source={require("../../assets/home/image-home-menu.png")}
          className="text-black size-10"
        />
      );
      break;
    case "received":
      return (
        <Image
          source={require("../../assets/home/image-received-menu.png")}
          className="text-black size-10"
        />
      );
      break;
    case "payments":
      return (
        <Image
          source={require("../../assets/home/image-payments-menu.png")}
          className="text-black size-10"
        />
      );
      break;
    case "config":
      return (
        <Image
          source={require("../../assets/home/image-config-menu.png")}
          className="text-black size-10"
        />
      );
      break;
    case "profile":
      return (
        <Image
          source={require("../../assets/home/image-profile-menu.png")}
          className="text-black size-10"
        />
      );
      break;
  }
};
