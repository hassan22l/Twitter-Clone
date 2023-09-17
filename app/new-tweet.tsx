import { useState } from "react";
import { Link, useRouter } from "expo-router";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { Text } from '../components/Themed';

const user = {
  id: "u1",
  username: "jlowatson",
  name: "Jason",
  image: "https://randomuser.me/api/portraits/men/68.jpg",
};

export default function NewTweet() {
  const [text, setText] = useState("");
  const router = useRouter();

  const onTweetPress = () => {
    console.warn("posting the tweet", text);

    setText("");
    router.back();
  };

  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href="../" style={{ fontSize: 20 }}>
            <Feather
              name="x"
              size={25}
              color={Colors[colorScheme ?? "light"].text}
            />
          </Link>

          <Pressable onPress={onTweetPress} style={styles.button}>
            <Text style={styles.buttonText}>Tweet</Text>
          </Pressable>
        </View>
        <View style={styles.inputContainer}>
          <Image src={user.image} style={styles.image} />
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="what's happening"
            placeholderTextColor={Colors[colorScheme ?? "light"].text}
            multiline
            numberOfLines={5}
            style={{ color: "white" , flex: 1, fontSize: 18, textAlignVertical: "top",   }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 10,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#1C9BF0",
    padding: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  buttonText: {
    fontWeight: "700",
    fontSize: 16,
  },

  inputContainer: {
    flexDirection: "row",
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 30,
    marginRight: 5,
  },
});
