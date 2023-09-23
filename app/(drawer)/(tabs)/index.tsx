import { StyleSheet, View, FlatList, Pressable } from "react-native";
import Tweet from "../../../components/Tweet";
import tweets from "../../../assets/data/tweets";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
      <Pressable>
        <Link href="/new-tweet" asChild>
          <Entypo
            name="plus"
            size={24}
            color="white"
            style={styles.floatingbutton}
          />
        </Link>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  floatingbutton: {
    backgroundColor: "#1C9BF0",
    width: 50,
    height: 50,
    borderRadius: 50,
    textAlign: "center",
    lineHeight: 50,
    position: "absolute",
    right: 15,
    bottom: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
