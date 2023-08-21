import { useEffect } from 'react'

const ComponentChild = ({ fowardedRef }) => {
  useEffect(() => {
    fowardedRef.current?.focus()
  }, [fowardedRef])

  return (
    <div>
      <label htmlFor="email">E-mail</label>
      <br />
      <input ref={fowardedRef} id="email" type="email" />
    </div>
  )
}

export default ComponentChild
