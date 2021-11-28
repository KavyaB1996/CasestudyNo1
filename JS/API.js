
var count = 0;
//Creating a function which will be called when button is clicked
function ajax(){
    // Creating an XHR object and assign it to a var xhttp
    var xhttp = new XMLHttpRequest();
    
    var stts = document.getElementById("stts");
    //Event listener to check if the status of req is changing
    xhttp.onreadystatechange = function(){
    
        //if readystatus is changed to done(4) & status changed to 200(server processed the req)
        if(this.readyState==4 && this.status==200){
    
            // Copying contents from server to div block, reponseText contains content of server
            // JSON.parse will convert the JSON text to normal text inside reponse Text and store it in var reponse
            // document.getElementById("demo").innerHTML = JSON.parse(this.responseText);
           var response = JSON.parse(this.responseText);    
           var tbody = document.getElementById('tbody');
           var sub = document.getElementById('sub');
           var status = document.getElementById('status');
        
        
		for (var i = 0; i < response.length; i++){
            var mark = response[i].completed;
            if(mark == true)
            {
                var row = `<tr class = "table-primary">
							<td>${response[i].title}</td>
                            <td ><input type="checkbox" checked disabled = "true" ></td>
					  </tr>`
			    tbody.innerHTML += row;

            }
            else if(mark == false)
            {
                var row = `<tr class = "table-primary">
							<td>${response[i].title}</td>
                            <td><input type="checkbox" onchange = "myFunction()" id = "stts" ></td>
					  </tr>`
			    tbody.innerHTML += row;
            }


        }
        // console.log(row);


    }

    
    }

    

    // for(i=0;i<response.length;i++)
    // {
    // var checkBox = document.getElementById("stts");
    // checkBox.onchange = function() {myFunction};
    // }

        //Instantiating req object
        //GET bcz we r taking only small amount of data
        //person.json --> url of server from which info to b taken
        xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    
        //send req to server
        xhttp.send();
    


}

function myFunction(){
    
//     // Get the checkbox

//     var checkBox = document.getElementById("stts");
//     // console.log(checkBox.value);
//   console.log(checkBox.checked);

//   // Get the output text
// //   var text = document.getElementById("text");

//   // If the checkbox is checked, display the output text
//   if (checkBox.checked == true){
//     count++;
//     console.log(count);
//   }
  

//   if(count == 5)
//   {
//       alert("Congrats! 5 Tasks have been Successfully Completed");
//       count = 0;
//   }

  var checkboxes = document.querySelectorAll('input[id="stts"]:checked');
    if(checkboxes.length == 5)
    {
        alert("Congrats! 5 Tasks have been Successfully Completed");
    }
 
}