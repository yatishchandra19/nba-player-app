import { ScrollView, Text } from "react-native";
import { StyleSheet, SafeAreaView, View } from "react-native";

export default function Bio() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[styles.mainheading]}>PLAYER BIO</Text>

        <View style={styles.section}>
          <Text style={styles.justText}>
            Wardell Stephen "Steph" Curry II was born in Akron, Ohio, to Sonya
            and Dell Curry. His mother was a volleyball player at Virginia Tech
            and his father played in the NBA for the Jazz, Cavaliers, Hornets,
            Bucks and Raptors. As children, Stephen and his brother Seth -- who
            also plays in the NBA -- would often attend games and shoot with the
            Hornets (where Dell spent most of his career) during warmups.
            Following his father's retirement, Stephen and his family settled in
            North Carolina. There, Stephen attended Charlotte Christian School,
            where he was named all-conference and all-state and led his team to
            three conference titles and three state playoff appearances. Since
            2014, Curry has hosted the SC30 Select Camp, inviting 20 top high
            school prospects for a four-day, hands-on training session. He and
            his wife set up the Eat. Learn. Play Foundation, a family-founded
            charity "committed to unlocking the amazing potential of every child
            by fighting to end childhood hunger and ensuring children have
            access to nutritious food, establishing that students have access to
            a quality education, and the resources to succeed, and providing
            opportunities and safe places for all children to play and be
            active." Curry has been a champion of the United Nations
            Foundation's Nothing But Nets campaign since his college days at
            Davidson; since 2014, he has donated three insecticide-treated
            mosquito nets for every three-pointer he makes to help combat
            malaria. In July of 2013, Curry traveled to Tanzania with a group
            from Nothing But Nets and helped distribute 38,000 bed nets to
            families at the Nyarugusu Refugee Camp. He also met President Barack
            Obama after giving a speech at the White House in support of the
            President's Malaria initiative in February 2015. Learn more about
            Curry by following him on Twitter (@StephenCurry30) and Instagram
            (@stephencurry30). As the son of NBA sharpshooter Dell Curry,
            Stephen was a known name before he attended Davidson. The 6-foot-3
            guard started 33 games as a freshman and was a scoring sensation. He
            led the team with 21.5 points and hit 40.8 percent of his
            three-point attempts. The Wildcats made the NCAA Tournament and
            Curry put a scare into Maryland by scoring 30 points. Curry's
            sophomore campaign made him a national figure. He led the SoCon in
            scoring for the second straight season with 25.9 points per contest,
            and the team did not lose in conference play. Curry brought Davidson
            back in its first-round game against Gonzaga with 30 second-half
            points and totaled 40 in the game. He scored 30 and 33 in the two
            games against Georgetown and Wisconsin before the exciting run ended
            against Kansas. The guard led the nation in scoring as a junior with
            28.6 points and added 5.6 assists and 2.5 steals. He scored 25
            points in seven straight games and scored 44 points twice. The
            Wildcats were defeated by College of Charleston in the SoCon
            tournament. Curry was named a consensus First Team All-American and
            declared for the 2009 NBA Draft with one season of eligibility
            remaining. He was chosen with the seventh overall pick by the Golden
            State Warriors.
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
