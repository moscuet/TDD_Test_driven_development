module.exports= class BookStorage{
    constructor(data){
        if (!data) throw new Error('data storage missing');
        this.bookStorage = data;
    } 
    getById(id){
        if(!id) throw new Error('parameter missing');
        const targetBook = this.bookStorage.filter( book=> book.id ===id)
        return targetBook.length===0?null:targetBook
    }

    getAllIdsByName(value){
        return this.bookStorage.filter( book=> book.name===value)||[]
    }

    getAllBooksByAuthor(author){
        if(!author) throw new Error('missing parameter')
       return this.bookStorage.filter( book=> book.author===author)||[]
    }

    getAllBookAuthors(){
        const allBookWithAuthor = this.bookStorage.filter( book => book.author?true:false)
        const allAuthor = allBookWithAuthor? allBookWithAuthor.map( book => book.author) : []
        return Array.from (new Set(allAuthor))
    }

    hasTopics(id){
        if(!id) return false
        const targetBook = this.bookStorage.find( book => book.id ==id)
        return targetBook.topics.length>0? true:false
    }

    GetBookTopics (id){
        if(!id) throw new Error('parameter missing');
        const targetBook = this.bookStorage.find( book => book.id ==id)
        return targetBook.topics

    }

    getPriceWithoutExtras(id){
        if(!id) throw new Error('parameter missing');
        const targetBook = this.bookStorage.find( book => book.id==id)
        if(!targetBook) throw new Error('nothing found with given id')
        return targetBook.price
    }

    getTotalPrice(id){
        if(!id) throw new Error('parameter missing');
        const targetBook = this.bookStorage.find( book => book.id==id)
        if(!targetBook) throw new Error('nothing found with given id')
        const totalPrice =  targetBook.price +
            targetBook.extras.map( ext=>ext.price).reduce( total, num => total+num,0)
            return totalPrice                 
    }
    getPriceOfTheExtras(id){
        if(!id) throw new Error('parameter missing');
        const targetBook = this.bookStorage.find( book => book.id==id)
        if(!targetBook) throw new Error('nothing found with given id')
        const priceOfExtras = targetBook.extras.map( ext=>ext.price).reduce( total, num => total+num,0)
            return priceOfExtras                
    }
}

