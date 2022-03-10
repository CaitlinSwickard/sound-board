const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// loop through each sound
sounds.forEach(sound => {
  // create a button, add class list of btn
  const btn = document.createElement('button')
  btn.classList.add('btn')

  // set inner text to the sound
  btn.innerText = sound

  // append each btn
  document.getElementById('buttons').appendChild(btn)
})