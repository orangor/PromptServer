import mysql from "mysql"
import { CARD_CELL, CARD_NODE } from "../const/const"
var seed = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '19973232abc',
    port: 3306,
    database: 'seed'
});
seed.connect();
/*
seed.connect();
var sql = 'SELECT * FROM card_cell '
var sql2 = 'INSERT INTO card_cell(cell_id,name) VALUES (?,?)';
var sql3 = 'UPDATE card_cell SET cell_id =? ,name = ? WHERE  id= ?';
var sql4 = 'DELETE FROM card_cell where id=7';
var cell = ["yy", "fil"]
var newcell = ["bbll", "bbbid", 2]
seed.query(sql2, cell, function (err, result) {
    if (err) {
        console.log('[INSERT ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);        
    console.log('INSERT ID:', result);
    console.log('-----------------------------------------------------------------\n\n');
})
seed.query(sql3, newcell, function (err, result) {
    if (err) {
        console.log('[UPDATE ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------UPDATE----------------------------');
    console.log('UPDATE success', result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});
seed.query(sql4, function (err, result) {
    if (err) {
        console.log('[DELETE ERROR] - ', err.message);
        return;
    }

    console.log('--------------------------DELETE----------------------------');
    console.log('DELETE success', result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});
seed.query(sql, function (err, result) {
    if (err) {
        console.log('[SELECT ERROR] - ', err.message);
        return;
    }
    console.log(result);
});
seed.end()*/

let get_data_all = async function (sql: string): Promise<any> {


    return new Promise(function (resolve, reject) {

        seed.query(sql, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });




    }
    )
}

let add_cell = async function (dd: any): Promise<any> {
    let sql = 'INSERT INTO card_cell(card_id,name) VALUES (?,?)';
    return new Promise(function (resolve, reject) {
        let data = [dd.card_id, dd.name]        
       seed.query(sql, data, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    }
    )
}
let update_cell= async function (dd: any): Promise<any> {
 let    sql= 'UPDATE card_cell SET name = ?,context = ?,card_id = ? WHERE  id= ?';
 let newcell=[dd.name,dd.context,dd.card_id,dd.id]
 return new Promise(function (resolve, reject) {
 seed.query(sql, newcell, function (err, result) {
    
        if (err) {
            reject(err);
        } else {
            resolve("ok");
        }
    
    console.log('--------------------------UPDATE----------------------------');
    console.log('UPDATE success', result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});

})
}
let add_card = async function (dd: any): Promise<any> {
    let sql = 'INSERT INTO card(name,nth) VALUES (?,?)';
    return new Promise(function (resolve, reject) {
        let data = [dd.param.name, dd.param.nth]
        seed.query(sql, data, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    }
    )
}
let add_word = async function (dd: any): Promise<any> {
    let sql = 'INSERT INTO dou_word(word,type) VALUES (?,?)';
    return new Promise(function (resolve, reject) {
        let data = [dd.word, dd.type]        
       seed.query(sql, data, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    }
    )
}
let add_song= async function (text:string,type:string,label:string): Promise<any> {
    let sql = 'INSERT INTO good_sentences(text,type,label) VALUES (?,?,?)';
    return new Promise(function (resolve, reject) {
        let data = [text,type,label]        
       seed.query(sql, data, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    }
    )
}


const SEED = { getData: get_data_all, addCard: add_card, addCell: add_cell,updateCell:update_cell ,addWord:add_word,addSong:add_song}
export { SEED }
    // seed.end()
