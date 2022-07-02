function defer(func, ms) {

  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  }
}
const messenger = {
  name: 'Dodo',
  night: 'good night',
  morning: 'good morning',
  greetingsEarly() {
   console.log(`Hello ${this.name} ${this.morning}`);  
  },
  greetingsDay(name) {
    console.log(`Hi ${name} ${this.night} `);
  },
}
//---test---

const deferredMassege = defer(messenger.greetingsEarly(), 1000);
const deferredMassege1 = defer(messenger.greetingsDay('Bibi'),1000)
