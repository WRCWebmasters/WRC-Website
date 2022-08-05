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
            <h2> Sheren Brunson </h2>
            <a className="mailto" href="mailto:wrc@rice.edu">
              <h4>wrc@rice.edu</h4>
            </a>
            <p>
              Hello Phoenixes! I’m Sheren, your friendly, super chatty College
              Coordinator. I’m really looking forward to meeting and getting to
              know you all during your years at Will Rice. I hand out room keys,
              so we'll meet your first day! The rest of the time you can find me
              in my office by the commons, most likely surrounded by a mountain
              of packages with half-eaten lunch nearby. In addition to receiving
              and sorting snail mail and packages, I’m here to serve as a
              resource and help with anything you may need. If you don’t need
              anything and just want to talk, I’m here for that too! I have
              candy and my door is always open…..well Monday through Friday from
              9-5 that is! Unlike the rest of the Core-Team that live on campus,
              I go home at night to my little old lady dog, Ms. Bootsy, and my
              plant babies.
            </p>
            <p>
              Other stuff about me: I’m originally from South Carolina, where I
              earned a B.A. in Anthropology from University of SC (GO
              GAMECOCKS!!), I’m a Returned Peace Corp Volunteer (Huedin, Romania
              2000-2002), and I got a M.A. in International Affairs from The New
              School in NYC, where I lived for 12 years before moving back to
              the south and landing in Houston. I love taking care of my plants,
              hanging out with Ms. Bootsy, listening to the radio and keeping up
              with current events. My hope for the coming year is that you make
              great friends and great memories, meet great professors and take
              great classes, and really embrace the Rice University Culture of
              Care. With that said, I ask — How can I help? Come Through!!!
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
