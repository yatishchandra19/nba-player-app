import {
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function LatestNews() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              "https://abc7news.com/sports/how-the-warriors-have-prepared-for-their-return-to-utah-after-deki/14414393/#:~:text=Milojevic's%20death%20at%20age%2046,season%20on%20the%20Warriors%20staff."
            );
          }}
        >
          <View style={styles.card}>
            <Image
              source={require("../assets/news1.jpg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>
                How the Warriors have prepared for their return to Utah after
                'Deki' Milojevic's death
              </Text>
              <Text style={styles.cardDate}>1h - kenddra Andrews</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              "https://www.espn.in/nfl/story/_/id/23975006/best-father-son-combos-sports"
            );
          }}
        >
          <View style={styles.card}>
            <Image
              source={require("../assets/news2.jpg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>
                Super Bowl 2024: Shanahans and McCaffreys lead list of best
                father-son...
              </Text>
              <Text style={styles.cardDate}>1d - Tom VanHaaren</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              "https://www.espn.in/nba/story/_/id/39455180/hawks-overcome-steph-curry-60-ot-win-vs-warriors"
            );
          }}
        >
          <View style={styles.card}>
            <Image
              source={require("../assets/news3.jpg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>
                Curry nets season-high 60; Hawks get last laugh
              </Text>
              <Text style={styles.cardDate}>9d</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              "https://www.espn.in/nba/story/_/id/39516048/bucks-steady-progress-defense-shines-rout-nuggets"
            );
          }}
        >
          <View style={styles.card}>
            <Image
              source={require("../assets/news4.jpg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>
                Bucks' 'steady progress' shines in rout of Nuggets
              </Text>
              <Text style={styles.cardDate}>2h</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              "https://www.espn.in/nba/story/_/id/39516048/bucks-steady-progress-defense-shines-rout-nuggets"
            );
          }}
        >
          <View style={styles.card}>
            <Image
              source={require("../assets/news5.jpg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>
                A sub-30-minute triple-double? Wembanyama's remarkable Monday…{" "}
              </Text>
              <Text style={styles.cardDate}>2h - Anthony Gharib</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              "https://www.espn.in/nba/story/_/id/39514137/grizzlies-gg-jackson-monday-violating-team-rule"
            );
          }}
        >
          <View style={styles.card}>
            <Image
              source={require("../assets/news6.jpg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>
                Grizzlies' GG Jackson out after violating team rule
              </Text>
              <Text style={styles.cardDate}>3h</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              "https://www.espn.in/nba/story/_/id/39513865/dinwiddie-picking-la-know-how-win"
            );
          }}
        >
          <View style={styles.card}>
            <Image
              source={require("../assets/news7.jpg")}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>
                Dinwiddie on picking L.A.: 'They know how to win'
              </Text>
              <Text style={styles.cardDate}>7h - Dave McMenamin</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    paddingHorizontal: 20,
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardBody: {
    padding: 15,
    borderColor: "#D3D3D3",
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
    // height: 125,
    // justifyContent: "space-between",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDate: {
    color: "#c0c0c0",
    fontWeight: "bold",
  },
});
