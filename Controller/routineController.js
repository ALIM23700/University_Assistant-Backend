
const Routine=require("../Models/routine")

const getroutine=async(req,res)=>{
   try{
   
    const newroutine=await Routine.find()
    
    res.status(200).send({
        success:true,
        newroutine
    })
   }
   
    catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }


}

module.exports=getroutine