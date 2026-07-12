const express = require('express');
const app = express();
const path = require("path")

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
  res.render('home.ejs')
})

app.get('/value', (req, res) => {
  let value = Math.floor(Math.random() * 6 +1);
  res.render('value.ejs', {value})
})

app.get('/ig/:username', (req, res) => {
  let {username} = req.params;
  let instaData = require("./data.json");
  let data = instaData[username];
  // console.log(data)
  
  // let followers = ["alice", "bob" ,"jhon", "Doe"];
if (data){

  res.render('instagram', {data})
}else{
  res.render('err.ejs');
}
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
