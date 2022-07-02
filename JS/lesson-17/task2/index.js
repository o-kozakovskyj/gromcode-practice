export const callbackPrompt = {
  message: 'ku-ku',
  showPrompt() {
   const PhoneNumber = prompt(`${this.message}`);
    console.log(PhoneNumber);
  },
  showDeferredPrompt(delay) {
    setTimeout(this.showPrompt.bind(callbackPrompt), delay);
  },
}
//---test data---
callbackPrompt.showDeferredPrompt(10);

