class Mesaj{
    constructor(author,text){
    this.author = author
    this.text = text
    }
    date = new Date()
     toString(){
        return `${this.date.getHours()}:${this.date.getMinutes()} ${this.author} ${this.text}` 
    }
}
    
class Cavab {
    constructor(){
        this.allmessages = []
    }
    
    send(author, text) {
        const message = new Mesaj(author,text)
        this.allmessages.push(message.toString())
    }
    show_history(){
        this.allmessages.forEach((item)=>{
            console.log(item)
        })
    }
   

}

let cavab = new Cavab()
cavab.send('Adil', 'ilk mesaj')
cavab.send('Məryəm', 'İkinci mesaj')
cavab.show_history()













