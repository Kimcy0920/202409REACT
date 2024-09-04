const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(8080, () =>
    console.log('8080포트에서 서버 실행 중'));
// express에 관련된 게 없음 터미널에 npm install express로 설치