
import {useState} from "react";
import { Link, useRouter} from "expo-router";
import { View, StyleSheet, Text, Image,TextInput, Pressable, SafeAreaView} from "react-native";
import { Feather } from '@expo/vector-icons'; 
import { useRoute } from "@react-navigation/native";

const user = {
  id: "u1",
  username: "jlowatson",
  name: "Jason",
  image: "https://randomuser.me/api/portraits/men/68.jpg",
};

export default function NewTweet() {
  const [text, setText] = useState("");
  const router= useRouter();

  const onTweetPress = () => {
    console.warn("posting the tweet", text);

    setText("");
    router.back();
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href="../" style={{ fontSize: 20 }}>
          <Feather name="x" size={25} color="black"/>
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
            multiline
            numberOfLines={5}
            style={{ flex: 1, fontSize: 18, textAlignVertical: "top" }}
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
  buttonContainer:{
    flexDirection: "row",
    marginVertical:10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  button:{
    backgroundColor:"#1C9BF0",
    padding: 6,
    paddingHorizontal:20,
    borderRadius:20,
  },

  buttonText:{
    color: "white",
    fontWeight: "700",
    fontSize:16,
  },

  inputContainer: {
    flexDirection: "row",
    
    
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 30,
    marginRight:5,
  },
});
