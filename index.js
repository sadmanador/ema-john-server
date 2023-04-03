const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb');

//middleware
app.use(cors());
app.use(express.json());




const uri = "mongodb+srv://ema-john-user:QRNgz0xsZIcCcpcZ@cluster0.9mathic.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
try{
const productsCollection = client.db('ema-john-db').collection('products');
app.get('/products', async (req, res) => {
const query = {};
const cursor = productsCollection.find(query);
const result = await cursor.toArray();
res.send(result);
});


}
finally{
}
};
run().catch(console.dir);



app.get("/", (req, res) => {
  res.send("The Web is running");
});

app.listen(port, () => {
  console.log(`listening port 5000`);
});
