const redis = require('redis');
const { promisify } = require('util');

class RedisService {
  constructor() {
    this.client = redis.createClient();
    this.getAsync = promisify(this.client.get).bind(this.client);
    this.delAsync = promisify(this.client.del).bind(this.client);

    // Handle Redis connection events
    this.client.on('connect', () => {
      console.log('Connected to Redis');
    });

    this.client.on('error', (err) => {
      console.error('Redis Error:', err);
    });
  }

  async setKey(key, value) {
    return new Promise((resolve, reject) => {
      this.client.set(key, value, (err, reply) => {
        if (err) {
          reject(err);
        } else {
          resolve(reply);
        }
      });
    });
  }

  async getKey(key) {
    try {
      const value = await this.getAsync(key);
      return value;
    } catch (error) {
      throw error;
    }
  }

  async deleteKey(key) {
    try {
      const deletedCount = await this.delAsync(key);
      return deletedCount;
    } catch (error) {
      throw error;
    }
  }

  closeConnection() {
    this.client.quit();
    console.log('Redis connection closed.');
  }
}

module.exports = RedisService
