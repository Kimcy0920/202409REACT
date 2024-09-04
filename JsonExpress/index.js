const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');


/*

----------------외부모듈인 express, axios는 설치 필요--------------
----------------------npm install -D nodemon----------------------

package.json에 script코드 추가함
"scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
}

npm run dev

*/

// Initialize Express app
const app = express();
const port = 3003;

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public'))); // public폴더 아래 웹페이지 사용

// Base URL for json-server
const jsonServerUrl = 'http://localhost:3000/items'; // 도커 포트번호

// CRUD routes

// POST /items: Create a new item
app.post('/items', async (req, res) => { //  / async-await 비동기
  try {
    const response = await axios.post(jsonServerUrl, req.body);
    res.status(201).json(response.data); // 
  } catch (error) {
    res.status(500).send('Error creating item'); // 실패 500에러
  }
});

// PUT /items/:id: Update an item by ID
app.put('/items/:id', async (req, res) => {
  try {
    const response = await axios.put(`${jsonServerUrl}/${req.params.id}`, req.body);
    //                              'http://localhost:3000/items' / 입력한 데이터의 id값
    res.json(response.data);
  } catch (error) {
    res.status(404).send('Item not found');
  }
});

// DELETE /items/:id: Delete an item by ID
app.delete('/items/:id', async (req, res) => {
  try {
    await axios.delete(`${jsonServerUrl}/${req.params.id}`);
    res.status(204).send();
  } catch (error) {
    res.status(404).send('Item not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});