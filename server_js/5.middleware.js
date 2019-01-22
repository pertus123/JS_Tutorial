const express = require('express');

const app = express();
app.use(express.static('public'));

app.get('*', (request, response) => {
	//response.status(404);
	response.send('해당경로에는 아무것도 없습니다.');
});

app.listen(52273, () => {
	console.log('Server running at 127.0.0.1:52273');
});