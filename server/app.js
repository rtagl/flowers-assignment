const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/posts', async (req, res) => {
  try {
    const response = await axios.get(
      'http://jsonplaceholder.typicode.com/posts'
    );
    res.json(response.data);
  } catch (err) {
    console.log(err);
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
