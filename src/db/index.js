import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('localData.db');

export const init = () => {

    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS localData (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL);',
                [],
                () => resolve(),
                (_, error) => reject(error),
            )
        })
    })
    return promise
}

export const insertData = ({localId, email, token}) => {

    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO localData (localId, email, token) VALUES (?,?,?);',
                [localId, email, token],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}

export const fetchData = () => {

    const promise = new Promise((resolve, reject) => {

        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM localData ;',
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}

export const deleteData = (localId) => {

    const promise = new Promise((resolve, reject) => {

        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM localData WHERE localId = ?;',
                [localId],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            )
        })
    })
    return promise
}