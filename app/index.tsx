import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.containerParent}>
      <View style={styles.navbar}>
        <Image
          style={{ width: 59, height: 32, }}
          source={require("@/assets/images/app-logo.png")}
        />
      </View>

      <View style={styles.containerChild}>
        {/* LEFT GRADIENT */}
        <LinearGradient
          colors={["#FBD6FF", "#FFFFFF", "#A3D8FF"]}
          start={{ x: 0.2, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.containerLeft}
        >
          <Text style={styles.textLeft}>Need Some Positivity Today.....?</Text>
          <TouchableOpacity style={styles.buttonLight}>
            <Text style={{ fontSize: 20, textAlign: "center" }}>
              Affirmation
            </Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* RIGHT GRADIENT */}
        <LinearGradient
          colors={["#8A0F28", "#0B0B0D", "#3A0F55"]}
          start={{ x: 0.1, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.containerRight}
        >
          <Text style={styles.textRight}>Or do you want the harsh truth…?</Text>
          <View style={styles.shadowWrapper}>
            <TouchableOpacity style={styles.buttonDark}>
              <Text
                style={{ fontSize: 20, textAlign: "center", color: "#EDEDED" }}
              >
                Insult
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  navbar: {
    position: "absolute",
    top: 45,
    left: 20,
    zIndex: 10,
  },
  containerParent: {
    flex: 1,
  },
  containerChild: {
    flex: 1,
    flexDirection: "row",
  },
  containerLeft: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  containerRight: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  textLeft: {
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
  },
  textRight: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
  buttonLight: {
    marginTop: 20,
    backgroundColor: "#A3D8FF",
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  buttonDark: {
    marginTop: 20,
    backgroundColor: "#220A2E",
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 12,
    shadowColor: "rgba(143, 0, 255, 0.6)",
    shadowOffset: { width: -2, height: -3 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  shadowWrapper: {
    shadowColor: "rgba(138, 15, 40, 0.6)",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
};
