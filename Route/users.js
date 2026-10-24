const express = require('express');
const router = express.Router();

router.get("/users" ,(req ,res )=>{
    res.send("user lisit");
});
router.post("/users" ,(req , res)=>{
    res.send( " user added");
})

module.exports = router;

