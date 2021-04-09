const DB = require('../../src/storage/db')
const db = new DB()
const config = require('config')


const inptRss = document.getElementById("url")
const btnInsert = document.getElementById("btn")
const lsOutput = document.getElementById("lsOutput")
const btnDelete = document.getElementById("btn2")
const saveBtn = document.getElementById("savebtn")
const previewBtn = document.getElementById("previewbtn")
const sendBtn = document.getElementById("sendbtn")
const email = document.getElementById('e-mail')
const rssKey = "rss"

btnInsert.onclick = function() {
        const value = inptRss.value
        if(!value){
            alert('Wprowadź url nim klikniesz "Dodaj"!')
            return
        } else {
            localStorage.setItem(rssKey, value)
            const key= localStorage.key(rssKey)
            const rsses = localStorage.getItem(key)  
            lsOutput.innerHTML+=`<div class = "lsOutput">${value} </div>`
}

btnDelete.onclick = function() {
    localStorage.clear()
    location.reload()
}

saveBtn.onclick = async function() {
    const emailValue = email.value;
    email.readOnly = true
    urlsy = [];
    const urlsToSend = document.querySelectorAll('.lsOutput');
    urlsToSend.forEach((item) => {
        urlsy.push(item.innerHTML)
    })
    const rssesKey = localStorage.key(rssKey);
    const urlAwait = await localStorage.setItem(rssKey, urlsy)
    const rsses = localStorage.getItem(rssesKey);



    const content = {
        'email' : emailValue,
        'feed' : rsses
    }

    JSON.stringify(content)
    console.log(content)

    /*
    await db.insert(config.name, content)
    return content
    */
}
}
