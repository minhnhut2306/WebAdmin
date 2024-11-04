const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'AND103_Assignment';

async function fetchData() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();

        const db = client.db(dbName);

        // Example: Fetching data from a collection named 'collectionName'
        const collection = db.collection('collectionName');
        const data = await collection.find({}).toArray();

        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        // Close the connection when done
        await client.close();
    }
}

fetchData();
