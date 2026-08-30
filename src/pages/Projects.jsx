function Projects() {
  const projects = [
    {
      title: 'SAE Aero Design Competition',
      image: 'https://placehold.co/640x400/1a1a1a/555?text=SAE+Aero+Design',
    },
    {
      title: 'Autonomous Payload',
      image: 'https://placehold.co/640x400/1a1a1a/555?text=Autonomous+Payload',
    },
    {
      title: 'Subaru Front Control Arm Replacement',
      image: 'https://placehold.co/640x400/1a1a1a/555?text=Front+Control+Arm+Replacement',
    },
    {
      title: 'EEG Brainwave Research',
      image: 'https://placehold.co/640x400/1a1a1a/555?text=EEG+Brainwave+Research',
    },
    {
      title: 'Calico Android Game',
      image: 'https://placehold.co/640x400/1a1a1a/555?text=Calico+Android+Game',
    },
    {
      title: 'Strava Time Hacking',
      image: 'https://placehold.co/640x400/1a1a1a/555?text=Strava+Time+Hacking',
    },
  ]

  return (
    <div>
      <div className="page-header">
        <h1>Projects</h1>
      </div>
      <div className="card-grid">
        {projects.map(project => (
          <div key={project.title} className="card">
            <img src={project.image} alt={project.title} className="card-thumbnail" />
            <div className="card-body">
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
