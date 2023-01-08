const mongoose =  require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://0.0.0.0:27017/Registration-Form",{ useNewUrlParser: true, useUnifiedTopology: true, useUnifiedTopology:true})
.then(()=>{
    console.log("connection Succesful......")
})
.catch((e)=>{
    console.log(e)
});