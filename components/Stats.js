import { View, Text, ScrollView, StyleSheet } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

//Traditional Splits
const tableHead1 = ["BY YEAR"];

const gameDates = [
  "2023-24",
  "2022-23",
  "2021-22",
  "2020-21",
  "2019-20",
  "2018-19",
  "2017-18",
  "2016-17",
  "2015-16",
  "2014-15",
  "2013-14",
  "2012-13",
  "2011-12",
  "2010-11",
  "2009-10",
];

const tableHead2 = [
  "TEAM",
  "GP",
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
  "TOV",
  "STL",
  "BLK",
  "PF",
  "FP",
  "DD2",
  "TD3",
  "+/-",
];

const tableBodyData = [
  [
    "GSW",
    47,
    33.4,
    28.1,
    9.1,
    19.7,
    46.4,
    5.0,
    11.8,
    42.1,
    4.8,
    5.2,
    92.7,
    0.5,
    3.9,
    4.4,
    4.8,
    3.0,
    0.8,
    0.4,
    1.8,
    41.1,
    2,
    0,
    0.6,
  ],
  [
    "GSW",
    56,
    34.7,
    29.4,
    10.0,
    20.2,
    49.3,
    4.9,
    11.4,
    42.7,
    4.6,
    5.0,
    91.5,
    0.7,
    5.4,
    6.1,
    6.3,
    3.2,
    0.9,
    0.4,
    2.1,
    46.8,
    12,
    1,
    4.8,
  ],
  [
    "GSW",
    64,
    34.5,
    25.5,
    8.4,
    19.1,
    43.7,
    4.5,
    11.7,
    38.0,
    4.3,
    4.7,
    92.3,
    0.5,
    4.7,
    5.2,
    6.3,
    3.2,
    1.3,
    0.4,
    2.0,
    43.1,
    12,
    2,
    8.0,
  ],
  [
    "GSW",
    63,
    34.2,
    32.0,
    10.4,
    21.7,
    48.2,
    5.3,
    12.7,
    42.1,
    5.7,
    6.3,
    91.6,
    0.5,
    5.0,
    5.5,
    5.8,
    3.4,
    1.2,
    0.1,
    1.9,
    47.9,
    8,
    0,
    3.9,
  ],
  [
    "GSW",
    5,
    27.9,
    20.8,
    6.6,
    16.4,
    40.2,
    2.4,
    9.8,
    24.5,
    5.2,
    5.2,
    100,
    0.8,
    4.4,
    5.2,
    6.6,
    3.2,
    1.0,
    0.4,
    2.2,
    37.9,
    1,
    0,
    -9.0,
  ],
  [
    "GSW",
    69,
    33.8,
    27.3,
    9.2,
    19.4,
    47.2,
    5.1,
    11.7,
    43.7,
    3.8,
    4.2,
    91.6,
    0.7,
    4.7,
    5.3,
    5.2,
    2.8,
    1.3,
    0.4,
    2.4,
    43.8,
    3,
    0,
    10.0,
  ],
  [
    "GSW",
    51,
    32.0,
    26.4,
    8.4,
    16.9,
    49.5,
    4.2,
    9.8,
    42.3,
    5.5,
    5.9,
    92.1,
    0.7,
    4.4,
    5.1,
    6.1,
    3.0,
    1.6,
    0.2,
    2.2,
    43.8,
    5,
    0,
    9.5,
  ],
  [
    "GSW",
    79,
    33.4,
    25.3,
    8.5,
    18.3,
    46.8,
    4.1,
    10.0,
    41.1,
    4.1,
    4.6,
    89.8,
    0.8,
    3.7,
    4.5,
    6.6,
    3.0,
    1.8,
    0.2,
    2.3,
    43.6,
    9,
    0,
    12.8,
  ],
  [
    "GSW",
    79,
    34.2,
    30.1,
    10.2,
    20.2,
    50.4,
    5.1,
    11.2,
    45.4,
    4.6,
    5.1,
    90.8,
    0.9,
    4.6,
    5.4,
    6.7,
    3.3,
    2.1,
    0.2,
    2.0,
    50.3,
    15,
    2,
    12.9,
  ],
  [
    "GSW",
    80,
    32.7,
    23.8,
    8.2,
    16.8,
    48.7,
    3.6,
    8.1,
    44.3,
    3.9,
    4.2,
    91.4,
    0.7,
    3.6,
    4.3,
    7.7,
    3.1,
    2.0,
    0.2,
    2.0,
    44.1,
    23,
    0,
    11.5,
  ],
  [
    "GSW",
    78,
    36.5,
    24.0,
    8.4,
    17.7,
    47.1,
    3.3,
    7.9,
    42.4,
    3.9,
    4.5,
    88.5,
    0.6,
    3.7,
    4.3,
    8.5,
    3.8,
    1.6,
    0.2,
    2.5,
    43.7,
    28,
    4,
    7.4,
  ],
  [
    "GSW",
    78,
    38.2,
    22.9,
    8.0,
    17.8,
    45.1,
    3.5,
    7.7,
    45.3,
    3.4,
    3.7,
    90.0,
    0.8,
    3.3,
    4.0,
    6.9,
    3.1,
    1.6,
    0.2,
    2.5,
    40.3,
    15,
    0,
    1.7,
  ],
  [
    "GSW",
    26,
    28.1,
    14.7,
    5.6,
    11.4,
    49.0,
    2.1,
    4.7,
    45.5,
    1.5,
    1.8,
    80.9,
    0.6,
    2.8,
    3.4,
    5.3,
    2.5,
    1.5,
    0.3,
    2.4,
    29.7,
    3,
    0,
    3.0,
  ],
  [
    "GSW",
    74,
    33.6,
    18.6,
    6.8,
    14.2,
    48.0,
    2.0,
    4.6,
    44.2,
    2.9,
    3.1,
    93.4,
    0.7,
    3.2,
    3.9,
    5.8,
    3.1,
    1.5,
    0.3,
    3.1,
    34.1,
    5,
    0,
    -0.2,
  ],
  [
    "GSW",
    80,
    36.2,
    17.5,
    6.6,
    14.3,
    46.2,
    2.1,
    4.8,
    43.7,
    2.2,
    2.5,
    88.5,
    0.6,
    3.9,
    4.5,
    5.9,
    3.0,
    1.9,
    0.2,
    3.2,
    35.1,
    12,
    1,
    -2.3,
  ],
];

