import { ScrollView, Text } from "react-native";
import { StyleSheet, SafeAreaView, View } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

const tableHead1 = ["GAME DATE"];

const gameDates = [
  "FEB 07, 2024",
  "FEB 05, 2024",
  "FEB 03, 2024",
  "FEB 02, 2024",
  "JAN 30, 2024",
];

const tableHead2 = [
  "MATCHUP",
  "W/L",
  "MIN",
  "PTS",
  "FGM",
  "FGA",
  "FG%",
  "3PM",
  "3PA",
  "3P%",
  "FTM",
  "FTA",
  "FT%",
  "OREB",
  "DREB",
  "REB",
  "AST",
  "STL",
  "BLK",
  "TOV",
  "PF",
  "+/-",
];

const tableBodyData = [
  [
    "GSW vs. PHX",
    "W",
    "34",
    "30",
    "10",
    "22",
    "45.5",
    "9",
    "16",
    "56.3",
    "1",
    "2",
    "50.0",
    "1",
    "8",
    "9",
    "6",
    "1",
    "0",
    "3",
    "0",
    "10",
  ],
  [
    "GSW @ IND",
    "W",
    "30",
    "42",
    "15",
    "22",
    "68.2",
    "11",
    "16",
    "68.8",
    "1",
    "2",
    "50.0",
    "0",
    "2",
    "2",
    "2",
    "0",
    "1",
    "2",
    "2",
    "13",
  ],
  [
    "GSW @ PHI",
    "W",
    "25",
    "9",
    "2",
    "7",
    "28.6",
    "1",
    "4",
    "25.0",
    "4",
    "4",
    "100",
    "0",
    "3",
    "3",
    "1",
    "0",
    "1",
    "4",
    "2",
    "13",
  ],
  [
    "GSW @ BKN",
    "W",
    "34",
    "29",
    "12",
    "24",
    "50.0",
    "4",
    "11",
    "36.4",
    "1",
    "1",
    "100",
    "1",
    "4",
    "5",
    "3",
    "0",
    "0",
    "4",
    "2",
    "6",
  ],
  [
    "GSW @ ATL",
    "L",
    "41",
    "60",
    "22",
    "38",
    "57.9",
    "10",
    "23",
    "43.5",
    "6",
    "6",
    "100",
    "1",
    "5",
    "6",
    "4",
    "0",
    "1",
    "2",
    "1",
    "-1",
  ],
];

export default function Profile() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View
            style={{
              paddingHorizontal: 20,
              paddingTop: 20,
              backgroundColor: "white",
            }}
          >
            <Text style={[styles.heading]}>LAST 5 GAMES</Text>
          </View>
          <View style={styles.mainTableView}>
            <View>
              <Table>
                <Cell
                  data={tableHead1}
                  style={styles.head}
                  textStyle={{
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                />
                <Col data={gameDates} textStyle={styles.text} />
              </Table>
            </View>
            <ScrollView horizontal={true}>
              <Table>
                <Row
                  data={tableHead2}
                  style={styles.head}
                  textStyle={{ fontWeight: "bold", fontSize: 12 }}
                  widthArr={[
                    100, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45,
                    45, 45, 45, 45, 45, 45, 45,
                  ]}
                />
                <Rows
                  data={tableBodyData}
                  textStyle={styles.text}
                  widthArr={[
                    100, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45,
                    45, 45, 45, 45, 45, 45, 45,
                  ]}
                />
              </Table>
            </ScrollView>
          </View>
        </View>
        <View style={styles.awardsAndNews}>
          <View style={styles.awards}>
            <Text style={styles.heading}>AWARDS AND HONORS</Text>

            <Text style={styles.justText}>9 All-NBA</Text>

            <Text style={styles.justText}>1 All-Rookie Team</Text>
            <Text style={styles.justText}>2 NBA Most Valuable Player</Text>
            <Text style={styles.justText}>10 NBA Player of the Month</Text>
            <Text style={styles.justText}>18 NBA Player of the Week</Text>
            <Text style={styles.justText}>3 NBA Rookie of the Month</Text>
            <Text style={styles.justText}>1 NBA Sportsmanship</Text>
            <Text style={styles.justText}>
              1 NBA All-Star Most Valuable Player
            </Text>
            <Text style={styles.justText}>
              1 NBA Finals Most Valuable Player
            </Text>
          </View>

          <View style={styles.playerNews}>
            <Text style={styles.heading}>PLAYER NEWS</Text>

            <View style={styles.newsItem}>
              <Text style={styles.newsDate}>02/06/2024, 8:45 PM</Text>
              <Text style={styles.newsHeading}>Pops for 29 in Brooklyn</Text>
              <Text style={styles.newsDesc}>
                Curry had 29 points (12-24 FG, 4-11 3Pt, 1-1 FT), five rebounds
                and three assists in 34 minutes during Monday's 109-98 win over
                the Nets.
              </Text>
            </View>
            <View style={styles.newsItem}>
              <Text style={styles.newsDate}>02/04/2024, 9:26 PM</Text>
              <Text style={styles.newsHeading}>Drills 10 triples in loss</Text>
              <Text style={styles.newsDesc}>
                Curry totaled 60 points (22-38 FG, 10-23 3Pt, 6-6 FT), six
                rebounds, four assists and one block in 41 minutes during
                Saturday's 141-134 overtime loss to the Hawks.
              </Text>
            </View>
            <View style={styles.newsItem}>
              <Text style={styles.newsDate}>02/04/2024, 9:26 PM</Text>
              <Text style={styles.newsHeading}>Drills 10 triples in loss</Text>
              <Text style={styles.newsDesc}>
                Curry totaled 60 points (22-38 FG, 10-23 3Pt, 6-6 FT), six
                rebounds, four assists and one block in 41 minutes during
                Saturday's 141-134 overtime loss to the Hawks.
              </Text>
            </View>
            <View style={styles.newsItem}>
              <Text style={styles.newsDate}>02/04/2024, 9:26 PM</Text>
              <Text style={styles.newsHeading}>Drills 10 triples in loss</Text>
              <Text style={styles.newsDesc}>
                Curry totaled 60 points (22-38 FG, 10-23 3Pt, 6-6 FT), six
                rebounds, four assists and one block in 41 minutes during
                Saturday's 141-134 overtime loss to the Hawks.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainTableView: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 20,
  },
  tableView: {
    width: 200,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "brown",
  },
  container: {},
  head: {
    // height: 40,
    // width: 100,
    padding: 12,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#e5e7eb",
    color: "#343232",
    fontWeight: "bold",
  },
  text: {
    padding: 10,
    height: 45,

    width: 110,
    // alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    fontSize: 14,
    borderBottomColor: "#ebe9e7",
  },
  awardsAndNews: {
    backgroundColor: "white",
    padding: 20,
  },
  awards: {
    // backgroundColor: "white",
    // padding: 20,
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginBottom: 10,
    color: "#034694",
  },
  justText: {
    marginBottom: 5,
  },
  playerNews: {
    // backgroundColor: "white",
    // padding: 20,
  },
  newsItem: {
    marginBottom: 20,
  },
  newsDate: {
    color: "grey",
    fontWeight: "500",
    fontSize: 12,
  },
  newsHeading: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
