import React from "react";
import Fade from "react-reveal/Fade";

// images
import magistersLandscape from "../../resources/images/a-team/magisters-landscape.jpg";
import coordinatorLandscape from "../../resources/images/a-team/coordinator-landscape.jpg";
import mergedRA from "../../resources/images/a-team/merged_ra.png";
import MagisterPortrait from "../../resources/images/a-team/magisters-portrait.jpg";
import CoordinatorPortrait from "../../resources/images/a-team/coordinator-portrait.jpg";
import NewRAPortrait from "../../resources/images/a-team/sandy-will.jpeg";

// bootstrap
import { Card, CardGroup } from "react-bootstrap";

export default function ATeam() {
  return (
    <div className="body">
      <div className="container">
        <div>
          <div class="row page-title">
            <div className="col">A-Team</div>
          </div>

          <CardGroup>
            <Card style={{ paddingRight: "3%" }}>
              <Fade bottom>
                <a href="#magisters-content">
                  <Card.Img
                    variant="top"
                    src={magistersLandscape}
                    alt="Magisters' Family"
                  />
                  <Card.Body>
                    <Card.Title>Magisters</Card.Title>
                  </Card.Body>
                </a>
              </Fade>
            </Card>

            <Card>
              <Fade bottom delay={100}>
                <a href="#coordinator-content">
                  <Card.Img
                    variant="top"
                    src={coordinatorLandscape}
                    alt="College Coordinator"
                  />
                  <Card.Body>
                    <Card.Title>Coordinator</Card.Title>
                  </Card.Body>
                </a>
              </Fade>
            </Card>
            <Card style={{ paddingLeft: "2%" }}>
              <Fade bottom delay={200}>
                <a href="#old-dorm-RAs-content">
                  <Card.Img variant="top" src={mergedRA} alt="Our RAs" />
                  <Card.Body>
                    <Card.Title>RAs</Card.Title>
                  </Card.Body>
                </a>
              </Fade>
            </Card>
          </CardGroup>
        </div>

        <br />
        {/* Photos of the a-team from here on down should be 750x1125 for consistency */}
        <div className="row content">
          <div className="col-md-7">
            <a className="anchor" id="magisters-content"></a>
            <h1> College Magisters </h1>
            <h2> Matt and Rebekah </h2>
            <a className="mailto" href="mailto:matthew.bennett@rice.edu">
              <h4>matthew.bennett@rice.edu</h4>
            </a>
            <p>
              We are Matthew and Rebekah Bennett, Magisters of Will Rice
              College. Will Rice College is a unique place within a unique
              university. It will be your home for the next four years and a
              central part of your life at the university.
              <br />
              <br />
              Our roles as Magisters: The most formal instruction we ever
              received for being Magisters was: “Just be there.” That means we
              live with you (or rather in a house next to your dorms), eat with
              you in the commons, root you on at events (Beer Bike!), applaud
              your accomplishments, give you advice, challenge you academically,
              play foosball with you, champion your future, and become your
              friends. We’ll be there for the good times and bad, and will
              strive to make your time here enjoyable, productive, and
              fulfilling. As Magisters, we are the heads of the college – but
              don’t let that fool you. You, the students, are the true leaders
              of the college and you will shape it as much as it shapes you. We
              see our role as being primarily advisory – helping to steer the
              college to achieve its goals and maintain its tradition of
              excellence.
              <br />
              <br />
              About us: Both of us are originally from Michigan, but have lived
              all over the country before settling in Houston in 2009 when Matt
              joined the Rice faculty. We have two children, Jacob and Marisol,
              and two cats, Sasha and Phoenix. Rebekah, who attended Emory
              University and Georgetown Law School, is a lawyer who specializes
              in labor & employment law and corporate political activities law.
              She is currently the General Counsel of the ExxonMobil Pipeline
              Company. Rebekah loves baking, movies, travel, and reading. Matt
              is an associate professor in the Department of Biosciences. He
              attended the University of Michigan and received his Ph.D. in
              physics from Georgia Tech. His research aims to develop synthetic
              microbes for medical and industrial applications. Matt, an avid
              Detroit Red Wings fan, enjoys gaming, playing cards, hiking, and
              crappy science fiction.
              <br />
              <br />
              Our foremost goal is to help you achieve your academic and social
              goals here at the university. If we can help in any way, just let
              us know!
            </p>
          </div>
          <div className="col-md-1" />
          <div className="col-md-4 portrait">
            <Fade bottom>
              <img
                src={MagisterPortrait}
                className="description-image"
                alt="Picture of Magisters"
              />
            </Fade>
          </div>
        </div>

        <br />
        <div className="row content">
          <div className="col-md-7">
            <a className="anchor" id="coordinator-content"></a>
            <h1> College Coordinator </h1>
            <h2> Dale Thomas </h2>
            <a className="mailto" href="mailto:wrc@rice.edu">
              <h4>wrc@rice.edu</h4>
            </a>
            <p>
              Hi! I’m Dale, and I am College Coordinator at Will Rice. I have
              been connected to Rice for as long as I can remember and in
              several different ways, including long ago as a Magisters’ kid and
              more recently as the mom of two Rice undergrads. Professionally,
              my background is in elementary teaching, but when I moved back to
              Houston after 11 years living outside of London, I decided I was
              ready for a change, and I’ve loved taking on a different role and
              working with older students at Will Rice.
              <br />
              <br />
              Unlike the rest of the A-Team, I don’t live in the college, so I
              head home at night to any of my four big kids who happen to be
              around, our aloof cats, and a blissfully happy rescue dog. If you
              were to peek in our windows, you might spy us watching a rom-com,
              playing online trivia, or spontaneously performing a show tune in
              our kitchen. Or we might just be doing the dishes or napping on
              the couch.
              <br />
              <br />
              Over the course of the year, I’m here to help and support you in
              whatever way you need. Whether you’re looking for a vacuum
              cleaner, directions to a professor’s office, or a registration
              form, my office is a good place to start. Probably the most
              important part of my job—and certainly the part I enjoy the
              most—is providing a place for you to sit down, see a friendly
              face, grab a piece of candy, vent about a test, parent, or
              roommate, or just talk about whatever is going on with you. I’m so
              looking forward to getting to know you!
              <br />
              <br />
            </p>
          </div>
          <div className="col-md-1" />
          <div className="col-md-4">
            <Fade bottom>
              <img
                src={CoordinatorPortrait}
                className="description-image"
                alt="Picture of College Coordinator"
              />
            </Fade>
          </div>
        </div>

        <br />
        <div className="row content">
          <div className="col-md-7">
            <a className="anchor" id="old-dorm-RAs-content"></a>
            <h1> Old Dorm RA </h1>
            <h2> Chelsea Drake </h2>
            <a className="mailto" href="mailto:cldrake@rice.edu">
              <h4>cldrake@rice.edu</h4>
            </a>
            <p>
              Hey Will Rice! I’m the Old Dorm RA and I’m so excited to be part
              of this community. My roomies are my 12 year old dog Cleo and my 2
              year old cat Lucy. My day job is Assistant Director of RISE at
              Rice, a program in SSI which supports underrepresented students in
              social sciences and humanities majors. My degrees are in human
              development and education and I love working with students, and
              especially helping you find community and connections when being a
              student starts to feel intimidating and overwhelming. It is a
              privilege to be a small part of your journeys!
              <br />
              <br />
              When I’m not at work, I love to cook, ride my bike through Buffalo
              Bayou, care for my growing plant collection and on a nice day you
              might find me outside reading a cheesy romance novel. I’m a
              Houston native and love living in town close to my family,
              especially my niece and nephew, who you might also see around the
              dorm! Cleo, Lucy and I can’t wait to chat get to know you and help
              make Will Rice home for you.
            </p>
          </div>
          <div className="col-md-1" />
          <div className="col-md-4">
            <Fade bottom>
              {/* <img src="../../resources/images/a-team/chelsea-randall.jpg" className="description-image" alt="Picture of Jeremy and Chelsea">  */}
            </Fade>
          </div>
        </div>

        <br />

        <div className="row content">
          <div className="col-md-7">
            <a id="new-dorm-RAs-content"></a>
            <h1> New Dorm RAs </h1>
            <h2> Sandy and Will </h2>
            <a className="mailto" href="mailto:Sandra.V.Parsons@rice.edu">
              <h4>sandra.v.parsons@rice.edu</h4>
            </a>
            <p>
              Sandy is on the faculty in the Department of Psychological
              Sciences and has been hanging around Will Rice as an associate for
              about 8 years. Sandy loves being an RA because she can spend even
              more time with the students over meals, musical performances,
              athletic events, and whatever else they want to do. Sandy has
              monthly study breaks called “StOp and GrOw” where we all hang out
              and take some time to reflect on what we are doing and why. Will
              is a pediatric oncologist at Texas Children’s Hospital and Baylor
              where he is the Deputy Director of Cancer and Hematology.
              <br />
              <br />
              Sandy and Will love poke bowls, bubble tea, chocolate chip
              cookies, and their two English Bulldogs. They can almost always be
              found walking the dogs in the quad after dinner and will talk
              endlessly about their dogs if you are ever at a loss about how to
              start a conversation with them.
            </p>
          </div>
          <div className="col-md-1" />
          <div className="col-md-4">
            <Fade bottom>
              <img
                src={NewRAPortrait}
                className="description-image"
                alt="Picture of Sandy and Will"
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
