import { StyleSheet } from "react-native";
import { useState } from "react";
// import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import CustomButton from "../components/CustomButton";
import { tasks } from "../utils/tasks";

export default function HomeScreen() {
  const [showText, setShowText] = useState<undefined | string>(undefined);

  const randomTask = () => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    return tasks[randomIndex];
  };

  return (
    <ParallaxScrollView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">welcome to disposable art</ThemedText>
        {/* <HelloWave /> */}
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">how it works</ThemedText>
        <ThemedText>
          art and it's the same but there's a completely different task every
          day so it's not
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">the rules</ThemedText>
        <ThemedText>5 minutes per task, no more</ThemedText>
        <ThemedText>don't take it seriously</ThemedText>
        <ThemedText>don't overthink it</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <CustomButton
          onPress={() => {
            setShowText(randomTask());
          }}
        />
      </ThemedView>
      {showText && (
        <ThemedView style={styles.taskContainer}>
          <ThemedText>{showText}</ThemedText>
        </ThemedView>
      )}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  taskContainer: {
    marginTop: 24,
  },
});
