import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import workouts from "../data/WorkoutData";
import WorkoutCard from "../components/WorkoutCard";
import promoGirl from "../assets/pink-girl.png";

export default function WorkoutListScreen({ navigation }) {
  const renderWorkout = ({ item }) => (
    <WorkoutCard
      image={item.image}
      title={item.title}
      duration={item.duration}
      calories={item.calories}
      level={item.level}
      onPress={() => navigation.navigate("WorkoutDetails", { workout: item })}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        renderItem={renderWorkout}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <Pressable
                style={styles.iconButton}
                onPress={() => navigation.goBack()}
              >
                <Ionicons name="chevron-back" size={22} color="#111827" />
              </Pressable>

              <Text style={styles.headerTitle}>Workouts</Text>

              <Pressable style={styles.iconButton}>
                <Ionicons name="body" size={21} color="#111827" />
              </Pressable>
            </View>

            <View style={styles.banner}>
              <View style={styles.bannerCircle} />

              <View style={styles.bannerCopy}>
                <Text style={styles.discountText}>Flat 50%</Text>
                <Text style={styles.discountText}>Discount</Text>
                <Text style={styles.bannerText}>Shape your</Text>
                <Text style={styles.bannerText}>body with</Text>
                <Text style={styles.bannerText}>pump house</Text>
              </View>

              <Image source={promoGirl} style={styles.bannerImage} />
            </View>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Get Started</Text>
              <Text style={styles.workoutCount}>
                {workouts.length} Workouts
              </Text>
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: 22,
    paddingBottom: 26,
  },
  header: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 60,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff7fa",
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },
  banner: {
    height: 212,
    borderRadius: 22,
    backgroundColor: "#FF6079",
    marginTop: 15,
    overflow: "hidden",
  },
  bannerCircle: {
    position: "absolute",
    left: -78,
    bottom: -72,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "rgba(214, 55, 89, 0.2)",
  },
  bannerCopy: {
    position: "absolute",
    left: 30,
    top: 23,
    zIndex: 1,
  },
  discountText: {
    color: "#fff",
    fontSize: 30,
    lineHeight: 36,
    fontWeight: "700",
    marginLeft: 8,
  },
  bannerText: {
    color: "#fff",
    fontSize: 22,
    lineHeight: 31,
    marginLeft: 12,
    textAlign: "center",
  },
  bannerImage: {
    position: "absolute",
    right: -2,
    bottom: 0,
    width: 176,
    height: 230,
    resizeMode: "contain",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    marginTop:20,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#111827",
  },
  workoutCount: {
    fontSize: 12,
    fontWeight: "700",
    color: "#9aa3af",
  },
});
