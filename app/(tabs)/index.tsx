import {View, Text, TextInput, TouchableOpacity} from "react-native";
import styles from "../style";
import {useState} from "react";

export default function AverageScore() {
  const [toan, setToan] = useState("");
  const [ly, setLy] = useState("");
  const [hoa, setHoa] = useState("");
  const [diemTB, setDiemTB] = useState<number | null>(null);

  const tinhDiem = () => {
    const a = parseFloat(toan) || 0;
    const b = parseFloat(ly) || 0;
    const c = parseFloat(hoa) || 0;
    const avg = (a + b + c) / 3;
    setDiemTB(avg);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tính điểm trung bình</Text>

      <TextInput
        style={styles.input}
        placeholder="Điểm Toán"
        keyboardType="numeric"
        value={toan}
        onChangeText={setToan}
      />
      <TextInput style={styles.input} placeholder="Điểm Lý" keyboardType="numeric" value={ly} onChangeText={setLy} />
      <TextInput style={styles.input} placeholder="Điểm Hóa" keyboardType="numeric" value={hoa} onChangeText={setHoa} />

      <TouchableOpacity style={styles.button} onPress={tinhDiem}>
        <Text style={styles.buttonText}>Tính điểm</Text>
      </TouchableOpacity>

      {diemTB !== null && <Text style={styles.result}>Điểm trung bình: {diemTB.toFixed(2)}</Text>}
    </View>
  );
}
