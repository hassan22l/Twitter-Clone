import { Text } from "react-native";
import Tweet from "../../components/Tweet";
import tweets from "../../assets/data/tweets";
import { useSearchParams } from "expo-router";

export default function TweetScreen() {
  const { id } = useSearchParams();

  const tweet = tweets.find((t) => t.id === id);

  if(tweet) {
    return <Tweet tweet={tweet} />;
  }

}
