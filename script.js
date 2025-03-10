function realQuote() {
  let quoteRandom = Math.random();

  if (quoteRandom >= 0 && quoteRandom < 0.2) {
    alert("You are great, it's just a matter of time");
  } else if (quoteRandom >= 0.2 && quoteRandom <= 0.4) {
    alert("The journey of a thousand step begins with determination");
  } else if (quoteRandom >= 0.4 && quoteRandom <= 0.6) {
    alert("Na who give up fuck up");
  } else if (quoteRandom >= 0.6 && quoteRandom <= 0.8) {
    alert("Live a life others will benefit from");
  } else if (quoteRandom >= 0.8 && quoteRandom <= 1) {
    alert("Don't ever let people control you and use you anyhow. You're a great nation ");
  }
}
