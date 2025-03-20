class renderManager{

    constructor(){
        
        this.quote = null;
        this.author = null;

    }

    renderData(data){

        const {content , author} = data;
        
        this.quote = document.querySelector('.quote-text');
        this.author = document.querySelector('.quote-author');

        this.quote.textContent = content;
        this.author.textContent = "-"+author;


    }
}

export default renderManager;