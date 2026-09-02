import { useEffect } from 'react'
import './SAEAero.css'
import teamPhoto from '../../assets/projects/sae-aero/IMG_1099.jpg'
import dlzMovement from '../../assets/projects/sae-aero/DLZ movement - Frame 2.jpg'
import scoringChart from '../../assets/projects/sae-aero/Scoring Chart.png'
import flightVideo1 from '../../assets/projects/sae-aero/IMG_0719.mp4'
import flightVideo2 from '../../assets/projects/sae-aero/IMG_0720.mp4'

function SAEAero() {
  useEffect(() => { document.title = 'SAE Aero Design — Luca Sburlino' }, [])

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
          SAE Aero West is a yearly collegiate design competition held this year in Fort Worth,
          Texas. Teams from across the globe, including China, India, and Mexico, compete
          across three classes. My team competed in the advanced class, which challenges teams
          to design an autonomous VTOL plane capable of completing a payload pickup and
          drop-off mission. This was our school's first time competing in the advanced class, but
          we weren't there just to participate, we were there to win.
        </p>
        <p>
          Scoring is split across three components: a 30-page design report detailing our
          methodology, a 15-minute flight demonstration readiness review where we prove we are
          prepared to fly on competition day, and competition day flight scoring.
        </p>
        <img src={scoringChart} alt="Competition scoring multipliers" className="project-img-medium" />
      </section>

      <section className="project-section">
        <h2>The Mission</h2>
        <p>
          Our objective was to build an autonomous VTOL plane that carries, delivers, and
          retrieves a payload. We defined our mission in six stages: horizontal takeoff,
          transition to vertical flight, payload delivery, payload capture, transition back to
          horizontal flight, and landing.
        </p>
        <p>
          Points are scored on takeoff, payload drop-off, payload pickup, and landing, with the
          majority of points coming from payload operations. Payload pickup is weighted
          especially heavily because it requires a payload to have been dropped off on a
          previous flight as well as navigating the challenge of returning to the plane. The 
          entire system — plane and payload combined — could weigh up to 3.5 lbs, and points 
          were multiplied based on payload weight. This meant we were incentivized to minimize 
          plane weight so the payload could be as heavy as possible.
        </p>
      </section>

      <section className="project-section">
        <h2>My Role</h2>
        <p>
          I led the payload team. We designed our payload as an omni-wheel kiwi car, a
          three-wheeled platform capable of moving in any direction. After the plane delivered a
          payload, it would lower itself, drive to a designated holding zone, and clear the
          landing area. The next payload waiting in its holding zone would then navigate to the
          plane and attach itself for pickup. This approach kept the plane's electronics simple
          and lightweight by offloading the positioning logic to the payloads themselves.
        </p>
        <img src={dlzMovement} alt="Designated Landing Zone payload movement diagram" />
        <p>
          The payload used a combination of ultra-wideband positioning and machine vision with
          AprilTags to locate and align with the plane. I'm especially proud of how the system
          evolved, from a bare Arduino Uno wired to three motors all the way to a custom PCB
          with integrated sensors. Each version solved a specific problem before adding
          complexity. <em>More on the payload system coming soon.</em>
        </p>
      </section>

      <section className="project-section">
        <h2>Competition Results</h2>
        <p>
          While our payload performed well in testing, competition day did not go as planned.
          Thunderstorms consumed much of the schedule, leaving us with only two flight attempts.
          On one attempt we went out of bounds; on the other we couldn't acquire a GPS signal.
          Neither scored points. Out of 22 teams, we placed 8th in the design report, 5th in the
          readiness review, and 9th overall.
        </p>
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
        <h2>Takeaways</h2>
        <p>
          This wasn't the result we were shooting for, but I'm proud of the work we put in and
          the lessons we're carrying forward. Our struggles at competition came down to two
          things: testing discipline and division of labor.
        </p>
        <p>
          We learned that flight testing is risky. We crashed our plane multiple times in the
          weeks leading up to competition, forcing us to rebuild quickly just to keep testing and
          make it to Fort Worth. Next year, every flight test will be purpose-driven, each one
          will have a checklist and a specific mission plan instead of just being a chance to fly the
          plane.
        </p>
        <p>
          We also had only one person working on the plane software, which became an issue
          as competition approached. He did a great job, but this was a task that required
          multiple team members to complete. With time quickly running out, there wasn't enough
          room to onboard someone new even though we wanted to. Going forward, we're planning
          to work in pairs and bring on a non-engineering project manager to distribute knowledge
          more evenly across the team.
        </p>
        <p>
          On the technical side, we tested the plane and payload systems individually but never
          completed full acceptance testing against our design requirements. Next year we will not 
          just test individual systems but also run full mission simulations. In doing so, we will
          be closing the entire verification and validation loop before competition to have
          real confidence in our performance.
        </p>
        <p>
          The bigger lesson is that this competition is not an optimization problem, at least
          not yet. Completing this mission autonomously is a serious challenge. This year, across
          all 22 teams, not a single one completed a payload capture. We can only start
          optimizing weight and scoring after we can reliably complete the full mission.
        </p>
      </section>
    </div>
  )
}

export default SAEAero
