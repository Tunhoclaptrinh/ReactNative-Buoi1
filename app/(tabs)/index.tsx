import {Image} from "expo-image";
import {View, Text} from "react-native";
import {ThemedView} from "@/components/themed-view";
import styles from "../style";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.card}>
        <Image source={require("@/assets/images/avatar.jpg")} style={styles.avatar} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Nguyễn Tiến Tuấn</Text>
          <Text style={styles.job}>Lập trình viên React Native</Text>
          <Text style={styles.contact}>📧 tuan.nguyen@example.com</Text>
          <Text style={styles.contact}>📞 0123 456 789</Text>
        </View>
      </View>
    </ThemedView>
  );
}
