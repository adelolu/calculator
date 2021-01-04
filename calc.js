function number(num) {
    document.getElementById('main').innerHTML  += num;
}
function clears(clrs) {
    document.getElementById('main').innerHTML = clrs;
}
function clr() {
  document.getElementById('main').innerHTML = '';
  document.getElementById('ans').innerHTML = '';
}
function dstan(params) {
  document.getElementById('stan').style.display = 'inherit'
  document.getElementById('scien').style.display = 'none'

}
function dscien(params) {
  document.getElementById('stan').style.display = 'none'

  document.getElementById('scien').style.display = 'inherit'
}
function calc(oper) {
  var a =  document.getElementById('main').innerHTML += oper;
  if ('main'!= null) {
    document.getElementById('ans').innerHTML = a;
  };

  if ( a == oper) {
    document.getElementById('ans').innerHTML= 0 +' ' + oper ;
  };
  document.getElementById('main').innerHTML = null;
                                                                                                                                                      
}
function ope() {
    
    var a = document.getElementById('main').innerText;
    // console.log(a);

    var b = document.getElementById('ans').innerText;
    // console.log(b);

    var c = document.getElementById('ans').innerHTML = `${b}${a}=`;
    // console.log(c);

    var d = b.charAt(b.length-1);
    // console.log(d);
    var e = parseInt(document.getElementById('main').innerText);
    var f = parseInt(document.getElementById('ans').innerText);
    var g = f+d+e;
    // console.log(f);
    // console.log(d);
    // console.log(e);
    // console.log(g);
    
    // var temi = main.innerHTML='g';
    //  console.log(temi);

      var aaa = eval(g)
        // return aaa
// console.log(aaa);

// document.getElementById('main').innerHTML = null;
document.getElementById('main').innerHTML =' '+aaa;
// ans.innerHTML = aaa;

}
 
function sdel() {
  var a = document.getElementById('ans').innerText
    var b = document.getElementById('main').innerHTML
    y = b.length
    z = b.charAt(0)
    // console.log(z);
    // console.log(y);
      if (b == '0') {
        // console.log('hiiii');

        document.getElementById('main').innerText = '0'
    }
    else if (b !== 0 && z !== ' ') {
        // console.log('sup');
        c = b.slice(0,b.length-1)
    var d = document.getElementById('main').innerText = c
       var m = b.length
    //    console.log(m);
       if (m == 1) {
     document.getElementById('main').innerText = 0
           
       }
}
}
  
function sqra() {
    var a =  document.getElementById('main').innerText;
    var b = document.getElementById('ans').innerText ='sqr('+a+')'
    var c =  document.getElementById('main').innerText= eval('a * a')                                                
  }
  function sqr() {
    var a =  document.getElementById('main').innerText;
    var b = document.getElementById('ans').innerText ='_/('+a+')'
    var c =  document.getElementById('main').innerText=  Math.sqrt(a)                                                
  }
function pam() {
  var a = document.getElementById('main').innerHTML;
 if (a === null) {
   var z =document.getElementById('main').innerText= a;
   console.log(z);
 } 
   else   if (a > 0) {
    var c =document.getElementById('main').innerText = '-'+ a;
  } 
  else if (a<=-1){ 
    var d =a.substr(1,a.length+1);
    document.getElementById('main').innerText = d;
  }
  
}
  function hall() {
    var a = document.getElementById('main').innerText ;
    if (a === '') {
      var b = document.getElementById('ans').innerText= '1/(0)'
       main.innerText = 'Cannot divide by zero'
    } else {
      var b = document.getElementById('ans').innerText= '1/(' +a+ ')'
      main.innerText = eval('1/a')
    }
  }



  // function henshaw(){
  //   let sq = prompt("please enter a number to find its sq root");

  //   sq = Number(sq)

  //   let rem = sq % 2;

  //   // if(rem == 0){
  //     for (let index = 0; index < sq; index = index + 1) {
  //       // var b = index.toString().slice(0,index.toString().indexOf('.') +2);
  //       // // console.log(b);
  //       // if (b.endsWith('0')) {
  //       //   b = b.substr(0,1)
  //       //   // console.log(b)
  //       // }
  //       // b = parseFloat(b)
       
  //       let cal = index * index;
  //       console.log(cal)
        
  //       if(cal == sq){
  //         console.log(index)
  //         break;
  //       }
  //     }
    // }else{
    //   console.log("not a perfect number")
    // }

   

  // }

  // henshaw()


 
// }

// crazy()