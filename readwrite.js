// 비동기적 파일 읽기
/*
const fs = require('fs');

fs.readFile('textfile.txt', (error, file) => {
	console.log(file);
	console.log(file.toString());
});
*/
//비동기적 파일 쓰기
const fs = require('fs');

fs.writeFile('output.txt', '안녕하세요...!', (error) =>{
	console.log('파일 쓰기를 완료했습니다.');
});
