import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: "#fff"},
  title: {fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 20},
  inputRow: {flexDirection: "row", marginBottom: 10},
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 16,
    justifyContent: "center",
    marginLeft: 8,
    borderRadius: 8,
  },
  addText: {color: "#fff", fontWeight: "bold"},
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 8,
    marginBottom: 5,
  },
  delete: {color: "red", fontSize: 18},
});

export default styles;