//ADVANCED SPLITS
const table2Head1 = ["BY YEAR"];

const gameDates2 = [
  "2023-24",
  "2022-23",
  "2021-22",
  "2020-21",
  "2019-20",
  "2018-19",
  "2017-18",
  "2016-17",
  "2015-16",
  "2014-15",
  "2013-14",
  "2012-13",
  "2011-12",
  "2010-11",
  "2009-10",
];

const table2Head2 = [
  "TEAM",
  "GP",
  "MIN",
  "OFFRTG",
  "DEFRTG",
  "NETRTG",
  "AST%",
  "AST/TO",
  "AST RATIO",
  "OREB%",
  "DREB%",
  "REB%",
  "TO RATIO",
  "EFG%",
  "TS%",
  "USG%",
  "PACE",
  "PIE",
];

const table2BodyData = [
  [
    47, 33.4, 118.0, 118.1, -0.1, 22.7, 1.59, 16.4, 1.4, 11.3, 6.4, 10.3, 59.0,
    63.9, 30.4, 101.87, 14.5,
  ],
  [
    56, 34.7, 118.1, 112.4, 5.8, 27.4, 1.97, 19.9, 2.0, 14.7, 8.5, 10.1, 61.4,
    65.6, 29.7, 104.68, 16.6,
  ],
  [
    64, 34.5, 114.1, 103.4, 10.7, 28.6, 1.96, 20.8, 1.5, 12.6, 7.3, 10.6, 55.4,
    60.1, 29.3, 100.83, 15.5,
  ],
  [
    63, 34.2, 114.2, 109.6, 4.6, 28.3, 1.7, 17.4, 1.3, 13.5, 7.7, 10.2, 60.5,
    65.5, 33.1, 105.16, 18.1,
  ],
  [
    5, 27.9, 108.5, 123.7, -15.3, 35.5, 2.06, 23.2, 2.3, 16.2, 8.4, 11.3, 47.6,
    55.7, 28.6, 109.39, 13.3,
  ],
  [
    69, 33.8, 119.5, 105.8, 13.7, 22.5, 1.88, 18.0, 2.0, 12.2, 7.5, 9.6, 60.4,
    64.1, 29.2, 104.18, 15.2,
  ],
  [
    51, 32.0, 120.6, 107.7, 13.0, 27.2, 2.03, 21.4, 2.4, 12.4, 7.9, 10.6, 61.8,
    67.5, 29.0, 104.92, 16.5,
  ],
  [
    79, 33.4, 120.1, 102.7, 17.4, 28.7, 2.19, 22.4, 2.4, 10.1, 6.5, 10.2, 58.0,
    62.4, 28.6, 103.28, 15.1,
  ],
  [
    79, 34.2, 117.5, 99.8, 17.7, 31.5, 2.01, 20.7, 2.6, 11.7, 7.6, 10.3, 63.0,
    66.9, 31.4, 102.75, 19.7,
  ],
  [
    80, 32.7, 114.7, 98.5, 16.3, 35.8, 2.49, 26.4, 2.2, 10.0, 6.3, 10.6, 59.4,
    63.8, 27.7, 101.47, 17.8,
  ],
  [
    78, 36.5, 110.6, 101.0, 9.6, 37.2, 2.27, 26.9, 1.6, 9.7, 5.8, 11.9, 56.6,
    61.0, 27.5, 98.15, 16.4,
  ],
  [
    78, 38.2, 107.0, 104.7, 2.3, 29.8, 2.25, 23.6, 2.0, 8.3, 5.2, 10.5, 54.9,
    58.9, 25.7, 96.55, 13.8,
  ],
  [
    26, 28.1, 107.5, 102.1, 5.4, 29.5, 2.12, 26.7, 2.1, 9.9, 6.1, 12.6, 58.3,
    60.5, 23.0, 96.22, 13.4,
  ],
  [
    74, 33.6, 108.5, 108.4, 0.0, 26.8, 1.91, 24.1, 2.1, 9.7, 5.8, 12.6, 55.1,
    59.5, 23.7, 97.74, 12.1,
  ],
  [
    80, 36.2, 107.5, 110.2, -2.7, 24.1, 1.94, 24.3, 1.7, 10.6, 6.1, 12.5, 53.5,
    56.8, 21.5, 102.66, 10.7,
  ],
];

