const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();


// middleware
app.use(cors());
app.use(express.json());



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://phone:phone@cluster0.gro8ftq.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const laptopCollection = client.db("phone").collection("laptop");

    app.get("/laptop", async (req, res) => {
        const result = await laptopCollection.find().toArray();
        res.send(result)
    })





     await client.db("admin").command({ ping: 1 });
     console.log("Pinged your deployment. You successfully connected to MongoDB!");
 } finally {
 }
}
run().catch(console.dir);









app.get('/', async (req, res) => {
    res.send('Server is on');
})

app.listen(port, () => console.log(`Server is on  ${port}`))