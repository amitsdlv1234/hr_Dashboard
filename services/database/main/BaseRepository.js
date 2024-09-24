class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data, transaction = null) {
    try {
      const newRecord = await this.model.create(data, { transaction });
      return newRecord.toJSON();
    } catch (error) {
      console.error('Error creating record:', error.message);
      throw error;
    }
  }

  async list({ skip = 0, limit = 10, where = {}, order_by, transaction = null}) {
    try {
      console.log(order_by);
      let orderBy = order_by?.length > 0 ? order_by : [["id", "DESC"]]
      const record = await this.model.findAll({
        limit: parseInt(limit) || 10,
        offset: parseInt(skip) || 0,
        where:where,
        order: orderBy,
        transaction
      });
      return record ? record.map(entity => entity.toJSON()) : null;
    } catch (error) {
      console.error('Error retrieving record by ID:', error.message);
      throw error;
    }
  }

  async findById(id, transaction = null) {
    try {
      const record = await this.model.findByPk(id, { transaction });
      return record ? record.toJSON() : null;
    } catch (error) {
      console.error('Error retrieving record by ID:', error.message);
      throw error;
    }
  }

  async findByPhoneNumber(phoneNumber, transaction = null) {
    try {
      const record = await this.model.findOne({
        where: {
          phoneNumber: phoneNumber
        },
        transaction
      });
      return record ? record.toJSON() : null;
    } catch (error) {
      console.error('Error retrieving record by phone number:', error.message);
      throw error;
    }
  }
  

  async updateById(id, data, transaction = null) {
    try {
      const [updatedRows] = await this.model.update(data, {
        where: { id },
        transaction 
      });
      return updatedRows > 0;
    } catch (error) {
      console.error('Error updating record by ID:', error.message);
      throw error;
    }
  }

  /**
   * 
   * @param {Array} objects of objects 
   * @returns {boolean} 
   */
  async insertMany(data, transaction = null) {
    try {
      const updatedRows = await this.model.bulkCreate(data, transaction);
      return updatedRows.length > 0;
  }
     catch (error) {
      console.error('Error inserting records:', error.message);
      throw error;
    }
  }
}

module.exports = BaseRepository;
