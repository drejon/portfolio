export function Card({ content }) {
  return (
    <div className="card">
      <p>{content.header}</p>
      <p>{content.body}</p>
      <p>{content.description}</p>
    </div>
  )
}
