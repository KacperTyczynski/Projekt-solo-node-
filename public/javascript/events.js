const inptRss = document.getElementById("url")
const btnInsert = document.getElementById("btn")
const lsOutput = document.getElementById("lsOutput")
const bodycontent = document.getElementById("bodycontent")
const btnDelete = document.getElementById("btn2")
const saveBtn = document.getElementById("savebtn")
const previewBtn = document.getElementById("previewbtn")
const sendBtn = document.getElementById("sendbtn")
const email = document.getElementById('e-mail')

const rssKey = "rss"
const urls = []

btnInsert.onclick = async function() {
    const value = inptRss.value
    if(!value){
        alert('Wprowadź url nim klikniesz "Dodaj"!')
        return
    } else {


        lsOutput.innerHTML+=`<div class = "lsOutput">${value} </div>`
        const urlsToSend = document.querySelectorAll('.lsOutput');

        for(let urlToSend of urlsToSend){
            await urls.push(urlToSend.innerHTML)
            localStorage.setItem(rssKey,urls)
        }
        return Promise.all(urls)
    }   
}

btnDelete.onclick = function() {
    localStorage.clear()
    location.reload()
}

saveBtn.onclick = async function() {
    try{
        email.readOnly = true
        rssValue = urls
        emailValue = document.getElementById('e-mail').value
        content = JSON.stringify(emailValue)
        const data ={ content, rssValue }
        const fetch = await fetch('/send',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('sukces', data)
        })
    } catch (e){
        console.log(e.message+ 'error')
    }

    

}