import { withLayoutContext } from "expo-router";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import {Image, Text, StyleSheet, ScrollView, ScrollViewProps} from "react-native"

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
};

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView style={styles.container} {...props}>
        <Image src= "https://randomuser.me/api/portraits/men/33.jpg" 
    style={{ width: 40, aspectRatio: 1, borderRadius: 40, marginLeft:15}}
    />
    <Text style= {styles.name} > {user.name} </Text>
    <Text style= {styles.username}> @{user.username} </Text>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
}


const styles = StyleSheet.create({
  container:{
    marginLeft:5,

  },

name:{
  fontWeight: "bold",
  fontSize: 20,
  marginLeft: 10,
},

username:{
  color: "grey",
  marginLeft: 10,
}


})


export default function DrawerLayout() {
  return (
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>>
      <Drawer.Screen name="(tabs)" options={{ headerShown: false, tittle:"Home" }} />
    </Drawer>
  );
}
