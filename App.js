import { ThemeProvider } from "styled-components";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation/index";

// Expo Google Fonts installed
import {
  useFonts as oswaldFont,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as latoFont, Lato_400Regular } from "@expo-google-fonts/lato";

// Firebase Services...
import { AuthenticationContext } from "./src/services/authentication/authentication.context";

export default function App() {
  // the "oswaldLoaded && latoLoaded" inside the square brackets are just random generated names to give the fonts to be able to use them.
  const [oswaldLoaded] = oswaldFont({
    Oswald_400Regular,
  });
  const [latoLoaded] = latoFont({
    Lato_400Regular,
  });

  // dunno what this line of code below does😀 but all I know is if "oswald nor lato" is not loaded, it should return "null(nothing)..."
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContext.Provider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </AuthenticationContext.Provider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

// we're never gonna get into a situation in a live production/live product environment where all the code is written perfectly...and some code bases may come without eslint or some necessary tooling..
