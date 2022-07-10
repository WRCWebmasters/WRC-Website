import React, { useEffect } from "react";
import { Fade } from "react-reveal";

export default function WillRice() {
  return (
    <div className="body">
      <div className="container">
        <div className="row page-title">
          <div className="col">Who We Are</div>
        </div>
        <h1>
          About Will Rice College:
          <br />
          The College of the Commons
        </h1>
        <Fade style={{ justifyContent: "flex-start" }} bottom>
          <img
            className="col-5"
            src={
              require("../../resources/images/history/willricequad.jpg").default
            }
            width="40%"
            align="right"
            alt="Will Rice quad"
            style={{ marginLeft: "2%" }}
          />
        </Fade>
        <div>
          <p>
            If you take a little wander through South Campus, you’ll come across
            a college that shines like the pyre of a thousand phoenixes,
            illuminated by myth, power, and value. Congratulations, you are now
            a part of the rust and gold glory that is Will Rice College, the
            second college founded at Rice University! You may first notice that
            we have a dazzling outdoor quad flanked on three sides by our
            spectacular New Dorm, our stunningly historic Old Dorm, and the
            coziest commons on campus. It is inside, though, that you will truly
            get to experience the welcoming and warm spirit of your new Will
            Rice family.
          </p>
          <p>
            Originally built in 1912, Old Dorm (known then as South Hall) was
            the first residential building on campus. Will Rice College was
            founded in 1957 and named after William Marsh Rice Junior, the
            nephew of Rice’s founder. Beginning as a college of about 200
            members, Will Rice was given the motto “The College of Individuals”
            by James Street Fulton. In 1977, Will Rice became a co-ed college
            and adopted the name of “The College of Gods and Goddesses” instead.
            It was during this time that Will Rice developed its victorious
            culture. From 1960-1968, Will Rice dominated Songfest, the
            university’s prestigious annual chorale competition, to the point
            that the university decided to cancel the competition due to Will
            Rice’s endless winning streak. Since then, Will Rice has claimed
            victory in freshman flag football, the Presidents’ Cup Tournament,
            and most famously, Beer Bike!
          </p>
          <p>
            Started in 1957, Beer Bike is an annual competitive bike race hosted
            by Rice in the spring. Starting from the Monday of Beer Bike Week,
            Will Ricers passionately fill water balloons, plan jacks (pranks)
            against other colleges, and practice chugging and biking until the
            day of the race. Will Rice has taken pride in winning countless Beer
            Bike races and being the only college to sweep the alumni, women’s,
            and men’s races not just once, but 5 times!
          </p>
          <p>
            However, Will Rice isn’t all about competition. While winning is
            fun, Will Rice has always been about doing things, whether racing or
            studying, together. As one of the oldest colleges, our culture is
            rooted in tradition, with a phoenix spirit that is open to rebirth
            and change. Over time, Will Rice has introduced new traditions to
            its culture such as Whale Day, KITQs, and Phinest Phoenix. Along
            with its formal traditions, Will Rice has also developed more
            laid-back rituals such as late night studying in the commons,
            playing Smash in the game room, watching cheesy reality TV with the
            RAs, and having daily lunch announcements.
          </p>
          <p>
            Will Ricers take initiative. Our student government, affectionately
            nicknamed EC (Executive Council), meets weekly in the Magister’s
            House to discuss what’s going on at Will Rice. Everyone, regardless
            of elected position, is encouraged to attend to hear the latest on
            Will Rice, make a proposal for a grilled cheese party, or even just
            come for the friends! Everyone is encouraged to get involved, and
            there truly is something for everyone. Each matriculating class of
            Will Ricers shapes our college’s trajectory for the better, and we
            cannot wait to see what new values, traditions, and perspectives
            you’ll bring to the table. Like the mythical phoenix that serves as
            the symbol of the college, Will Rice rises above the others, burning
            with a bright fire and passion. We take pride in our history and
            work every day as a college to grow together, becoming the best
            versions of ourselves with each new reincarnation.
          </p>
        </div>
      </div>
    </div>
  );
}
