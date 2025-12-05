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

type InsultResponse = {
  number: string;
  languange: string;
  insult: string;
  created: string;
  shown: string;
  createdBy: string;
  active: string;
  comment: string;
};

export default function Insult() {
  const [insult, setInsult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const fetchInsult = async () => {
    try {
      setLoading(true);
      const url = `https://evilinsult.com/generate_insult.php?lang=en&type=json&timestamp=${Date.now()}`;
      const response = await axios.get<InsultResponse>(url);
      setInsult(response.data.insult);
    } catch (error) {
      console.error(error);
      setInsult("Failed to fetch insult");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInsult();
  }, []);

  const router = useRouter();

  // Copy function + Toast
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(insult);
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
            source={require("@/assets/images/back-icon-dark.png")}
          />
        </TouchableOpacity>

        <Image
          style={{ width: 59, height: 32 }}
          source={require("@/assets/images/app-logo-dark.png")}
        />
      </View>

      <LinearGradient
        colors={["#8A0F28", "#0B0B0D", "#3A0F55"]}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <Text style={styles.title}>Oh… you came back for more pain?</Text>

        <View style={styles.content}>
          <View style={styles.insultContainer}>
            {loading ? (
              <ActivityIndicator
                size="large"
                color="#ffffff"
                style={{ width: 257, height: 68 }}
              />
            ) : (
              <Text style={styles.insult}>{insult}</Text>
            )}

            {/* Copy Button */}
            <TouchableOpacity onPress={copyToClipboard} style={styles.copyButton}>
              <Image
                style={{ width: 18, height: 18 }}
                source={require("@/assets/images/copy-icon-dark.png")}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={fetchInsult}>
            <Text style={styles.buttonText}>Hit Me Again</Text>
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
    color: "#EDEDED",
    textAlign: "center",
    fontFamily: "MontserratBold",
  },

  insult: {
    fontSize: 18,
    textAlign: "left",
    backgroundColor: "#220A2E",
    width: 257,
    minHeight: 68,
    padding: 10,
    borderRadius: 6,
    color: "#EDEDED",
    fontFamily: "MontserratRegular",
  },

  button: {
    backgroundColor: "#0B0B0D",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#EDEDED",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 16,
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

  insultContainer: {
    backgroundColor: "#0B0B0D",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 16,
    gap: 10,
    borderWidth: 1,
    borderColor: "#EDEDED",
  },

  content: {
    flexDirection: "column",
    gap: 49,
    alignItems: "center",
    justifyContent: "center",
  },

  copyButton: {
    width: 38,
    minHeight: 68,
    height: "100%",
    backgroundColor: "#220A2E",
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
