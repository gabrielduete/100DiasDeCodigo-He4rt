import { createPortal } from 'react-dom'

const DueteComponent = ({ children }) =>
  createPortal(children, document.getElementById('duete'))

export default DueteComponent
