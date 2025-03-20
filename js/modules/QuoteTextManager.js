
class QuoteTextManager{


    constructor(){
        this.copy = null;
        this.export = null;
        this.share = null;
        this.quote = null;

    }

    init(){
        
        this.copy = document.querySelector(".copy");
        this.export = document.querySelector(".export");
        this.share = document.querySelector(".share");
        this.copy.addEventListener('click',this.handleCopy.bind(this))
        this.export.addEventListener('click',this.handleExport.bind(this));
        this.share.addEventListener('click',this.handleShare.bind(this));
        this.quote = document.querySelector(".quote-text");
        

    }

    async handleCopy(){       
        
        alert("Copied",this.quote.textContent);
        await navigator.clipboard.writeText(this.quote.textContent);
    }

    handleShare(){
        open(`https://twitter.com/intent/tweet?text=New%20Day%20New%20Quote%20:%0A'${this.quote.textContent}'`,"_blank")
    }

    async handleExport(){

       
        html2canvas(this.quote,{useCORS: true})
            .then((canvas)=>{
                const image = canvas.toDataURL("image/jpeg");
                const link = document.createElement("a");
                link.href = image;
                link.download  = "quote.jpeg";
                link.click(); 



            })
            .catch((err)=>{
                console.log("Image can't be exported !")
            })
        
    }
}

export default QuoteTextManager