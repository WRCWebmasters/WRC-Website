import React, { useEffect } from "react";
import { Fade } from "react-reveal";

export default function BeerBike() {
  return (
    <div className="body">
      <div className="container">
        <div className="row page-title">
          <div className="col">Beer Bike</div>
        </div>
        <div className="content">
          <h1> WRWS!! </h1>
          {/* <iframe align="right" width="362" height="186" src="https://w2.countingdownto.com/2674685" frameborder="0"></iframe>
          <p>
            We're all looking forward to this year's Beer Bike! The bike team is
            hard at work and is looking forward to a traditional bike race this
            year (no more Beer Runs please!). Be sure to thank them for all the
            hard work they put in to make our Beer Bike day awesome! Beer Bike
            2020 is on April 4.
            <a
              target="blank"
              href="https://riceprogramcouncilsite.wordpress.com/beer-bike-2019-results/"
            >
              Link{" "}
            </a>
            to 2019 results.
            <br /> <br />- WRWS
          </p>
          */}

          <h3>Will Rice Bike Team</h3>
          <Fade bottom>
            <img
              src={require("../../resources/images/beer-bike/bike.jpg").default}
              width="40%"
              alt="biker"
              align="right"
              style={{ marginLeft: "2%" }}
            />
          </Fade>
          <p>
            When you think about Will Rice, a million great traditions come to
            mind: Keg in the Quad, lunch time in the commons, Long Hall,
            winning, Activities Council, etc. When you think about Will Rice and
            Beer Bike, there is only one thing to say: SWEEP. Go ahead and say
            it FIVE times. To be a part of the Will Rice Bike Team is special.
            It sets your heart on fire. When you're basking in the glow of the
            Phoenix, biking into the freezing winds of winter becomes nothing.
            Tired becomes nothing. Impossibly fast becomes nothing. And on the
            weekend of Beer Bike, when you're standing before all of your
            friends and your college, your family, in the rust and gold jersey
            you proudly sacrificed your body for, the spirit of generations of
            Will Ricers burns with yours. If the day is just right and you make
            the dream of a Sweep a reality, for a moment you will live like a
            god. You will never be more proud. Clearly, we love this. Other
            colleges don't understand what it means to love something the way we
            love the Myth, Power, and Value of the Phoenix and Will Rice. We
            hold just about every cycling record to date and there is no end in
            sight. Will Rice is the most winning college in the history of Beer
            Bike and we will always give ourselves to victory. Alumni, Women,
            and Men, we are the team that makes it happen. If you have any
            interest in knowing the glory of being part of the bike team, please
            contact any one of the team captains. We all started out with no
            biking experience and we truly enjoy the thrill of peaceful, casual
            rides too. Sincerely, riding is an experience we would love to share
            with anyone who is even half-interested.
          </p>
          <p>-Author: Eddie Reyes, WRC'12, Alumni Biker</p>

          <br />
          <h3>Will Rice Chug Team</h3>
          <Fade bottom>
            <img
              src={require("../../resources/images/beer-bike/chug.jpg").default}
              width="40%"
              alt="chugger"
              align="left"
              style={{ marginRight: "2%" }}
            />
          </Fade>
          <p>
            Does the whole concept of Beer Bike sound like an amazing experience
            that you just know that you have to participate, but biking maybe
            isn't your thing? Do you love to stay hydrated, or at the very least
            get there as quickly as possible? Then the Will Rice Chug Team is
            for you! The Chug Team is the another piece of the glorious Beer
            Bike trifecta, and no less important than the Bikers or Pit Crew.
            The Chuggers start off each race and chug in between each biker, and
            getting a fast chug can be critical in getting Will Rice a good spot
            around the track and attaining another glorious sweep. Chugging is
            simple, perfecting it is hard. However, some passionate (and
            probably bored) Rice students have designed simple but effective
            "Chug Cans" with a wide mouth (for a smooth pour) and an air hole
            that ensures you are getting maximum water per second delivered
            straight to your gullet. The act of chugging is elegantly simple; it
            has one rule and one rule only: Don't spill. Each Chugger has an
            allowance of one jigger (1.5 ounces) of precious water that is
            allowed to grace their clothes or the ground around them before
            their chug is ruled a "Wet Chug" and their team is penalized five
            seconds. Beer Bike Sweeps hang in the balance between those five
            second violations, and nobody understands this better than the
            Chuggers. In order to accomplish this, a Chugger has to be quick,
            precise, calm, passionate, and above all: thirsty. So while our
            fleet Bikers outpace our foes on the track, our stoic Chuggers suck
            for glory. If reading this awakens the spirit of the phoenix within
            you and all you can think is "When can I start?", look no further
            than the Will Rice Commons. After lunch announcements it isn't
            uncommon to hear the bellowing "CHUUUUUUUUG PRAAAAACTICE!" from
            captains Kevin and Alicia, signaling aspiring Chuggers and veterans
            alike that their time has come. Even if you are nervous, I
            wholeheartedly encourage you to come try it once or twice and see
            how you like it. We all started out with no chugging experience and
            we also enjoy the thrill of peaceful, casual chugs too. Chugging is
            an experience that we would all jump at the chance at being able to
            share with anyone who is even half-interested
          </p>
          <p>-Author: Marshall Wilson, WRC '16, Chugger</p>

          <br />

          <h3>Will Rice Pit Crew</h3>
          <Fade bottom>
            <img
              src={
                require("../../resources/images/beer-bike/pitcrew.png").default
              }
              width="40%"
              alt="pit crew"
              align="right"
              style={{ marginLeft: "2%" }}
            />
          </Fade>
          <p>
            The excitement of being on the track on Beer Bike cannot be matched.
            Right there alongside the Chug and Bike Teams stands the Pit Crew.
            Often overlooked due to its breathtaking efficiency, the Pit Crew is
            very good at two things: slowing bikes down quickly, and speeding
            bikes up quickly. The faster the pit crew (along with the Chug Team)
            works, the faster the next Biker can be on the track tearing up the
            competition. On the "slowing bikes down" side of things, the Pit
            employs a Runner and two Catchers. The Runner, who stands at the
            back edge of the pit waving their arms, jumping up and down, and
            generally making sure the weary bikers make it into the right lane.
            Once the Biker spots them, the Runner runs (surprise!) down the pit
            and in between the Catchers. The Catchers' job is to stop (and
            preferably catch) the biker so as to avoid a penalty. Catchers work
            in pairs and are preferably good at stopping things without breaking
            them. On flipside of the Pit Crew, we have those responsible for
            "speeding bikes up". The Pit uses a Flagger and two Throwers for
            this task. The flagger is Chug Team liason, and does not stand in
            the Pit, but accompanies each Chugger to the top of the table tower.
            They count the Chugger down as the Biker comes into the Pit, and
            wave their flag (read: towel) a carefully calculated amount of time
            before the Chugger finishes. This signals the Throwers to begin
            their throw. An encyclopedic knowledge of average chug times is a
            must for the Flagger. The Throwers have the task of ejecting the
            Biker out of the Pit and into the race as fast as possible. They
            coordinate with the Chuggers and Flagger so that, beginning the
            throw when the flag goes up, they throw the Biker across the line
            just after the Chugger finishes chugging. Being strong-as-hell is a
            plus. The Pit Crew is the grease in the gears of the Will Rice Beer
            Bike Team. With sure-handed Catchers, swift Runners, attentive
            Flaggers, and burly Throwers, the Pit Crew needs all types to make
            Will Rice great.
          </p>
          <p>-Author: Kevin McDonough, WRC '14, Thrower</p>
        </div>
      </div>
    </div>
  );
}