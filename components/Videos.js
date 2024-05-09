import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  ScrollView,
  StatusBar,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

function handlePress() {
  Linking.openURL("https://youtu.be/GGD_gBUFhvs?si=eGzokuZxjDl20g1k");
}

export default function Videos() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.playerVideos}
        showsVerticalScrollIndicator={false}
      >
        {/* <Text style={styles.title}>PLAYER VIDEOS</Text> */}

        <View style={styles.thumbnail}>
          <TouchableOpacity onPress={handlePress}>
            <Image
              source={require("../assets/thumbnail1.png")}
              style={styles.thumbnailImage}
            />
          </TouchableOpacity>

          <Text style={styles.thumbnailText}>
            STEPH CURRY SUMA 41 Y LOS WARRIORS GANAN EN INDY
          </Text>

          <AntDesign
            name="playcircleo"
            size={30}
            color="white"
            style={styles.playIcon}
          />
        </View>

        <View style={styles.thumbnail}>
          <TouchableOpacity onPress={handlePress}>
            <Image
              source={require("../assets/thumbnail2.png")}
              style={styles.thumbnailImage}
            />
          </TouchableOpacity>

          <Text style={styles.thumbnailText}>
            CURRY DRILLS 11 3-POINTERS IN WARRIORS' VICTORY11
          </Text>

          <AntDesign
            name="playcircleo"
            size={30}
            color="white"
            style={styles.playIcon}
          />
        </View>

        <View style={styles.thumbnail}>
          <TouchableOpacity onPress={handlePress}>
            <Image
              source={require("../assets/thumbnail3.png")}
              style={styles.thumbnailImage}
            />
          </TouchableOpacity>

          <Text style={styles.thumbnailText}>
            STEPHEN CURRY WITH 42 POINTS VS. INDIANA PACERS
          </Text>

          <AntDesign
            name="playcircleo"
            size={30}
            color="white"
            style={styles.playIcon}
          />
        </View>

        <View style={styles.thumbnail}>
          <TouchableOpacity onPress={handlePress}>
            <Image
              source={require("../assets/thumbnail4.png")}
              style={styles.thumbnailImage}
            />
          </TouchableOpacity>

          <Text style={styles.thumbnailText}>
            STEPHEN CURRY BEATS TWO DEFENDERS FOR THE TOUGH, LOGO
          </Text>

          <AntDesign
            name="playcircleo"
            size={30}
            color="white"
            style={styles.playIcon}
          />
        </View>

        <View style={styles.thumbnail}>
          <TouchableOpacity onPress={handlePress}>
            <Image
              source={require("../assets/thumbnail5.png")}
              style={styles.thumbnailImage}
            />
          </TouchableOpacity>

          <Text style={styles.thumbnailText}>3-POINTER BY STEPHEN CURRY </Text>

          <AntDesign
            name="playcircleo"
            size={30}
            color="white"
            style={styles.playIcon}
          />
        </View>

        <View style={styles.thumbnail}>
          <TouchableOpacity onPress={handlePress}>
            <Image
              source={require("../assets/thumbnail6.png")}
              style={styles.thumbnailImage}
            />
          </TouchableOpacity>

          <Text style={styles.thumbnailText}>3-POINTER BY STEPHEN CURRY </Text>

          <AntDesign
            name="playcircleo"
            size={30}
            color="white"
            style={styles.playIcon}
          />
        </View>

        <View style={styles.thumbnail}>
          <TouchableOpacity onPress={handlePress}>
            <Image
              source={require("../assets/thumbnail7.png")}
              style={styles.thumbnailImage}
            />
          </TouchableOpacity>

          <Text style={styles.thumbnailText}>
            CURRY ON RECEPTION IN BK: 'IT'S TRULY SPECIAL.
          </Text>

          <AntDesign
            name="playcircleo"
            size={30}
            color="white"
            style={styles.playIcon}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,

    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginBottom: 10,
    color: "#034694",
    marginBottom: 20,
  },
  thumbnail: {
    borderRadius: 30,
    marginBottom: 30,
  },
  thumbnailImage: {
    width: 315,
    height: 200,
    borderRadius: 7,
    marginBottom: 10,
    alignItems: "center",
  },
  thumbnailText: {
    paddingHorizontal: 10,
    padding: 0,
    textTransform: "uppercase",
    fontSize: 15,
    fontWeight: "bold",
  },
  playIcon: {
    position: "absolute",
    top: 155,
    left: 16,
  },
});
