const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

class client{
    constructor(){

        this.saveBtn = () => {
            const saveBtn = document.getElementById('savebtn')
            saveBtn.addEventListener('click', function(e) {
                document.getElementById('e-mail').readOnly = True
            })

        }

        this.addBtn = () => {
            const addBtn = document.getElementById('add')
            const rss = document.getElementById('id')
            const rssArray = { my : "rssUrl", var : rss}
            const succes = myCache.set("myKey", rssArray, 10000)


        }

    }

    


}