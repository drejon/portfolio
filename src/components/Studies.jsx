export function Studies({ studies }) {
  return (
    <section className="studies">
      {
        studies.cards.map(card => (
          <div key={card.header} className="study">
            <h3>{card.header}</h3>
            <h5>{card.description}</h5>
            <p>{card.body}</p>
          </div>
        ))
      }
    </section>
  )
}
