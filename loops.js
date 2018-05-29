const array = []
 // const t = Math.floor(Math.random() * 10)

  for (let i = 0; i < 25; i++) {
    array.push("I am a strange loop.")
  }

let countdown = 100;
while (countdown > 0) {
  console.log(--countdown)
}

function maybeTrue() {
  return Math.random() >= 0.5
}

do {
  console.log('doo-bee-doo-bee-doo')
} while (array.length >0 && maybeTrue());