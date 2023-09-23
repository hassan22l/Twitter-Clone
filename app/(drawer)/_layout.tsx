import { withLayoutContext } from "expo-router";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import {Image, StyleSheet, View ,ScrollView, ScrollViewProps, useColorScheme} from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';


const DrawerNavigator = createDrawerNavigator().Navigator;

const Drawer = withLayoutContext(DrawerNavigator);
export const unstable_settings = {
  initialRouteName: "(tabs)",
};

const user = {
  id: "u1",
  username: "jlowatson",
  name: "Jason",
  image: "https://randomuser.me/api/portraits/men/68.jpg",
  following:  337 ,
  followers: 354 ,
};

function CustomDrawerContent(props) {
  const colorScheme = useColorScheme();
    return ( 
          
      <DrawerContentScrollView style={styles.container} {...props}>
     
        <View style={styles.TopContainer}>
          <View style={{ flexDirection: "row" }}> 
                <Image src= "https://randomuser.me/api/portraits/men/33.jpg" 
                  style={{ 
                    width: 40,
                    aspectRatio: 1,
                    borderRadius: 40,
                    marginLeft:5}}
                  />
                <MaterialCommunityIcons
                  name="dots-vertical-circle-outline" 
                  size={24} color={Colors[colorScheme ?? "light"].text}
                  style={{ marginLeft: "auto" }} />
          </View>
      
          <Text style= {styles.name} > {user.name} </Text>
          <Text style= {styles.username}> @{user.username} </Text>

        <View style= {{flexDirection:"row", marginTop:10,}}>  
          <Text > {user.following} </Text>
          <Text style={{color:"grey"}}>Following </Text>
          <Text> {user.followers} </Text>
          <Text style={{color:"grey"}}>Followers</Text>
        </View>
        
       </View>

        <DrawerItemList {...props} />

      </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({

  TopContainer:{
    marginBottom:10, 
    padding: 15, 
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",

  },

  container:{
    marginLeft:5,
  },

name:{
  fontWeight: "bold",
  fontSize: 20,
  
},

username:{
  color: "grey",
  
}


})


export default function DrawerLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="(tabs)" options={{ headerShown: false, title:"Home" }} />
      <Drawer.Screen name="profile" options={{ headerShown: false, title:"Profile" }} />
      <Drawer.Screen name="twitter-blue" options={{ headerShown: false, title:"twitterBlue" }} />
    </Drawer>
    </ThemeProvider>
  );
}
