var dep_val = document.getElementById("dep-val");
var dep_inp = document.getElementById("dep-inp");
var dep_btn = document.getElementById("dep-btn");

var drw_val = document.getElementById("drw-val");
var drw_inp = document.getElementById("drw-inp");
var drw_btn = document.getElementById("drw-btn");

var total_val = document.getElementById("total-val");

function deposit(){
    // var record = JSON.stringify(myArray);
    // localStorage.getItem(myArray.UserName ,record);
    // document.getElementById("logName").innerHTML = record;
    
    if(document.getElementById("dep-inp").value !=="") {
        
        depFunction();
    } else { 
        alert("please fill this ")
    }
}
function depFunction() {
    var dep_inp = document.getElementById("dep-inp").value;
    var dep_val = document.getElementById("dep-val");

   

    if (parseInt(dep_val.innerText) >= 0) {
        dep_val.innerText = parseInt(dep_val.innerText) + parseInt(dep_inp);
    } else {
        dep_val.innerText = dep_inp;
    }

    var total_val = document.getElementById("total-val").innerText;

    var total = parseInt(dep_inp) + parseInt(total_val);
    document.getElementById ("total-val").innerText = total;

    var dep_inp = document.getElementById("dep-inp").value;
    var type = "Cash Deposit";
    var date = new Date().toLocaleString(undefined, {year: 'numeric', month: '2-digit', day: '2-digit', weekday:"long", hour: '2-digit', hour12: false, minute:'2-digit', second:'2-digit'}) ;
    // date.setFullYear(2020, 11, 3);


    $('#mytable').append('<tr> <td class="data">' + '$' + dep_inp + '</td> <td class="data">' + type + '</td> <td class="data">' + date + '</td>  <td class="data">'  + '$' +total+'</td> </tr>');
   
    

    var dep_inp = document.getElementById("dep-inp").value = "";

}

function withDraw(){
    if (document.getElementById("drw-inp").value !=="") {
        cashDrawal();
    }else{
        alert("please fill this ")
    }
}
function cashDrawal() {
    var drw_inp = document.getElementById("drw-inp").value;
    var drw_val = document.getElementById("drw-val");

    if (parseInt(drw_val.innerText) >= 0) {
        drw_val.innerText = parseInt(drw_val.innerText) + parseInt(drw_inp);
        console.log(parseInt(drw_val.innerText));
        console.log(drw_val);
    } else {
        drw_val.innerText = drw_inp;
    }

    var total_val = document.getElementById("total-val").innerText;

    var subtract = parseInt(total_val) - parseInt(drw_inp);
    document.getElementById("total-val").innerText = subtract;



    var drw_inp = document.getElementById("drw-inp").value;
    var type = "With Drawal";
    var date = new Date().toLocaleString(undefined, {year: 'numeric', month: '2-digit', day: '2-digit', weekday:"long", hour: '2-digit', hour12: false, minute:'2-digit', second:'2-digit'}) ;


    $('#mytable').append('<tr> <td  class="data">' + '$' + drw_inp + '</td> <td  class="data">' + type + '</td> <td  class="data">' + date + '</td> <td class="data">'  + '$' +subtract+'</td> </tr>');

    var drw_inp = document.getElementById("drw-inp").value = "";
}


function record(){
    var data= document.getElementById("records");
    data.style.display =  "block";

    var hide = document.getElementById("chk-record");
    hide.style.display =  "none";

    var show = document.getElementById("hide-record");
    show.style.display =  "block";
}

function hide(){
    var data= document.getElementById("records");
    data.style.display =  "none";

    var hide = document.getElementById("chk-record");
    hide.style.display =  "block";

    var show = document.getElementById("hide-record");
    show.style.display =  "none";
}

