import express from 'express';
const router = express.Router();

// begin
router.get('/test', (req, res) => {
    res.status(200).send(`Can you access "curl -k https://localhost:3000/bind/keyword-render"`);
})
// end

export default router;