export function Experience({ experiences }) {
  return (
    <section className="experiencies">
      {
        experiences.map(experiencie => (
          <div key={experiencie.date} className="experiencie">
            <h3 style={{textWrap: 'balance'}}>{experiencie.company}</h3>
            {/* <h4>{experiencie.position}</h4> */}
            <h5>{experiencie.date}</h5>
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
