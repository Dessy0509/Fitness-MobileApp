import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";


export default function WorkoutDetailsScreen({ route }) {

  const { workout } = route.params;

  const [completed, setCompleted] = useState(false);

  return (
    <View style={styles.container}>
        <Pressable style={styles.lvl}>
            <Text style={styles.leveltext}>
                Level: {workout.level}
            </Text>
        </Pressable>
        
      <Image
        source={workout.image}
        style={styles.image}
      />

      <Text style={styles.title}>
        {workout.title}
      </Text>
        <View style={{flexDirection: "row", marginTop: 10, gap:5}}>
            <Ionicons name="time-outline" size={15} color="#8b95a1" />
            <Text style={styles.info}>
                Duration: {workout.duration}
            </Text>
        </View>

        <View style={{flexDirection: "row", marginTop:10, gap:5}}>
            <Ionicons name="flame" size={14} color="#ff5d7d" />
            <Text style={styles.info}>
                Calories: {workout.calories}
            </Text>
        </View>


      <TouchableOpacity
        style={styles.button}
        onPress={() => setCompleted(!completed)}
      >
        <Text style={styles.buttonText}>
          {completed ? "Completed" : "Start Workout"}
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  lvl:{
    width:150,
    height:35,
    borderRadius:15,
    backgroundColor:"#fff7fa",
    alignSelf:'center'

  },
  leveltext:{
    fontSize: 20,
    fontWeight:700,
    textAlign:'center',
    paddingTop:2
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 15,
    marginTop:15
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },

  info: {
    fontSize: 16,
    color: "#666",
    bottom:3
  },

  button: {
    marginTop: 30,
    backgroundColor: "#ff5a7a",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});