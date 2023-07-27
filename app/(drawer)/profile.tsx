import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView,  } from 'react-native-safe-area-context'
import tweets from '../../assets/data/tweets';
import Tweet from '../../components/Tweet';
import { ScrollView } from 'react-native-gesture-handler';


const user = {
  id: "u1",
  username: "jlowatson",
  name: "Jason",
  image: "https://randomuser.me/api/portraits/men/68.jpg",
  following:  337 ,
  followers: 354 ,
};

export default function Profile(){
  return(

    <SafeAreaView style={styles.topContainer }>
      <ScrollView>

      <View style={{   
      width: 350,
      aspectRatio:2.5,
      alignContent: "center",
      }}>
      <Image src= "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" 
    style={styles.header}
    />
    <Image src= "https://randomuser.me/api/portraits/men/33.jpg" 
                  style={{ 
                    position:"absolute",
                    marginTop:100,
                    width: 80,
                    aspectRatio: 1,
                    borderRadius: 40,
                    marginLeft:10}}
                  />
      </View>

      
      <Text style= {styles.name} > {user.name} </Text>
      <Text style= {styles.username}> @{user.username} </Text>
   
      <View style={{backgroundColor:"white", marginTop:300,flexDirection:"row"}}>
          <Text style={{fontSize:15}}> {user.following} </Text>
          <Text style={{color:"grey"}}>Following </Text>
          <Text style={{fontSize:15}}> {user.followers} </Text>
          <Text style={{color:"grey"}}>Followers</Text>

      </View>

      <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
      </View>
       
      
      </ScrollView>
    </SafeAreaView>
    
  )
  
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
  name:{
    marginTop:35,
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