import { initializeApp } from "https://playground-2-a060c-default-rtdb.europe-west1.firebasedatabase.app/"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-a611c-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementsListInDB = ref(database, "endorsementsList")

const inputFieldEl = document.getElementById("endorsementText")
const addButtonEl = document.getElementById("publishBtn")
const endorsementsListEl = document.getElementById("endorsementsList")


addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(endorsementsListInDB, inputValue)
    
    clearInputFieldEl()
})


onValue(endorsementsListInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearEndorsementsListEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToEndorsementsListEl(currentItem)
        }    
    } else {
        endorsementsListEl.innerHTML = "No items here... yet"
    }
})



function clearEndorsementsListEl() {
    endorsementsListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToEndorsementsListEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("li")
    
    newEl.textContent = itemValue
    
    newEl.addEventListener("click", function() {
        let exactLocationOfItemInDB = ref(database, `endorsementsList/${itemID}`)
        
        remove(exactLocationOfItemInDB)
    })
    
    shoppingListEl.append(newEl)
}