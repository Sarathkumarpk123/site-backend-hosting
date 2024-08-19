

const getAllAuthors=async(req, res) => {

    const authors=await Author.find({});
       res.jason(authors)
     }
   
   const getAuthorById=async(req, res) => {
     const authors=await Author.find({});
       res.json(authors)
     }
   
   const addAuthor=async(req, res) => {
     //1.get data from request body
     const data=req.body
     //2.create a document
      const author = new Author(data)
      //.3.save document to database
      await author.save()
      //4.send document back as response
      res.json(author)
       //res.send('Hello World!')
   
       res.send('Hello World!')
     }
   
   const updateAuthor=async(req, res) => {
    const updatedAuthor=await  Author.findByIdAndUpdate(req.params.authorid, req.body, {new:true})
     //A.findByIdAndUpdate(id, update, options)
   
       res.json(updatedaAuthor)
     }  
   
   const deleteAuthor=async(req, res) => {
    await  Author.findByIdAndDelete(req.params.authorid, req.body)
     //A.findByIdAndUpdate(id, update, options)
   
    
       res.send('deleted!')
     } 
     
     module.exports={
       getAllAuthors,
       getAuthorById,
       addAuthor,
       updateAuthor,
       deleteAuthor
   }  