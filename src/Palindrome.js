// stack
import React from 'react'

const Palindrome = () => {
  let letters = [];
  let word = 'rar';
  let rword = '';

  for(let i = 0; i < word.length; i++){
    letters.push(word[i]);
  }

  for(let i = 0; i < word.length; i++){
    rword += letters.pop();
  }

  return (
    <h1>
    {
      word === rword
      ? 'is palindrome'
      : 'is not'
    }
    </h1>
  )
}

export default Palindrome
