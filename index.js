var selected_tip = null;
var num_of_ppl = null;
var bill = 0;

select_tip_btn = document.querySelectorAll("#select-tip");
reset_btn = document.querySelector(".result button");


for (var i=0; i < 5; i++){
    select_tip_btn[i].addEventListener("click", function(){              
        selected_tip = this.innerText.slice(0,-1);                                
        unselected_tip();
        this.classList.toggle("selected");    
        reset_btn.disabled = false;     
        update_result()       
    });    
}

document.querySelector("#tip-percent-input").addEventListener("input", function(){        
    unselected_tip();
    selected_tip = this.value; 
    reset_btn.disabled = false;
    update_result()
});

document.querySelector("#bill-input").addEventListener("input", function(){            
    bill = this.value; 
    reset_btn.disabled = false;
    update_result()
});

document.querySelector("#num-ppl-input").addEventListener("input", function(){
    reset_btn.disabled = false;   
    update_result() 
    if (this.value == 0){        
        this.style.setProperty('border-color', 'hsl(0, 100%, 66%)');
        document.querySelector(".invalid-value-mess").style.color = "hsl(0, 100%, 66%)";
        num_of_ppl = null;
    }  
    else{
        this.style.setProperty('border-color', 'hsl(172, 67%, 45%)');
        document.querySelector(".invalid-value-mess").style.color = "hsl(0, 0%, 100%)";
        num_of_ppl = this.value;
    }  
});

reset_btn.addEventListener("click", function(){
    location.reload();
})

function unselected_tip(){
    var selected_tip_btn = document.querySelector(".selected");
    if (selected_tip_btn != null){
        selected_tip_btn.classList.toggle("selected");
    }    
}

function calc_tip(){
    return bill*(selected_tip/100);
}

function update_result(){
    tip_amount = calc_tip();
    document.querySelector("#tip-amount").innerHTML = "$" + tip_amount;
    document.querySelector("#total").innerHTML = "$" + tip_amount/num_of_ppl;
}

