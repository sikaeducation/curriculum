module.exports = (function (question, wait=1200) {
  const fortunes = [
    `It is certain`,
    `It is decidedly so`,
    `Without a doubt`,
    `Yes definitely`,
    `You may rely on it`,
    `As I see it, yes`,
    `Most likely`,
    `Outlook good`,
    `Yes`,
    `Signs point to yes`,
    `Reply hazy try again`,
    `Ask again later`,
    `Better not tell you now`,
    `Cannot predict now`,
    `Concentrate and ask again`,
    `Don't count on it`,
    `My reply is no`,
    `My sources say no`,
    `Outlook not so good`,
    `Very doubtful`
  ]

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var idx = Math.floor(Math.random() * fortunes.length)
      var fortune = fortunes[idx]
      if (question) {
        resolve({ question: question, response: fortune })
      } else {
        reject({ error: { message: `You must ask a question for me to tell you your fortune!` }})
      }
    }, wait)
  })
})
