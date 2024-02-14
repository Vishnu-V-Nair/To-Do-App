const items = []
const form = document.getElementById('form')
form.addEventListener('submit',(e) => {
    e.preventDefault()
    const itemInput = document.getElementById('item')
    const item = itemInput.value
items.push(item)
displayListInHTML()
})


function displayListInHTML(){
    const itemsList = document.getElementById('itemsList')
    itemsList.innerHTML =''
    
    for(let i=0; i<items.length; i++){
        const li = document.createElement('li')
        li.innerHTML = items[i]

        const button = document.createElement('button')

        button.innerHTML = 'Delete' + i
        li.append(button)
        button.addEventListener('click',()=>{
            items.splice(i,1)
            displayListInHTML()
        })
        itemsList.append(li)
    }
}