import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

export default function DrawerContent(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        {/* <Text
          style={[styles.profile]}
          onPress={() => {
            navigation.navigate("Player");
          }}
        >
          Player
        </Text>

        <Text
          style={styles.profile}
          onPress={() => {
            navigation.navigate("Stats");
          }}
        >
          Stats
        </Text>
        <Text style={styles.profile}>Bio</Text>
        <Text
          style={styles.profile}
          onPress={() => {
            navigation.navigate("Player Videos");
          }}
        >
          Videos
        </Text>

        <Text
          style={styles.profile}
          onPress={() => {
            navigation.navigate("Player");
          }}
        >
          Rotowire
        </Text> */}
      </View>

      <View>
        <View style={styles.externalLinks}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.externalLinkItem}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://www.nba.com/warriors/roster");
                }}
              >
                <Text style={styles.externalLinkText}>Roster</Text>
              </TouchableOpacity>
              <EvilIcons name="external-link" size={24} color="black" />
            </View>
            <View style={styles.externalLinkItem}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://www.nba.com/warriors");
                }}
              >
                <Text style={styles.externalLinkText}>warriors.com</Text>
              </TouchableOpacity>
              <EvilIcons name="external-link" size={24} color="black" />
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={styles.externalLinkItem}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://shop.warriors.com/");
                }}
              >
                <Text style={styles.externalLinkText}>Store</Text>
              </TouchableOpacity>
              <EvilIcons name="external-link" size={24} color="black" />
            </View>
            <View style={styles.externalLinkItem}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL("https://www.nba.com/warriors/tickets");
                }}
              >
                <Text style={styles.externalLinkText}>Tickets</Text>
              </TouchableOpacity>
              <EvilIcons name="external-link" size={24} color="black" />
            </View>
          </View>
        </View>
        <View style={styles.socialIcons}>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.facebook.com/warriors")}
          >
            <FontAwesome5 name="facebook" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.instagram.com/warriors/")
            }
          >
            <FontAwesome5 name="instagram" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://twitter.com/warriors")}
          >
            <FontAwesome6 name="x-twitter" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    flex: 1,
  },

  profile: {
    fontSize: 16,
    padding: 10,
    backgroundColor: "#318CE7",
    borderRadius: 8,
    marginTop: 10,
    color: "white",
    fontWeight: "500",
  },
  externalLinkItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
    padding: 8,
  },
  externalLinkText: {
    color: "#0268d6",
    fontSize: 15,
    fontWeight: "600",
  },
  socialIcons: {
    marginTop: 25,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
