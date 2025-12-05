import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Clipboard from "expo-clipboard";

export default function Affirmation() {
  const [afirmation, setAfirmation] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const fetchAfirmation = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://www.affirmations.dev/");
      setAfirmation(response.data.affirmation);
    } catch (error) {
      setAfirmation("Failed to fetch affirmation");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAfirmation();
  }, []);

  const router = useRouter();

  // Copy function + toast
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(afirmation);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1200);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Toast Notification */}
      {copied && (
        <View style={styles.copiedToast}>
          <Text style={styles.copiedText}>Copied!</Text>
        </View>
      )}

      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            style={{ width: 24, height: 24 }}
            source={require("@/assets/images/back-icon-light.png")}
          />
        </TouchableOpacity>

        <Image
          style={{ width: 59, height: 32 }}
          source={require("@/assets/images/app-logo.png")}
        />
      </View>

      <LinearGradient
        colors={["#FBD6FF", "#FFFFFF", "#A3D8FF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <Text style={styles.title}>Welcome back, sunshine!</Text>

        <View style={styles.content}>
          <View style={styles.affirmationContainer}>
            {loading ? (
              <ActivityIndicator
                size="large"
                color="#ffffff"
                style={{ width: 257, height: 68 }}
              />
            ) : (
              <Text style={styles.affirmation}>{afirmation}</Text>
            )}

            {/* Copy Button */}
            <TouchableOpacity onPress={copyToClipboard} style={styles.copyButton}>
              <Image
                style={{ width: 18, height: 18 }}
                source={require("@/assets/images/copy-icon-light.png")}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={fetchAfirmation}>
            <Text style={styles.buttonText}>New Quote</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },

  gradient: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  affirmation: {
    fontSize: 18,
    textAlign: "left",
    backgroundColor: "#ffffff",
    width: 257,
    minHeight: 68,
    padding: 10,
    borderRadius: 6,
  },

  button: {
    backgroundColor: "#BEE7FF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    width: 261,
  },

  buttonText: {
    color: "#000000",
    fontSize: 15,
  },

  affirmationContainer: {
    backgroundColor: "#BEE7FF",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 16,
    gap: 10,
  },

  content: {
    flexDirection: "column",
    gap: 49,
    alignItems: "center",
    justifyContent: "center",
  },

  navbar: {
    width: "100%",
    position: "absolute",
    top: 60,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  copyButton: {
    width: 38,
    minHeight: 68,
    height: "100%",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 6,
  },

  copiedToast: {
    position: "absolute",
    top: 120,
    backgroundColor: "#000000aa",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    zIndex: 999,
  },

  copiedText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
