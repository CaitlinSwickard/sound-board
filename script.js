const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// loop through each sound
sounds.forEach(sound => {
  // create a button, add class list of btn
  const btn = document.createElement('button')
  btn.classList.add('btn')

  // set inner text to the sound
  btn.innerText = sound

  // add event listener
  btn.addEventListener('click', () => {
    stopSongs()
    // .play method attempts to begin playback of the media. 
    // It returns a Promise which is resolved when playback has been successfully started.
    document.getElementById(sound).play();
  })

  // append each btn
  document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)

    // this stops the audio from playing when another sound is clicked
    song.pause()
    song.currentTime = 0;
  })
}