import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/movies-rest-api',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

// mongoose.connect('mongodb+srv://LichBrennt:uVuVgX0XhEwK7xx7@cluster0.zultl.mongodb.net/MOVIES-REST-API?retryWrites=true&w=majority',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// })

mongoose.connection
    .once('open', ()=>{
        console.log('Connnected to database')
    })
    .on('error',(err)=>{
        console.log(err)
    })