let express = require('express')
let app = express()

app.get('*', (req, res) => {
  res.send('haha')
})

foo()

app.listen(9500, () => {
  console.log('server started')
})
