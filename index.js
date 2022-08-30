var selected_tip = 0;
var num_of_ppl = 0;
var bill = 0;

select_tip_btn = document.querySelectorAll("#select-tip");

for (var i=0; i < 5; i++){
    select_tip_btn[i].addEventListener("click", function(){              
        selected_tip = this.innerText.slice(0,-1);                                
        unselected_tip();
        this.classList.toggle("selected");                
    });    
}

document.querySelector("#tip-percent-input").addEventListener("input", function(){        
    unselected_tip();
    selected_tip = this.value; 
});

document.querySelector("#num-ppl-input").addEventListener("input", function(){
    if (this.value <= 0){
        if (this.value == 0){
            document.querySelector(".invalid-value-mess").innerHTML = "Can't be zero";
        }
        else{
            document.querySelector(".invalid-value-mess").innerHTML = "Invalid value";
        }
        this.style.setProperty('border-color', 'hsl(0, 100%, 66%)');
        document.querySelector(".invalid-value-mess").style.color = "hsl(0, 100%, 66%)";
    }  
    else{
        this.style.setProperty('border-color', 'hsl(172, 67%, 45%)');
        document.querySelector(".invalid-value-mess").style.color = "hsl(0, 0%, 100%)";
    }  
});

function unselected_tip(){
    var selected_tip_btn = document.querySelector(".selected");
    if (selected_tip_btn != null){
        selected_tip_btn.classList.toggle("selected");
    }    
}

