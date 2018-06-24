const connection = require('./connection');


const orm = {
    selectAll: () => {
        connection.query("SELECT * FROM ??",["burgers"],(err,res) => {
                if(err) throw err;
                console.log(res);
                connection.end();
            })
    },
    insertOne: (burger_name) => {
        connection.query("INSERT INTO ?? (??) VALUES (??)",
        ["burgers","burger_name",burger_name],
        (err,res) => {
            if(err) throw err;
            console.log(res);
            connection.end();
        })
    },
    updateOne: (id) => {
        connection.query("UPDATE ?? WHERE ?? = ? AND id = ? (??)",
        ["burgers","devoured",0,id],
        (err,res) => {
            if(err) throw err;
            console.log(res);
            connection.end();
        })
    }
}

