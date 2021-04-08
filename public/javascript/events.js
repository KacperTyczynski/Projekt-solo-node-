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
        if(value === null){
            alert('Wprowadź url nim klikniesz "Dodaj"!')
            return
        } else {
            const key= localStorage.key(rssKey)
            const rsses = localStorage.getItem(value)  
            lsOutput.innerHTML+=`${value} <br />`
        }

/*
        if (value === null){
            alert('Proszę wpisać adres url!')
            return 
        } else {
            const rsses = localStorage.getItem(rssKey)  
            rsses.push(value)
        }
*/
}

btnDelete.onclick = function() {
    localStorage.clear()
    location.reload()
}

saveBtn.onclick = async function() {
    email.readOnly = true
    urlsy = new Array()
    const rssesKey= localStorage.key(rssKey)
    const rsses =localStorage.getItem(rssesKey)
    email
    let object ={}
    let koszyk = []
    object.email = email
    object.rsses = urlsy
    koszyk.push(object)

    const content = {
        'email' : email,
        'feed' : rsses
    }

    JSON.stringify(content)
    console.log(content)

    //fetch()

}
