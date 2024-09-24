const request = require('supertest')
const app = require('../../../base-backend-service/app.js') // Make sure this path is correct based on your project structure

// Import the required modules
const request = require('supertest')
const app = require('../../../base-backend-service/app.js') // Make sure this path is correct based on your project structure

// Test the GET request to the root route
describe('GET /', () => {
  // Test if the response is "Hello, Express!"
  it('responds with "Hello, Express!"', async () => {
    // Make the GET request
    const response = await request(app).get('/')
    // Check the response
    expect(response.text).toBe('Hello, Express!')
  })
})
