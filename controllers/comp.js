const Comp = require('../models/comp')

const createComp= async(req, res)=>{
    try{
        const comp = await Comp.create(req.body)
        res.status(201).json({comp})
    }
    catch(err){
        res.status(500).json({msg:"error"});
    }
}

module.exports= {
    createComp
}

