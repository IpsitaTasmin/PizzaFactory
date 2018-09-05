


function PizzaOrderManager() {

    this.pizzas = [
        { id: 1, name: 'Pizza al Pesto' },
        { id: 2, name: 'Mediterranea' },
        { id: 3, name: 'Ortolana' },
		{ id: 4, name: 'Diavola' },
		{ id: 5, name: 'Rustica' },
		{ id: 6, name: 'Contadina' },
		{ id: 7, name: 'Ricotta e Spinaci' },
		{ id: 8, name: 'Padana' }
    ];
}


PizzaOrderManager.prototype.Pizzas = function() {
    return this.pizzas;
};




    var select = document.getElementById("selection_pizza");
    var orderManager = new PizzaOrderManager();
    
    orderManager.Pizzas().forEach(function(pizza, index) {
    	

        
     
       var piza_name = pizza ;
       
       
        
        var ele = document.createElement("option");
        ele.Value = pizza.id ;
        ele.textContent = pizza.name;
        
        select.appendChild(ele);
        
        

    });


	
window.onload = choose_pizza_function ;

function choose_pizza_function()
{
   
   // var pizza_selection = document.getElementById("select_id_1");
   
	var select = document.getElementById("selection_pizza");
    var pizza_name = select.options[select.selectedIndex].text;
    var pizza_value = select.options[select.selectedIndex].value ;

    document.getElementById("demo").innerHTML = pizza_name ;

    var table = document.getElementById("table_id");
    var pizzaOrderedCell = document.querySelector('td[data-id="'+ pizza_value +'"]');

	if( pizza_value ==0 ) {

	  document.getElementById("demo").innerText = "Select one!!!" ;
	  }
	  
    else if (pizzaOrderedCell)
    {
        const count = Number(pizzaOrderedCell.innerText);
        pizzaOrderedCell.innerText = count + 1;
        document.getElementById("demo").innerText = pizza_name + " is "+ (count == 0 ? " never" : count + " time(s)") +" ordered before!";
    }
    else
    { var row = table.insertRow(-1);
        var cell1= row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerText = pizza_name;
        cell2.innerText = 1;
        cell2.setAttribute("data-id", pizza_value);
        document.getElementById("demo").innerText = cell1.innerText + "   is never ordered before!";
    }
}



	
	
	
