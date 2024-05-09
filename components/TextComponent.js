import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const TextComponent = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      <Text
        style={[styles.text, isFocused && styles.focusedText]}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        Text 1
      </Text>
      <Text
        style={[styles.text, isFocused && styles.focusedText]}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        Text 2
      </Text>
      <Text
        style={[styles.text, isFocused && styles.focusedText]}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        Text 3
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    padding: 10,
    margin: 5,
    textDecorationLine: "none",
  },
  focusedText: {
    textDecorationLine: "underline",
  },
});

export default TextComponent;
