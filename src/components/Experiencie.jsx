export function Experiencie({ experiencie }) {
  return (
    <section className="experiencie">
      {
        experiencie.map(experiencie => (
          <div>
            <h2>{experiencie.company}</h2>
            <h3>{experiencie.position}</h3>
            <h4>{experiencie.date}</h4>
            {
              experiencie.descriptions.map(description => (
                <p>{description}</p>
              ))
            }
          </div>
        ))
      }
    </section>
  )
}
