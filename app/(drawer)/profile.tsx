import { View, Text, Image, StyleSheet, FlatList, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView,  } from 'react-native-safe-area-context'
import tweets from '../../assets/data/tweets';
import Tweet from '../../components/Tweet';
import { ScrollView } from 'react-native-gesture-handler';
import { Link } from 'expo-router';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const user = {
  id: "u1",
  username: "jlowatson",
  name: "Jason",
  image: "https://randomuser.me/api/portraits/men/68.jpg",
  following:  337 ,
  followers: 354 ,
  followingUsers: "milagros_idk",
  followersUsers: "latiti"
};

export default function Profile() {
  return (
    <SafeAreaView style={styles.topContainer}>
      <ScrollView>
      
        <View
          style={{
            width: 350,
            aspectRatio: 2.5,
            alignContent: "center",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            style={styles.header}
          />
          <View style={styles.backbuttom}>
            <Link href="../">
            <AntDesign name="arrowleft" size={24} color="white" />
            </Link>
            </View>

            <View style={styles.searchButtom}>
            <Link href="../">
            <AntDesign name="search1" size={24} color="white" />
            </Link>
            </View>

            <View style={styles.OptionButtom}>
            <Link href="../">
            <Entypo name="dots-three-vertical" size={24} color="white" />
            </Link>
            </View>


          <View>
            <Image
              src="https://randomuser.me/api/portraits/men/33.jpg"
              style={styles.userImage}
            />
            <Pressable style={styles.editProfile}>
              <Link href="/new-tweet" asChild>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  Edit Profile
                </Text>
              </Link>
            </Pressable>
          </View>
        </View>

        <Text style={styles.name}> {user.name} </Text>
        <Text style={styles.username}>@{user.username} </Text>

        <Text style={{ textAlign: "justify", marginLeft: 15, marginTop: 10 }}>
          Web developer, music lover and future dad
        </Text>
        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons
            name="balloon"
            size={20}
            color="grey"
            style={{ marginTop: 8, marginLeft: 10 }}
          />
          <Text style={{ textAlign: "justify", marginTop: 7, color: "grey" }}>
            
            Born August 23, 2000
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <EvilIcons
            name="calendar"
            size={20}
            color="gray"
            style={{ marginTop: 8, marginLeft: 10 }}
          />
          <Text style={{ textAlign: "justify", marginTop: 5, color: "grey" }}>
            
            Joined January 2017
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "white",
            marginTop: 15,
            flexDirection: "row",
            marginBottom: 10
          }}
        >
          <Text style={{ fontSize: 15, marginLeft: 10 }}>
            {user.following}
          </Text>
          <Text style={{ color: "grey" }}> Following </Text>
          <Text style={{ fontSize: 15, marginLeft: 10 }}>
            
            {user.followers}
          </Text>
          <Text style={{ color: "grey" }}> Followers</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" ,borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey", }}>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 5,
              marginBottom: 10,
            }}
          >
            Tweets
          </Text>
          <Text style={{ marginLeft: 20, fontSize: 15, marginTop: 5 }}>
            
            Replies
          </Text>
          <Text style={{ marginLeft: 20, fontSize: 15, marginTop: 5 }}>
            
            Highlights
          </Text>
          <Text style={{ marginLeft: 20, fontSize: 15, marginTop: 5 }}>
            
            Media
          </Text>
          <Text style={{ marginLeft: 20, fontSize: 15, marginTop: 5 }}>
           
            Likes
          </Text>
        </View>

        <View style={styles.page}>
          <FlatList
            data={tweets}
            renderItem={({ item }) => <Tweet tweet={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topContainer:{
    flex: 1, 
    backgroundColor: "white" ,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
  },
  header:{
    position: "absolute",
    width:360,
    aspectRatio:2.5,
  },

  backbuttom:{
    marginTop:15,
    marginLeft:10, 
    backgroundColor: 'rgba(1, 1, 1, 0.3)',
    width: 35, 
    height: 35,
    borderRadius:50, 
    alignItems:'center', 
    justifyContent: "center",
  },

  searchButtom:{
    position:"absolute",
    marginTop:15,
    marginLeft:265, 
    backgroundColor: 'rgba(1, 1, 1, 0.3)',
    width: 35, 
    height: 35,
    borderRadius:50, 
    alignItems:'center', 
    justifyContent: "center",

  },

  OptionButtom:{
    position:'absolute',
    marginTop:15,
    marginLeft:315, 
    backgroundColor: 'rgba(1, 1, 1, 0.3)',
    width: 35, 
    height: 35,
    borderRadius:50, 
    alignItems:'center', 
    justifyContent: "center",

  },
  userImage:{
    position: "absolute",
    marginTop: 55,
    width: 80,
    aspectRatio: 1,
    borderRadius: 40,
    marginLeft: 10,
    borderWidth:3,
    borderColor:"white"

  },
  editProfile:{

    backgroundColor: "transparent", 
    borderColor:"grey", 
    borderWidth:1,
    width: 95,
    height: 25,
    borderRadius:20,
    left:250,
    top:100,
  },
  name:{
    marginTop:50,
    marginLeft:10,
    fontSize:25,
    fontWeight: "bold",
  },
  username:{
    marginLeft:15,
    fontSize:15,
    color:"gray",
  },
  page: {
    flex: 1,
    backgroundColor: "white",
   
  },

})