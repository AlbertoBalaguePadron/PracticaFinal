import { View, Text, StyleSheet } from "react-native";

const InfoCuenta = () => {
  //const [NumeroCuenta, setNumeroCuenta] = useState();
  const NumeroCuenta = parseInt(Math.random() * 9999) + 1000;

  const Dinero = parseInt(Math.random() * 1999) - 999;

  if (Dinero > 0) {
    return (
      <View style={styles.Card}>
        <Text style={styles.InfoCuenta}>Cuenta: {NumeroCuenta}*</Text>
        <Text style={styles.positivo}>Dinero : {Dinero}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.Card}>
        <Text style={styles.InfoCuenta}>Cuenta: {NumeroCuenta}*</Text>
        <Text style={styles.negativo}>Dinero: {Dinero} $</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  InfoCuenta: {
    justifyContent: "center",
    width: 300,
    maxWidth: "80%",
  },
  positivo: {
    color: "black",
  },
  negativo: {
    color: "red",
  },
  Card: {
    marginTop: 20,
    marginBottom: 20,
  },
});
export default InfoCuenta;
