import express from 'express';
const app = express()
const port = 3000;

app.get('/', (req, res) => {
  res.send('GitHub CICD to deploy ECR and ECS Cluster');
});

app.get('/bind/:uriParam', (req, res) => {
  res.send(req.params.uriParam)
});

import testRoute from './routes/test.route.js';
app.use('/api/tutorial', testRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
