import { useState, useRef } from 'react'

import ComponentChild from './ComponentChild'

const Dom = () => {
  const [showModal, setShowModal] = useState(false)
  const inputRef = useRef()

  const showFakeModal = () => {
    setShowModal(true)
  }

  return (
    <>
      <button onClick={showFakeModal}>Modal</button>
      {showModal && <ComponentChild fowardedRef={inputRef} />}
    </>
  )
}

export default Dom
