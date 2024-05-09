import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";

import { FontAwesome } from "@expo/vector-icons";

export default function LandingPage() {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  // let [fontsLoaded] = useFonts({
  //   "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  // });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.playerHeader}>
        <FontAwesome
          style={styles.drawerIcon}
          name="bars"
          size={26}
          color="#034694"
          onPress={openDrawer}
        />

        <Image
          source={require("../assets/team-logo.png")}
          style={[{ width: 120, height: 145 }, styles.teamLogo]}
        />

        <View style={styles.playerImage}>
          <Image
            source={require("../assets/stephen-curry.png")}
            style={{ width: 190, height: 160 }}
          />
        </View>
        <View style={styles.playerTitle}>
          <Text style={styles.playerTitleText}>
            Golden State Warriorss | #30 | Guard
          </Text>
          <Text style={styles.playerName}>STEPHEN CURRY</Text>
          {/* <Text style={styles.playerName}>CURRY</Text> */}
        </View>
      </View>
      <View style={styles.description}>
        <View style={styles.scores}>
          <View style={styles.scoreItem}>
            <Text style={styles.head}>PPG</Text>
            <Text style={styles.no}>28.1</Text>
          </View>
          <View style={styles.scoreItem}>
            <Text style={styles.head}>RPG</Text>
            <Text style={styles.no}>4.4</Text>
          </View>
          <View style={styles.scoreItem}>
            <Text style={styles.head}>APG</Text>
            <Text style={styles.no}>5.0</Text>
          </View>
          <View style={styles.scoreItem}>
            <Text style={styles.head}>PIE</Text>
            <Text style={styles.no}>14.5</Text>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.infoView}>
            <Text style={styles.infoText1}>6'2" | 185lb | 35 years</Text>
          </View>
          <View style={styles.infoView}>
            <Text style={styles.infoText1}>DRAFT</Text>
            <Text style={styles.infoText2}>2009 R1 Pick 7</Text>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.infoView}>
            <Text style={styles.infoText1}>BIRTHDATE</Text>
            <Text style={styles.infoText2}>March 14, 1988</Text>
          </View>
          <View style={styles.infoView}>
            <Text style={styles.infoText1}>COUNTRY</Text>
            <Text style={styles.infoText2}>USA</Text>
          </View>
        </View>
        <View style={styles.info}>
          <View style={styles.infoView}>
            <Text style={styles.infoText1}>LAST ATTENDED</Text>
            <Text style={styles.infoText2}>Davidson</Text>
          </View>
          <View style={styles.infoView}>
            <Text style={styles.infoText1}>EXPERIENCE</Text>
            <Text style={styles.infoText2}>14 Years</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#318CE7",
  },
  playerHeader: {
    // paddingHorizontal: 30,
    height: 340,
    flexDirection: "column",
    // alignItems: "center",
    backgroundColor: "#318CE7",
  },

  drawerIcon: {
    position: "absolute",
    top: 15,
    left: 15,
  },

  teamLogo: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  playerImage: {
    // flex: 1,
    paddingTop: 110,
    alignItems: "flex-end",
    paddingHorizontal: 30,
  },
  playerTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 2,
    borderTopColor: "white",
    borderTopStyle: "solid",
  },
  playerTitleText: {
    color: "white",
    // paddingTop: 10,
    fontWeight: "bold",
  },
  playerName: {
    color: "white",
    fontSize: 28,
    fontWeight: "900",
    // fontFamily: "Roboto",
    lineHeight: 30,
  },
  description: {
    flex: 1,
    backgroundColor: "#034694",
    // paddingTop: 20,
    // paddingBottom: 20,
    // justifyContent: "space-evenly",
    borderTopWidth: 2,
    borderTopColor: "white",
    borderTopStyle: "solid",
  },
  scores: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // padding: 20,
    // marginBottom: 20,
  },
  scoreItem: {
    alignItems: "center",
  },
  head: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
  },
  no: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  info: {
    flex: 1,
    // paddingHorizontal: 40,
    borderTopWidth: 2,
    borderTopColor: "white",
    borderTopStyle: "solid",
    flexDirection: "row",
    // justifyContent: "space-around",
    alignItems: "center",
  },
  infoView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  infoText1: {
    color: "white",
    fontSize: 12,
    fontWeight: "700",
  },
  infoText2: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