export default function Stats() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.splitsItem}>
          <View style={{}}>
            <Text style={styles.heading}>TRADITIONAL SPLITS</Text>
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
                    70, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55,
                    55, 55, 55, 55, 55, 55, 55, 55, 55, 55,
                  ]}
                />
                <Rows
                  data={tableBodyData}
                  textStyle={styles.text}
                  widthArr={[
                    70, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55,
                    55, 55, 55, 55, 55, 55, 55, 55, 55, 55,
                  ]}
                />
              </Table>
            </ScrollView>
          </View>
        </View>
        <View style={styles.splitsItem}>
          <View style={{}}>
            <Text style={styles.heading}>ADVANCED SPLITS</Text>
          </View>
          <View style={styles.mainTableView}>
            <View>
              <Table>
                <Cell
                  data={table2Head1}
                  style={styles.head}
                  textStyle={{
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                />
                <Col data={gameDates2} textStyle={styles.text} />
              </Table>
            </View>
            <ScrollView horizontal={true}>
              <Table>
                <Row
                  data={table2Head2}
                  style={styles.head}
                  textStyle={{ fontWeight: "bold", fontSize: 12 }}
                  widthArr={[
                    70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70,
                    70, 70,
                  ]}
                />
                <Rows
                  data={table2BodyData}
                  textStyle={styles.text}
                  widthArr={[
                    70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70,
                    70, 70,
                  ]}
                />
              </Table>
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
  },
  splitsItem: {
    marginBottom: 60,
  },
  mainTableView: {
    flexDirection: "row",

    // padding: 20,
  },
  tableView: {
    width: 200,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "brown",
  },

  head: {
    height: 45,
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

    width: 90,
    // alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    fontSize: 14,
    borderBottomColor: "#ebe9e7",
  },

  heading: {
    fontSize: 12,
    fontWeight: "bold",
    padding: 15,
    color: "white",
    backgroundColor: "#051c2d",
  },
});
