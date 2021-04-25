const validate = require('jsonschema').validate

function RssController(db) {
    if(!new.target) {
        return new RssController(db)
    }

    const _db = db

    this.store = async(data) =>{
        _db.insert('user', { email: data.email, rss: data.rss || [] })
    }

    this.retrive = async(email) =>{
        return _db.find(email)
        console.log('elo')
    }
}

module.exports = RssController

