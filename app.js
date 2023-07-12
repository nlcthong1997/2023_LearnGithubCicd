const express = require('express')
const app = express()
const port = 3005

app.get('/', (req, res) => {
  res.send('Welcome to NodeJS Server!')
});

app.get('/bind/:uriParam', (req, res) => {
  res.send(req.params.uriParam)
});

import testRoute from './routes/test.route.js';
app.use('/api/tutorial', testRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})