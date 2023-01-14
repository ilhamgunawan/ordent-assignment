const arr1 = [
  ['J','L','L','M'],
  ['u','i','i','a'],
  ['s','v','f','n'],
  ['t','e','e','']
]

const arr2 = [
  [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
  [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
  [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
  [ '', 'o', '', '', 'e', '', '', 'l' ],
  [ '', 'c', '', '', 'r', '', '', '' ],
  [ '', 'h', '', '', 'h', '', '', '' ],
  [ '', 'o', '', '', 'o', '', '', '' ],
  [ '', 'n', '', '', 'u', '', '', '' ],
  [ '', 'd', '', '', 's', '', '', '' ],
  [ '', 'r', '', '', 'e', '', '', '' ],
  [ '', 'i', '', '', '', '', '', '' ],
  [ '', 'a', '', '', '', '', '', '' ] 
]

function arrAdder(arr) {
  return arr.reduce((arrayOutput, innerArray) => {

    innerArray.forEach((char, charIndex) => {
      if (arrayOutput[charIndex]) {
        arrayOutput[charIndex] = arrayOutput[charIndex] + char
      } else {
        arrayOutput[charIndex] = char
      }
    })
    
    return arrayOutput
  }, []).join(" ")
}
