var selected_tip = null;
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

function unselected_tip(){
    var selected_tip_btn = document.querySelector(".selected");
    if (selected_tip_btn != null){
        selected_tip_btn.classList.toggle("selected");
    }    
}

