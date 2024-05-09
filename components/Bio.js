import { ScrollView, Text } from "react-native";
import { StyleSheet, SafeAreaView, View } from "react-native";

export default function Bio() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[styles.mainheading]}>PLAYER BIO</Text>

        <View style={styles.section}>
          <Text style={styles.heading}>PROFESSIONAL CAREER</Text>

          <Text style={styles.justText}>
            Selected by the Golden State Warriors as an early entry candidate in
            the first round (seventh overall) of the 2009 NBA Draft ...
            Four-time NBA Champion (2015, 2017, 2018, 2022) …Two-time NBA Most
            Valuable Player (2014-15, 2015-16) … One-time NBA Finals MVP
            (2022)...First-Ever Magic Johnson Western Conference Finals MVP
            (2022)…Nine-time All-Star (2014-2019, 2021, 2022, 2023) - 2022 Kia
            NBA All-Star Game Kobe Bryant Most Valuable Player … Named to
            All-NBA Teams nine times: First Team four times (2014-15, 2015-16,
            2018-19, 2020-21), Second Team four times (2013-14, 2016-17,
            2021-22, 2022-23), Third Team once (2017-18) …Led the NBA in
            3-pointers made in seven seasons (2012-13 - 2016-17, 2020-21,
            2021-22)... Made an NBA-record 402 three-pointers in 2015-16
            season...Led the league in free throw percentage four times (.934 in
            2010-11; .914 in 2014-15; .907 in 2015-16; .921 in 2017-18)...Led
            the NBA in scoring in both 2015-16 (30.1 PPG) and 2020-21 (32.0
            PPG)...Two-time 3-Point Contest winner (2015 and 2021)...Entering
            the 2023-24 season, ranks first (3,390) on NBA’s all-time 3-point
            field goals made list and first on NBA’s all-time free throw
            percentage list (.909 FT%).
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>BEFORE NBA</Text>

          <Text style={styles.justText}>
            Appeared in 104 games over three seasons at Davidson, averaging 25.3
            points, 4.5 rebounds, 3.7 assists and 32.6 minutes, shooting 46.7
            percent from the field, 41.2 percent from three-point range and 87.6
            percent from the free throw line … Finished his collegiate career
            ranked 25th all-time on the NCAA Division I scoring list with 2,635
            points ... Completed his collegiate career ranked fourth on NCAA’s
            all-time list for career three-pointers with 414 … NCAA
            single-season record holder with 162 three-pointers in 2007-08 …
            Left school as Davidson’s and Southern Conference’s all-time leader
            in scoring … Named Consensus First-Team All-American as a junior and
            Consensus Second-Team All-American as a sophomore … Named John R.
            Wooden Award All-American as a sophomore and junior … Named Southern
            Conference Player of the Year as a sophomore and junior … As a
            junior in 2008-09, led nation in scoring with 28.6 points to go
            along with 5.6 assists, 4.4 rebounds and 33.7 minutes in 34 games
            (all starts), becoming the first Davidson player to lead the nation
            in scoring … As a sophomore in 2007-08, appeared in 36 games (all
            starts), averaging 25.9 points (4th in NCAA), 4.6 rebounds and 2.9
            assists in 33.1 minutes... Led his team to the NCAA Tournament for
            the second consecutive season and, as the No. 10 seed, on a run to
            the Elite Eight … Named NCAA Tournament Midwest Regional Most
            Outstanding Player and named to All-Region team after helping
            Davidson advance to the Elite Eight as a sophomore … As a freshman
            in 2006-07, appeared in 34 games (33 starts), averaging 21.5 points,
            4.6 rebounds and 2.8 assists in 30.9 minutes, leading the team to
            the NCAA Tournament... Ranked ninth nationally in scoring and second
            among freshmen behind Kevin Durant of Texas.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>PERSONAL LIFE</Text>

          <Text style={styles.justText}>
            He and his wife, Ayesha, have two daughters, Riley and Ryan, and a
            son, Canon... Parents are Dell and Sonya Curry... Has two siblings,
            younger brother Seth and younger sister Sydel... Father, Dell, was a
            star at Virginia Tech and went on to play 16 seasons in the NBA for
            five different teams, including a 10-year stint with the Charlotte
            Hornets... Dell is currently a broadcaster for the Charlotte
            Hornets... Mother, Sonya, was a standout on the volleyball team at
            Virginia Tech... Seth, played much of his rookie season in 2013-14
            with the Santa Cruz Warriors and is currently a member of the
            Brooklyn Nets... Sydel played volleyball at Elon University
            (2015-17).
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },

  mainheading: {
    fontSize: 12,
    fontWeight: "bold",
    padding: 15,
    color: "white",
    backgroundColor: "#051c2d",
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
    // marginBottom: 5,
    lineHeight: 30,

    fontSize: 16,
  },
  section: {
    marginTop: 20,
  },
});
