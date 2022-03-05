import { StyleSheet, Text, View } from "react-native";
import Card from "./components/Card";
import InfoCuenta from "./components/InfoCuenta";

export default function App() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <InfoCuenta />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#D7D7D7",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50,
    marginBottom: 20,
    width: 300,
    maxWidth: "80%",
  },
});
