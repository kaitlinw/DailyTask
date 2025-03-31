import { StyleSheet } from "react-native";
import { useState } from "react";
// import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import CustomButton from "../components/CustomButton";

export const tasks = [
  "write the most annoying melody you can think of using na na na na na",
  "Draw your ideal sea monster",
  "Write a chorus that is cringey",
  "Draw an eye",
  "Draw an octopus in a top hat",
  "Design a lamp",
  "Draw a 1 bdrm floorplan",
  "draw lips",
  "draw a beautiful face",
  "draw an ugly face",
  "write a short story about something or someone in your vicinity",
  "draw people skiing down a mountain",
  "come up with 4 funny names",
  "combine 2 items into a single item, describe what it does",
  "draw a cloud raining into a pool and a man standing next to it saying “well, at least I don’t have to pay for the water”",
  "design a chair",
  "design a shoe",
  "design a handbag",
  "write a verse that makes absolutely no sense but still rhymes",
  "draw a cartoon self portrait",
  "draw a self portrait in the style of picasso",
  "draw homer simpson",
  "draw patrick star",
  "draw spongebob squarepants",
  "draw a cartoon of your pet",
  "draw an under the sea world with your own house",
];

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
