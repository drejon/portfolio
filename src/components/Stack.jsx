export function Stack({ stack }) {
  return (
    <div className="stack">
      {
        stack.map(technologies => (
            <img src={technologies} alt={'technologies'} />
        ))
      }
    </div>
  )
}
