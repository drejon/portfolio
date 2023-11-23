export function Project({ content }) {

  return (
    <div className="project">
      <p>{content.header}</p>
      <p>{content.body}</p>
      {content.image && <img src={content.image} alt="" />}
      <p>{content.description}</p>
    </div>
  )
}
