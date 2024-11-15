const http = require('https');

const options = {
	method: 'GET',
	hostname: 'the-vegan-recipes-db.p.rapidapi.com',
	port: null,
	path: '/',
	headers: {
		'x-rapidapi-key': '8de9658098msh5286eaef5c0634bp14984ajsnbda5b5e06d52',
		'x-rapidapi-host': 'the-vegan-recipes-db.p.rapidapi.com'
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on('data', function (chunk) {
		chunks.push(chunk);
	});

	res.on('end', function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();