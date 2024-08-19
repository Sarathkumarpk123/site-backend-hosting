const getAllBooks=async(req, res) => {

    const books=await Book.find({});
       res.jason(books)
     }
   
   const getBookById=async(req, res) => {
     const books=await Book.find({});
       res.json(books)
     }
   
   const addBook=async(req, res) => {
     //1.get data from request body
     const data=req.body
     //2.create a document
      const book = new Book(data)
      //.3.save document to database
      await book.save()
      //4.send document back as response
      res.json(book)
       //res.send('Hello World!')
   
       res.send('Hello World!')
     }
   
   const updateBook=async(req, res) => {
    const updatedBook=await Book.findByIdAndUpdate(req.params.bookid, req.body, {new:true})
     //A.findByIdAndUpdate(id, update, options)
   
       res.json(updatedBook)
     }  
   
   const deleteBook=async(req, res) => {
    await Book.findByIdAndDelete(req.params.bookid, req.body)
     //A.findByIdAndUpdate(id, update, options)
   
    
       res.send('deleted!')
     } 
     
     module.exports={
       getAllBooks,
       getBookById,
       addBook,
       updateBook,
       deleteBook
   }  