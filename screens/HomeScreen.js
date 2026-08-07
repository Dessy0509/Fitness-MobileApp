import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import woman from "../assets/pink-girl.png";
import line from "../assets/Group.png";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function HomeScreen({ navigation }) {
  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Image source={line} style={{ left: 142 }} alt="right-corner-line" />
        <View>
          <Text style={styles.title}>Pump House</Text>
          <Text style={styles.subtitle}>
            FIND OUT EXACTLY WHAT DIET & TRAINING WILL WORK SPECIFICALLY FOR YOU
          </Text>
        </View>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("WorkoutList")}
        >
          <Text style={styles.next}>Next</Text>
        </Pressable>
        <Image source={woman} alt="pink-woman" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF6079",
    alignItems: "center",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    marginTop: 37,
    textAlign: "center",
    color: "#ffff",
  },
  subtitle: {
    fontSize: 12,
    marginLeft: 24,
    marginRight: 24,
    textAlign: "center",
    marginTop: 10,
    lineHeight: 24,
    color: "#ffff",
  },
  button: {
    width: 266,
    height: 64,
    backgroundColor: "white",
    marginTop: 35,
    borderRadius: 16,
  },
  next: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 17,
    fontWeight: "semibold",
  },
});
