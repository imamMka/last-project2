import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    MontserratBold: require("@/assets/fonts/Montserrat-Bold.ttf"),
    MontserratRegular: require("@/assets/fonts/Montserrat-Regular.ttf"),
    PoppinsRegular: require("@/assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("@/assets/fonts/Poppins-Bold.ttf"),
  });

  return <Stack screenOptions={{ headerShown: false }} />;
}
