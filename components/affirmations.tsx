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

export default function App() {
  const [afirmation, setAfirmation] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  
  const fetchAfirmation = async () => {
    try {
     setLoading(true);
     const response = await axios.get(
       "https://www.affirmations.dev/"
     );
     setAfirmation(response.data.affirmation); 
     setLoading(false);
    } catch (error) {
      setAfirmation("Failed to fetch affirmation");
      console.error(error);
    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    fetchAfirmation();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Affirmation</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Text style={styles.affirmation}>{afirmation}</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={fetchAfirmation}>
        <Text style={styles.buttonText}>Get New Affirmation</Text>
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
  affirmation: {
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },  
})
