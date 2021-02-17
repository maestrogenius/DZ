var term = {
    Canada: 10,
    Germany: 13,
    Spain: 22,
    Sloboda: 23,
    Smolevichi: 15
    };
    var sum = 0;
    var srednee = 0;
    for (let key in term){
        sum += term[key];
        srednee++
    }
    srednee=sum/srednee
    alert("Среднее значение температур: " + srednee );




    var max = 0;
    for (let key in term)
    {
        if(max < term[key])
        {
           max = term[key]
        }
     }
     alert("Панамка не помешает ибо очень жарко: " + max )
  