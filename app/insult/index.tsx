import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Insult</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Text style={styles.insult}>{insult}</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={fetchInsult}>
        <Text style={styles.buttonText}>Get New Insult</Text>
      </TouchableOpacity>
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  insult: {
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
 
  