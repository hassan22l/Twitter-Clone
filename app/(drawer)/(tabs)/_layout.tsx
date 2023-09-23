import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, useNavigation } from 'expo-router';
import { Pressable, useColorScheme, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../../constants/Colors';
import { FontDisplay } from 'expo-font';


function AvatarHeader (){
  const navigation = useNavigation();
  return(
    <Pressable onPress={ () => 
      navigation.dispatch(DrawerActions.openDrawer())} >
    <Image src= "https://randomuser.me/api/portraits/men/33.jpg" 
    style={{ width: 40, aspectRatio: 1, borderRadius: 40, marginLeft:10}}
    />
    </Pressable>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index" 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={25} color={Colors[colorScheme ?? "light"].text} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerLeft: () => <AvatarHeader />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={25} color={Colors[colorScheme ?? "light"].text} />
          ),
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="bell" size={25} color={Colors[colorScheme ?? "light"].text} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="mail-outline" size={24} color={Colors[colorScheme ?? "light"].text} />
          ),
        }}
      />
    </Tabs>
  );
}
