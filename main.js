let  DoublyLinkedList = require("./DoublyLinkedList.js") 

const doubleList= new DoublyLinkedList();
doubleList.push(1)
doubleList.push(5)
doubleList.push(2)
doubleList.push(4)
doubleList.push(8)
doubleList.push(7)
try{
    console.log(doubleList);
    doubleList.pop()
    doubleList.shift()
    console.log(doubleList);
    doubleList.unshift(88)
    doubleList.insert(2,52)
    console.log(doubleList);
    doubleList.set(0,99)
    doubleList.remove(3)
    console.log(doubleList);
}
catch(error){
    console.log(error);
}
