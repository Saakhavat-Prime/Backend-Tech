const express = require('express')
const app = express();
// console.dir(app);

let port = 3000;

app.listen(port, ()=>{
    console.log(`app is listening on the port ${port}`);
});


// app.use((req, res) => {
//  console.log("request recieved");
//  res.send("this is basic response")
// });


app.get("/", (req, res) => {
    res.send("hello i am root")
     
} )
app.get("/:username/:id", (req, res) => {
    let { username , id } = req.params;
    let htmlstr = `<h1> welcome to the page of ${username} with id ${id}<h1/>`
    res.send(htmlstr)
     
} )

app.get("/search", (req,res) => {
 let {q} = (req.query);
 if(!q){
    res.send("<h1>nothing search<h1/>")
 }
 res.send(`<h1> search result for querry ${q}<h1/>`);
})
// app.get("/help", (req, res) => {
//     res.send("you are in help root")
     
// } )

// app.use((req, res) => {
//     res.status(404).send("This path does not exist");
// });

