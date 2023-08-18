import DueteComponent from './DueteComponent'
import Example from './Example'

function App() {
  return (
    <>
      <h1>App</h1>
      <div onClick={() => console.log('event')}>
        <DueteComponent>
          <Example />
        </DueteComponent>
      </div>
    </>
  )
}

export default App
