const orm = require('../config/orm');

const model = (app) => {
    app.post('/api/burgers', (req,res) => {
        orm.selectAll(res)
    })
}

module.exports = model;