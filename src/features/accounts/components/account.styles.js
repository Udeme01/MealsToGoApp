import { ImageBackground, StyleSheet } from "react-native";

const image = { uri: "../../../../assets/meals.jpg" };

export const AccountBackground = () => (
  <ImageBackground
    source={image}
    resizeMode="cover"
    style={styles.image}
  ></ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
