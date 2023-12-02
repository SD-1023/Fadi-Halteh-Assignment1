let Node = require("./Node.js")

 class DoublyLinkedList {
    constructor(){
        this.head=null;
        this.tail=null;
        this.list=[]
    }

    push(value){
        let newNode=new Node(value)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }
        else{
            this.tail.next=newNode
            newNode.previous=this.tail
            this.tail=newNode
        }
        this.list.push(newNode)
    }

    pop(){
        if(this.tail){
            this.tail=this.tail.previous
            this.tail.next=null
            this.list.pop()
        }
        else throw new Error('empty list')
    }

    shift(){
        if(this.head){
            this.head=this.head.next
            this.head.previous=null
            this.list.shift()
        }
        else throw new Error('empty list')

    }
    
    unshift(value){
        const newNode = new Node(value)
        if(this.head) {
        this.head.previous=newNode
        newNode.next=this.head
        this.head=newNode
        }
        else {
            this.head=newNode
            this.tail=newNode
        }
        this.list.unshift(newNode)
    }

    get(index){
        if(index<this.list.length){
            return this.list[index].value
        }
        else  throw new Error('no node at selected index')
    }

    set(index,value){
        const newNode = new Node(value)
        if ((index<this.list.length && index>=0)){
            if (this.head){
                this.list[index].value=value
            }
            else throw new Error('no node at selected index')
        }
         else throw new Error(`index is out of range list`) 
    }


    insert(index,value){
        const newNode = new Node(value)
        if (index<=this.list.length && index>=0){
            if (index<this.list.length && index!=0){
                this.list=[...this.list.slice(0,index),newNode,...this.list.slice(index)]
                this.list[index].next=this.list[index+1]
                this.list[index].previous=this.list[index-1]
                this.list[index-1].next=newNode
                this.list[index+1].previous=newNode
            }
            else if (index===0){
                this.unshift(value)
            }
            else if (index===this.list.length){
               this.push(value)
            }
            return true
        }
        else return false
    }

    remove(index){
        if(index>=0 && index<this.list.length){
            if(this.head){
                if (index<this.list.length-1 && index!=0){
                    this.list[index-1].next=this.list[index+1]
                    this.list[index+1].previous=this.list[index-1]
                    this.list=[...this.list.slice(0,index),...this.list.slice(index+1)]
                }
                else if (index===0){
                    this.shift()
                }
                else if (index===this.list.length-1){
                   this.pop()
                }
            }
           else throw new Error(`no nodes to remove`)  
        }
        else throw new Error(`no node at selected index`) 
    }
}

module.exports = DoublyLinkedList;

