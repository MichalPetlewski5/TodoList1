import React from 'react'

export default function TodoCard(props) {
  const {children, index} = props
  console.log(children)

  return (
    <li>
        {children}
    </li>
  )
}
