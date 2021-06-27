const {Router} = require('express');
const router = Router();

const hospitals = require('../data/hospitals.json');

router.get('/',(req,res) => {
    res.json(hospitals);
});

router.post('/',(req,res) => {
    console.log(req.body);
    res.send('received');
})

module.exports = router;