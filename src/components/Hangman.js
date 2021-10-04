import React from 'react'

const Figure = ({ wrongLetters }) => {
  const errors = wrongLetters.length

  return (
    <svg height="280" width="500" className="figure-container">
      {/* <!-- Rod --> */}
      <line x1="60" y1="20" x2="140" y2="20" stroke="black" />
      <line x1="140" y1="20" x2="140" y2="50" stroke="black" />
      <line x1="60" y1="20" x2="60" y2="230" stroke="black" />
      <line x1="10" y1="230" x2="80" y2="230" stroke="black" />

      {errors < 6 &&
      <>
      <line id="door1" x1="80" y1="230" x2="130" y2="230" stroke="black" />
      <line  id="door2" x1="130" y1="230" x2="180" y2="230"  stroke="black" />
      </>
       }
       
     {/* <!-- Dead --> */}
     {errors === 6 &&
      <>
      <line x1="140" y1="20" x2="140" y2="80" stroke="black"></line>
      <circle cx="142" cy="100" r="20" stroke="black" stroke-width="4" fill="white"/>
      <line x1="143" y1="97" x2="149" y2="88" stroke="black"></line>
      <line x1="130" y1="97" x2="136" y2="88" stroke="black"></line>
      <line x1="143" y1="88" x2="149" y2="97" stroke="black"></line>
      <line x1="130" y1="88" x2="136" y2="97" stroke="black"></line>
      <circle cx="142" cy="110" r="5" stroke="black" stroke-width="4" fill="white"/>
        
      <line x1="142" y1="122" x2="142" y2="190" />
      <line x1="140" y1="160" x2="120" y2="140" />
      <line x1="142" y1="190" x2="122" y2="220" />
      <line x1="142" y1="190" x2="162" y2="220" />
      <line x1="142" y1="190" x2="122" y2="220" />
      <line x1="140" y1="160" x2="160" y2="140" />
      

      <line x1="80" y1="230" x2="130" y2="300" stroke="black" />
      <line  x1="130" y1="300" x2="180" y2="230"  stroke="black" />    
      </>
      }

      {/* <!-- Head --> */}
      {errors > 0 && errors < 6 &&
      <>
      <circle cx="142" cy="60" r="20" stroke="black" stroke-width="4" fill="white"/>
      <circle cx="135" cy="55" r="5" fill="black"/>
      <circle cx="150" cy="55" r="5" fill="black"/>
      <circle cx="142" cy="70" r="5" stroke="black" stroke-width="4" fill="white"/>
      </>
      }
      {/* <!-- Body --> */}
      {errors > 1 && errors < 6 &&
        <line x1="142" y1="82" x2="142" y2="150" />
      }
      {/* <!-- Arms --> */}
      {errors > 2 && errors < 6 &&
        <line x1="140" y1="120" x2="120" y2="100" />
      }
      {errors > 3 && errors < 6 &&
        <line x1="140" y1="120" x2="160" y2="100" />
      }
      {/* <!-- Legs --> */}
      {errors > 4 && errors < 6 &&
        <line x1="142" y1="150" x2="122" y2="180" />
      }
      {errors > 5 && errors < 6 &&
        <line x1="142" y1="150" x2="162" y2="180" />
      }
    </svg>
  )
}

export default Figure
