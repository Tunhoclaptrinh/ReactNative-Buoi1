import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, FlatList} from "react-native";
import styles from "../style";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách công việc</Text>

      <View style={styles.inputRow}>
        <TextInput style={styles.input} placeholder="Nhập công việc..." value={task} onChangeText={setTask} />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addText}>Thêm</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => (
          <View style={styles.taskItem}>
            <Text>{item}</Text>
            <TouchableOpacity onPress={() => removeTask(index)}>
              <Text style={styles.delete}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
