const {MongoClient} = require('mongodb')
const promisify = require('utlis')

// describe("Test bazy danych", () =>{
//     test("Włóż wartość", () => {
//         const val = {a:2}
//         expect(val).toEqual({a:2})
//     })

//     test("znajdź wartość", () => {
//         const val = {a:2}
//         expect(val).toEqual({a:2})
//     })

//     test("Aktualizuj wartość", () => {
//         const val = {a:2}
//         expect(val).toEqual({a:2})
//     })

//     test("Usuń wartość", () => {
//         const val = {a:2}
//         expect(val).toEqual({a:2})
//     })  
// })


// 

// //Metoda promisify
class Db 
{
    
    constructor() {
        connect()
    }

    // insert(name,data){
    //     test('Insert into db', async () => {
    //         try {
    //             const resp = await request(app).get('/')
    //             // const resp = await request(app).delete('/')
    //             // const resp = await request(app).put('/')
    //             // const resp = await request(app).patch('/')
    //             expect(resp.statusCode).toBe(200)
    //             expect(resp.text).toBe('Hello World')
    //         } catch(e) {
    //             throw e
    //         }
    //     }
    // }

    find(name,query){

    }

    update(name,data){

    }

    remove(data){

    }
}

//Metoda callbackow
// class Db 
// {
//     constructor() {
//         connect()
//     }

//     insert(name,data,callback(err, data)){

//     }

//     find(name,query,callback(err, data)){

//     }

//     update(name,data,callback(err, data)){

//     }

//     remove(data,callback(err, data)){

//     }
// }


