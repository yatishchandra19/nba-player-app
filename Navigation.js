import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import Profile from "./components/Profile";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";

import { StatusBar, Text, StyleSheet } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";

import DrawerContent from "./components/DrawerContent";
import LandingPage from "./components/LandingPage";
import Videos from "./components/Videos";
import Stats from "./components/Stats";
import LatestNews from "./components/LatestNews";
import Bio from "./components/Bio";
import Rotowire from "./components/Rotowire";

const Drawer = createDrawerNavigator();

function DrawerGroup() {
  return (
    <Drawer.Navigator
      screenOptions={{
        swipeEdgeWidth: 0,
        drawerStyle: {
          paddingHorizontal: 6,
          paddingTop: 20,
        },
        drawerLabelStyle: {
          fontSize: 16,
          paddingHorizontal: 5,
        },

        // drawerActiveTintColor: "#0096c7",
        drawerActiveTintColor: "#318CE7",

        // drawerInactiveTintColor: "#00308F",
      }}
      drawerContent={(props) => (
        <>
          <DrawerItemList {...props} />
          <DrawerContent {...props} />
        </>
      )}
    >
      <Drawer.Screen
        name="Player"
        component={HomeStackGroup}
        options={{
          headerShown: false,
        }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Player Videos"
        component={Videos}
        // options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Bio"
        component={Bio}
        // options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Stats"
        component={Stats}
        // options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Rotowire"
        component={Rotowire}
        // options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={"TabsGroup"}
        component={TabsGroup}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const Tabs = createBottomTabNavigator();

function TabsGroup() {
  const navigation = useNavigation();
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name={"Player"}
        component={LandingPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="basketball-ball"
              size={24}
              color={focused ? "#034694" : "grey"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name={"Profile"}
        component={Profile}
        options={{
          tabBarLabel: false,
          headerShown: true,
          headerLeft: () => (
            <AntDesign
              style={{ marginLeft: 10 }}
              name="arrowleft"
              size={26}
              color="#034694"
              onPress={() => navigation.goBack()}
            />
          ),
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="profile"
              size={24}
              color={focused ? "#034694" : "grey"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name={"Latest News"}
        component={LatestNews}
        options={{
          headerShown: true,
          headerLeft: () => (
            <AntDesign
              style={{ marginLeft: 10 }}
              name="arrowleft"
              size={26}
              color="#034694"
              onPress={() => navigation.goBack()}
            />
          ),
          tabBarIcon: ({ focused }) => (
            // <FontAwesome5
            //   name="basketball-ball"
            //   size={24}
            //   color={focused ? "#034694" : "grey"}
            // />
            <FontAwesome
              name="newspaper-o"
              size={24}
              color={focused ? "#034694" : "grey"}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" />
      <DrawerGroup />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   justifyContent: "flex-end",
  // },
});
