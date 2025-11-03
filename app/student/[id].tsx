import {useLocalSearchParams} from "expo-router";
import {View, Text, StyleSheet} from "react-native";

export default function StudentDetail() {
  const {id, name, age} = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chi tiết sinh viên</Text>
      <Text style={styles.text}>Mã: {id}</Text>
      <Text style={styles.text}>Tên: {name}</Text>
      <Text style={styles.text}>Tuổi: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: "center", alignItems: "center"},
  title: {fontSize: 24, fontWeight: "bold", marginBottom: 10},
  text: {fontSize: 18},
});
