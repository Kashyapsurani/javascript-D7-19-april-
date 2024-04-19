var a = 100;
var t = 10;

if(a > 100 && t > 10 ){
    var tax = (t/100)*a
    var totle = a + tax;
    var dis = totle*(10/100)
    var final = (totle-dis)
    console.log(final)
}else{
    var tax = (t/100)*a
    var totle = a + tax;
    console.log(totle)
}