import DisplayManger from "./modules/dispalyManger.js";
import QuoteManager from "./modules/QuoteManger.js"
import QuoteTextManager from "./modules/QuoteTextManager.js";



class App{

    constructor(){
        this.dManager = new DisplayManger();
        this.qManager = new QuoteManager();
        this.qtManager = new QuoteTextManager();
        this.displayModes = document.querySelectorAll(".mode");


        this.getNewQuoteBtn = null

    }

    init(){
        this.displayModes.forEach((item)=>{
            item.addEventListener('click',this.dManager.toggleMode);
        
        });
        this.qtManager.init();
        this.getNewQuoteBtn = document.querySelector(".next-quote-btn");

        this.getNewQuoteBtn.addEventListener("click" , this.qManager.getNewQuote);

    }
    



}

const GetQuote = new App();
GetQuote.init();



