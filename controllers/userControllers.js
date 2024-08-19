
const getAllUsers=async(req, res) => {

    const user=await User.find({});
       res.jason(user)
     }
   
   const getUserById=async(req, res) => {
     const user=await user.find({});
       res.json(user)
     }
   
   const addUser=async(req, res) => {
     //1.get data from request body
     const data=req.body
     //2.create a document
      const hash = bcrypt.hashSync (req.body.password,saltRounds);
      const user=new User({
        ...data,
        password:hash
      })
      //.3.save document to database
      await user.save()
      //4.send document back as response
      res.json(user)
       //res.send('Hello World!')
   
       res.send('Hello World!')
     }
   
   const updateUser=async(req, res) => {
    const updatedUser=await User.findByIdAndUpdate(req.params.userid, req.body, {new:true})
     //A.findByIdAndUpdate(id, update, options)
   
       res.json(updatedUser)
     }  
   
   const deleteUser=async(req, res) => {
    await User.findByIdAndDelete(req.params.userid, req.body)
     //A.findByIdAndUpdate(id, update, options)
   
    
       res.send('deleted!')
     } 
     
     module.exports={
       getAllUsers,
       getUserById,
       addUser,
       updateUser,
       deleteUser
   }  