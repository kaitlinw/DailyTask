import React, { useState } from "react";
import { Pressable, StyleSheet, Animated } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function CustomButton({
  text = "click",
  onPress,
}: {
  text?: string;
  onPress: () => void;
}) {
  const translateY = useState(new Animated.Value(0))[0];
  const shadowOffset = useState(new Animated.Value(4))[0]; // for shadow offset
  const elevation = useState(new Animated.Value(8))[0]; // for Android elevation

  const handlePressIn = () => {
    Animated.parallel([
      Animated.spring(translateY, {
        toValue: 6,
        useNativeDriver: true,
        speed: 20,
        bounciness: 0,
      }),
      Animated.timing(shadowOffset, {
        toValue: 0,
        duration: 120,
        useNativeDriver: false,
      }),
      Animated.timing(elevation, {
        toValue: 0,
        duration: 120,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
        speed: 20,
        bounciness: 8,
      }),
      Animated.timing(shadowOffset, {
        toValue: 4,
        duration: 180,
        useNativeDriver: false,
      }),
      Animated.timing(elevation, {
        toValue: 8,
        duration: 180,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const animatedStyles = {
    transform: [{ translateY }],
    shadowOffset: {
      width: shadowOffset,
      height: shadowOffset,
    },
    elevation,
  };

  return (
    <ThemedView>
      <Animated.View style={[styles.animatedWrapper, animatedStyles]}>
        <Pressable
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={styles.button}
          onPress={onPress}
          onTouchEnd={onPress}
        >
          <ThemedText style={styles.buttonText}>{text}</ThemedText>
        </Pressable>
      </Animated.View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  animatedWrapper: {
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowRadius: 0,
    borderRadius: 12,
    maxWidth: 300,
  },
  button: {
    backgroundColor: "inherit",
    borderColor: "#000",
    borderWidth: 3,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    maxWidth: 300,
  },
  buttonText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "900",
    letterSpacing: 1,
  },
});
