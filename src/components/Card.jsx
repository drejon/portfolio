export function Card({ content }) {
  return (
    <div className="card">
      <p>{content.header}</p>
      <p>{content.body}</p>
      {content.image && <img src={content.image} alt="" />}
      <p>{content.description}</p>
    </div>
  )
}
