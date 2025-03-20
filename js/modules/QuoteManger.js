import renderManager from "./renderManager.js";

class QuoteManager{

    constructor(){
        
        this.rManager = null;
        this.spinner = null;
        this.url = null;
        this.options = {method: 'GET', headers: {accept: 'application/json'}};


    }



    getNewQuote(){

        this.rManager = new renderManager();
        this.spinner = document.querySelector(".quote-box");
        this.spinner.classList.toggle("rotate");
        this.url = "https://api.freeapi.app/api/v1/public/quotes/quote/random";
        // fetching Data
        fetch(this.url)
            .then((res)=>res.json())
            .then((data)=>this.rManager.renderData(data["data"]))
            .catch((err)=>{
                console.log("Data Not Fetched",err);
            })
            .finally(()=>{
                this.spinner.classList.toggle("rotate");
            })
      

    



    }


}


export default QuoteManager;