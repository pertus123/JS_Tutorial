const request = require('request');
const cheerio = require('cheerio');

const url = 'http://www.hanbit.co.kr/store/books/new_book_list.html';
request(url, (error, response, body) => {
	const $ = cheerio.load(body);

	$('.view_box').each((intdex,element) => {
		const title = $(element).find('.book_tit').text().trim();
		let writer = $(element).find('.book_writer').text().trim();
		writer = writer.split(',').map((item) => item.trim());

		console.log(title);
		console.log(writer);
		console.log();
	});
});