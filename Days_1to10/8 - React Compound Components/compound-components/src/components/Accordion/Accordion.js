import React, { useState, useContext, createContext } from 'react'
import * as S from './accordion.styles'

const ToggleContext = createContext()

export default function Accordion({ children, ...restProps }) {
  return (
    <S.Container {...restProps}>
      <S.Inner>{children}</S.Inner>
    </S.Container>
  )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <S.Title {...restProps}>{children}</S.Title>
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <S.Frame {...restProps}>{children}</S.Frame>
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(true)

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <S.Item {...restProps}>{children}</S.Item>
    </ToggleContext.Provider>
  )
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext)

  return (
    <S.Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
    </S.Header>
  )
}

Accordion.Body = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext)

  return (
    <S.Body className={toggleShow ? 'open' : 'close'}>
      <span>{children}</span>
    </S.Body>
  )
}
