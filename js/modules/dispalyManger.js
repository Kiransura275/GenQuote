//Display Manager which handles Dark Mode and Light MOde

class DisplayManger{

    constructor(){
        
        this.body = null;
        this.bgColorCls = null;

    }
   
    
    toggleMode(){   
        
        this.body = document.getElementById("body");
        this.bgColorCls = this.body.classList[0];
        this.body.classList.toggle("dark");
        this.body.classList.toggle("light");
        this.bgColorCls = (this.bgColorCls === "dark")?"light":"dark";
        
    }


}

export default DisplayManger;