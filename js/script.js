function day (cc,yy,mm,dd){
    return ((((cc/19)+1*cc-1)+((5*yy/4)) + ((26*(mm+1)/10)) + dd)%7)+1
  }
  function myClick(){
    var year = document.getElementById("year").value;
    var Month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var dd = new Date();
    dd.setDate(parseInt(day));
    dd.setMonth(parseInt(Month)-1);
    dd.setFullYear(parseInt(year));
    var t = dd.getDay();
    if(t===0){
        ("Sunday");
    }else if(t===1){
        ("Monday");
    }else if(t===2){
        ("Tuesday");
    }else if(t===3){
        ("Wednesday");
    }else if(t===4){
        ("Thursday");
    }else if(t===5){
        ("Friday");
    }else if(t===6){
        ("Saturday");
    }
    if(year==""||year>2056){
        alert("insert a valid year");
    }else if(Month=="" ||Month>12){
        alert("Enter a valid month");
    }else if(day=="" ||day>31){
        alert("Enter a valid month");
    }else if(document.getElementById("male").checked==true && document.getElementById("female").checked==false){
        alert("Your Akan name is" + maleName[t]);
    }else if(document.getElementById("male").checked==false && document.getElementById("female").checked==true){
        alert("Your Akan name is" + femaleName[t]);
    }
}
