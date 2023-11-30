import { navigate } from "../App"

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    
    const isMainEvent = event.button === 0
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'
    
    if (isMainEvent && !isModifiedEvent && isManageableEvent) {
      event.preventDefault()
      navigate(to)
    }
  }
  return (
    <a onClick={() => handleClick} href={to} target={target} {...props} ></a>
  )
}
