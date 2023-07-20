import { withLayoutContext } from "expo-router";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Text } from "../../components/Themed";
const DrawerNavigator = createDrawerNavigator().Navigator;

const Drawer = withLayoutContext(DrawerNavigator);
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <Text style={{alignSelf: "center", fontSize: 20}}> Milagros</Text>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
}

export default function DrawerLayout() {
  return (
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>>
      <Drawer.Screen name="(tabs)" options={{ headerShown: false, tittle:"Home" }} />
    </Drawer>
  );
}
