import {useState} from "react";
import {View, Text, FlatList, Button, TextInput, TouchableOpacity} from "react-native";
import {useRouter} from "expo-router";
import styles from "../style";

export default function StudentListScreen() {
  const router = useRouter();
  const [students, setStudents] = useState([
    {id: "1", name: "Nguyễn Văn A", age: 20},
    {id: "2", name: "Trần Thị B", age: 21},
  ]);

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  const addStudent = () => {
    if (!newName || !newAge) return;
    const newStudent = {id: Date.now().toString(), name: newName, age: parseInt(newAge)};
    setStudents([...students, newStudent]);
    setNewName("");
    setNewAge("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách sinh viên</Text>

      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => router.push(`/student/${item.id}?name=${item.name}&age=${item.age}`)}>
            <Text style={styles.item}>
              {item.name} ({item.age} tuổi)
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.form}>
        <TextInput placeholder="Tên sinh viên" value={newName} onChangeText={setNewName} style={styles.input} />
        <TextInput
          placeholder="Tuổi"
          value={newAge}
          onChangeText={setNewAge}
          keyboardType="numeric"
          style={styles.input}
        />
        <Button title="Thêm sinh viên" onPress={addStudent} />
      </View>
    </View>
  );
}
