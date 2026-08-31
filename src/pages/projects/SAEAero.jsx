import './SAEAero.css'
import teamPhoto from '../../assets/projects/sae-aero/IMG_1099.jpg'
import planePhoto from '../../assets/projects/sae-aero/IMG_4658.jpg'
import navigationPhoto from '../../assets/projects/sae-aero/BU04 + OpenMV.png'
import payloadEvolution from '../../assets/projects/sae-aero/Payload Evolution.png'
import scoringChart from '../../assets/projects/sae-aero/Scoring Chart.png'
import flightVideo1 from '../../assets/projects/sae-aero/IMG_0719.mp4'
import flightVideo2 from '../../assets/projects/sae-aero/IMG_0720.mp4'

function SAEAero() {
  return (
    <div className="project-page">
      <div className="project-header">
        <h1>SAE Aero Design Competition</h1>
        <p className="project-subtitle">Advanced Class — Fort Worth, Texas 2026</p>
      </div>

      <img src={teamPhoto} alt="SAE Aero Design team at competition" className="project-hero-img" />

      <section className="project-section">
        <h2>Background</h2>
        <p>
          SAE Aero West is a yearly competition which was held in Fort Worth, Texas this year.
          This collegiate competition features teams from countries across the globe like China,
          India, and Mexico. The competition features three classes; my team competed in the
          advanced competition. The advanced competition is focused on designing an autonomous
          VTOL plane to complete a payload pickup and drop off mission. This was our school's
          first time competing in the advanced class competition but we weren't there to
          participate, we were there to win.
        </p>
        <p>
          In this design, build, fly competition you are scored in 3 sections: a 30 page design
          review where we discuss our design methodology, a 15 minute flight demonstration
          readiness review presentation where we demonstrate why we are prepared to fly on
          competition day, and competition scoring.
        </p>
        <img src={scoringChart} alt="Competition scoring multipliers" className="project-img-medium" />
      </section>

      <section className="project-section">
        <h2>Our Mission</h2>
        <p>
          Create an autonomous VTOL plane that carries, delivers, and retrieves a payload. We
          defined our mission to comprise six stages: horizontal takeoff, transition to vertical
          flight, payload delivery, payload capture, horizontal landing. While this is our mission
          plan, points are only scored upon takeoff, payload drop off and pick up, and landing —
          with the majority of points scored with the payload operations.
        </p>
        <p>
          Payload pickup is scored especially strongly because a payload has to be dropped off in
          a previous flight to be picked up. The entire payload + plane could weigh up to 3.5 lbs
          and your points were multiplied based on how much your payload weighed. So, you were
          incentivised to optimise your plane weight to allow your payload to weigh as much as
          possible.
        </p>
      </section>

      <section className="project-section">
        <h2>Payload Design</h2>
        <p>
          My role on this project was to lead the payload team. We decided to design our payload
          to be an omni wheel kiwi car. This design would allow the dropped off payload to move
          out of the way while the payload getting picked up could take its place automatically.
          While we could have had the plane move between the payloads, this design minimizes
          the electronics needed in the plane and therefore saves plane weight. The kiwi car
          setup allows for precise movement which makes it easier for us to position correctly
          and align our capture mechanism.
        </p>

        <img src={planePhoto} alt="Team with the VTOL plane and payload" />

        <p>
          The plane was able to land in a relatively similar position every time on delivery. When
          the plane landed, our payload would lower and drive to a preprogrammed position away
          from the plane. Each different payload would have its own holding zone. Once the area
          was clear, the payload on the landing zone would make its way and attach itself to the
          plane.
        </p>
      </section>

      <section className="project-section">
        <h2>Navigation System</h2>
        <p>
          To locate the plane we used a combination of a bluetooth ultrawideband module — which
          works like an AirTag — and machine vision with AprilTags. The UWB module gives the
          payload a general direction of the plane but is not accurate at close range, and was
          used to get under the plane. We then transitioned to using the machine vision camera
          which would give us a precise location.
        </p>
        <img src={navigationPhoto} alt="UWB module and machine vision camera with AprilTag" />
      </section>

      <section className="project-section">
        <h2>System Evolution</h2>
        <p>
          One of the things that I am proud of is the system design. Our system was not built in
          one day but developed over the course of the project with upgrades every version. In
          V0, our goal was to create a proof of concept and trial the movement of our car. All we
          had here was an Arduino Uno wired to 3 omni motors. We continued by adding slowly,
          asking questions and solving problems. How do we talk to the plane? We are running out
          of GPIO ports, what board can we switch to? This process taught me to iterate slowly
          and test before integrating something new.
        </p>
        <img src={payloadEvolution} alt="Payload evolution from V0 hardware prototype to V2 final design" />
      </section>

      <section className="project-section">
        <h2>Flight Videos</h2>
        <div className="project-video-grid">
          <video controls>
            <source src={flightVideo1} type="video/mp4" />
          </video>
          <video controls>
            <source src={flightVideo2} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="project-section">
        <h2>Competition Results</h2>
        <p>
          While our payload functioned incredibly well, our competition did not go as planned. Of
          22 teams, we placed 8th in the report and 5th in the readiness review, but we did not
          score points at competition. Due to thunderstorms, much of competition was spent
          sheltering from the storm instead of getting flight attempts in. We were only able to
          get two flight attempts, neither of which were able to score points — due to us going
          out of bounds on one attempt and being unable to get GPS signal to our plane in
          another. Tallied together, our overall score was 9th place.
        </p>
      </section>

      <section className="project-section">
        <h2>Lessons Learned</h2>
        <p>
          Even though this was not the result that my team was shooting for, I am proud of the
          work that I did and we learned key details that we will take with us in upcoming years
          of this competition. This year we did system testing of the plane and payload systems
          but we did not do complete acceptance testing to our design requirements — this is
          something that I plan to change for next year. We need to be able to complete the
          entire verification and validation V to be confident in our performance at competition.
        </p>
        <p>
          I also learned that this competition is not an optimization problem. To complete this
          mission autonomously is a difficult challenge — this year across 22 teams not one team
          completed a payload capture. Only after being able to do our full mission at a high
          completion rate can we think about optimizing the weight savings and scoring.
        </p>
      </section>
    </div>
  )
}

export default SAEAero
