import { Card } from "./Card";

export function Cards({ content }) {
  return (
    <section className="cards">
      <h1>{content?.title}</h1>
      <section>
        {
          content?.cards.map((card) => (
            <Card content={card}></Card>
          ))
        }
      </section>
    </section>
  )
}
