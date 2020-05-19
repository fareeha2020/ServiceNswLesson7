 v=5;
console.log(v);
var v;

function fn1(stg)
{
    let x="hi";
    if(true)
    {
        let y="hello";
        console.log(x);
         
    }
    //console.log(y);y is just local scope to if statement and is disposed just when we finish it}
     //disposed of means no longer in memory,cant access
     
    console.log(stg);
}
fn1("bye");
//console.log(x);cannot as it is lifecycle is just under function {}
