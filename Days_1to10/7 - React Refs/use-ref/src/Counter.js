import { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const increaseCounter = () => {
    setCounter(counter + 1)
  }

  const showCounter = () => {
    alert(`O botão foi clicado: ${counter}`)
  }

  return (
    <>
      <button onClick={increaseCounter}>Adicionar numero</button>
      <button onClick={showCounter}>Exibir valor</button>
    </>
  )
}

export default Counter
