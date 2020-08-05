'use stricts'

const expect = require('chai').expect;
const supertest = require('supertest');

const config = require('../config');

const request = supertest(config.URL_ENDPOINT);


describe('### PHONES: ', () => {

	it('# GET /phones', async () => {

		let response = await request.get('/phones')

		expect(response.status).to.equal(200)
		expect(response.body.length).to.equal(8)

	})

	it('# POST /phones', async () => {

		let response = await request.post('/phones').send(
			{
				id: 5,
				name: 'Zen Phone 5',
				manufacturer: 'Asus',
				description: 'Great phone with an excellent interface. One of the best mid price range phones in the market.',
				color: 'black',
				price: 359,
				imageFileName: 'ZenPhone_5.jpg',
				screen: '6,2 inch Full-HD',
				processor: 'Snapdragon 636',
				ram: 6
			}
		)
			.set('Content-Type', 'application/json');

		expect(response.status).to.equal(405)
		expect(response.body.message).to.equal('Route defined in Swagger specification (/phones) but there is no defined post operation.')

	})
});

