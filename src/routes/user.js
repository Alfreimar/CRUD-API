const express = require("express")

const router=express.Router();

//creater user
router.post('/users', (req, res)=>{
    res.send('Create User');
});

module.export= router;