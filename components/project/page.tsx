import { ReactNode } from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";

type Props = {
  children: ReactNode;
  className?: string;
  type?: boolean;
};

export const Page = ({ children, className, type = false }: Props) => {
  return (
    <SafeAreaView
      className={`flex-1 bg-primary ${
        Platform.OS === "android" ? "pt-10" : ""
      } ${className}`}
    >
      {type ? (
        <StatusBar backgroundColor={"#1F222A"} />
      ) : (
        <StatusBar backgroundColor={"#6842FF"} />
      )}
      {children}
    </SafeAreaView>
  );
};
