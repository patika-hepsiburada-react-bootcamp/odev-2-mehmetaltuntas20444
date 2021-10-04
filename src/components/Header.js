import React from 'react'
const Header = ({hint, visible}) => {
  return (
    <>
      <h1>Try Not To Hang The Character </h1>
      {visible &&
        <p>{hint}</p>
      }
    </>
  )
}

export default Header
