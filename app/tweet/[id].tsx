import { Text } from "react-native";
import Tweet from "../../components/Tweet";
import tweets from "../../assets/data/tweets";
import { useSearchParams } from "expo-router";

export default function TweetScreen() {
  const { id } = useSearchParams();

  const tweet = tweets.find((element) => element.id === id);

  if(tweet) {
    return <Tweet tweet={tweet} />;
  }
  else {
    return <Text> tweet {id} not found! </Text>;
  }

}
