const app = require('./src/app');

const { connectToDatabase } = require('./src/mongo');

const PORT = 8080 

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening at ${PORT}`);
    }) 
  })
  .catch(error => {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  });

