var router = require('express').Router()


const FormRouter = require('./FormRouter')



router.use('/form', FormRouter)

router.get('/', (req, res)=>{
    res.send("Router.js working fine")
})


module.exports = router;