const db = require('./connection');

const orm = {
    all: (cb) => {
        const sql = `SELECT * FROM burgers;`;

        db.connection.query(sql, (err, result) => {
            if (err) {
                throw err;
            } else {
                cb(result);
            }
        });
    },
    update: (id, cb) => {
        const sql = `UPDATE burgers SET devoured = true WHERE id = ${id};`;

        db.connection.query(sql, (err, result) => {
            if (err) {
                throw err;
            } else {
                cb(result);
            }
        });
    },
    create: (name, cb) => {
        const sql = `INSERT INTO burgers (burger_name) VALUES ("${name}");`;

        db.connection.query(sql, (err, result) => {
            if (err) {
                throw err;
            } else {
                cb(result);
            }
        });
    }
};

module.exports = orm;