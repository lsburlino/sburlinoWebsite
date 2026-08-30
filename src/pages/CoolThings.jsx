function CoolThings() {
  const coolThings = [
    {
      title: 'STP 2026',
      image: 'https://placehold.co/640x400/1a1a1a/555?text=STP+2026',
    },
    {
      title: 'Hong Kong + Taiwan Trip',
      image: 'https://placehold.co/640x400/1a1a1a/555?text=Hong+Kong+%2B+Taiwan+Trip',
    },
    {
      title: 'Seattle Marathon 2025',
      image: 'https://placehold.co/640x400/1a1a1a/555?text=Front+Control+Arm+Replacement',
    },
    {
      title: 'Sauvie Island Marathon 2025',
      image: 'https://placehold.co/640x400/1a1a1a/555?text=Sauvie+Island+Marathon+2025',
    },
    {
      title: 'UK Trip',
      image: 'https://placehold.co/640x400/1a1a1a/555?text=UK+Trip',
    },
    {
      title: 'Portland Marathon 2025',
      image: 'https://placehold.co/640x400/1a1a1a/555?text=Portland+Marathon+2025',
    },
  ]

  return (
    <div>
      <div className="page-header">
        <h1>Cool Things</h1>
      </div>
      <div className="card-grid">
        {coolThings.map(item => (
          <div key={item.title} className="card">
            <img src={item.image} alt={item.title} className="card-thumbnail" />
            <div className="card-body">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoolThings
