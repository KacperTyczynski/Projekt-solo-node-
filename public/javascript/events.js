const myForm= document.querySelector('#urlAdd')
const rss = document.querySelector('#url')
const tabela = document.querySelector('#tabela')

myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault()  
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(`${rss.value}`))

    tabela.appendChild(li)


    nameInput.value = ''

}

//// Nie działa na serwerze, jak odpalam index.html tak o to śmiga. Trzeba by pewnie owrappować w klasę i wyeksportować moduł 
//// + trzeba wynik i tak zapisać w pamięci podręcznej, póki co widziałem jedynie opcje w node-cache 
