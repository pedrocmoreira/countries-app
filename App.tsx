import { Home } from "./src/screens/Home";
import {
  NunitoSans_300Light,
  NunitoSans_600SemiBold,
  NunitoSans_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_300Light,
    NunitoSans_600SemiBold,
    NunitoSans_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
