import React from 'react'

import { ErrorBoundary } from 'react-error-boundary'

const Counter = (props) => {
  users?.map(() => {
    return <h1>teste</h1>
  })
}

const ErrorHandler = () => {
  return <h1>Eita, deu ruim! D:</h1>
}

const notifyError = () => {
  // func pra mandar algo pro sentry ou algo do tipo
}

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorHandler}
      onError={(arg1, arg2) => {
        console.log({ arg1, arg2 })
      }}
    >
      <Counter />
    </ErrorBoundary>
  )
}

export default App
