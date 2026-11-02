import React from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { logoutUser } from "../services/authService";

interface HomeScreenProps {
  logoutSuccessful: () => void;
}

export default function HomeScreen({
  logoutSuccessful,
}: HomeScreenProps) {
  const handleLogout = async () => {
    try {
      await logoutUser();
      logoutSuccessful();
    } catch (error: any) {
      Alert.alert("Logout Failed", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Personal Progress Tracker
      </Text>

      <Text style={styles.message}>
        You are successfully logged in!
      </Text>

      <Button
        title="Logout"
        onPress={handleLogout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  message: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },
});