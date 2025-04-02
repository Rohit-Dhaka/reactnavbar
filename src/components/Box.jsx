import React, { useContext } from 'react'
import { CountContext } from '../context/context'

const Box = () => {
    const count = useContext(CountContext)
  return (

    <div>Box {count}</div>
  )
}

export default Box