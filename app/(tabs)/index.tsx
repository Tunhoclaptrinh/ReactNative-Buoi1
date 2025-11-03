import React, {useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import styles from "../style";

export default function ChangeColorBox() {
  const [color, setColor] = useState("#3498db"); // màu mặc định ban đầu

  const randomColor = () => {
    // sinh mã màu hex ngẫu nhiên
    const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(newColor);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.box, {backgroundColor: color}]}>
        <Text style={styles.text}>Màu hiện tại: {color}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={randomColor}>
        <Text style={styles.buttonText}>Đổi màu</Text>
      </TouchableOpacity>
    </View>
  );
}
