import {HelloWave} from "@/components/hello-wave";
import {ThemedText} from "@/components/themed-text";
import {ThemedView} from "@/components/themed-view";
import styles from "../style";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">Hello ReactNative!</ThemedText>
      <HelloWave />
    </ThemedView>
  );
}
