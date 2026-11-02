import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { onAuthStateChanged, User } from "firebase/auth";

import { auth } from "./src/config/firebase";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";

type AuthScreen = "login" | "register";

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [screen, setScreen] = useState<AuthScreen>("login");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (user) {
    return (
      <HomeScreen
        logoutSuccessful={() => setScreen("login")}
      />
    );
  }

  if (screen === "register") {
    return (
      <RegisterScreen
        goToLogin={() => setScreen("login")}
      />
    );
  }

  return (
    <LoginScreen
      loginSuccessful={() => {}}
      goToRegister={() => setScreen("register")}
    />
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});