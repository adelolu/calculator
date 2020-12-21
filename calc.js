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
    var b = document.getElementById('ans').innerText;
    var c = document.getElementById('ans').innerHTML = `${b}${a}=`;
    var d = b.charAt(b.length-1);
    // console.log(d);
    var e = parseInt(document.getElementById('main').innerText);
    var f = parseInt(document.getElementById('ans').innerText);
    var g = f+d+e;
    // console.log(d);
    // console.log(g);
    
     main.innerHTML=eval(g);
     
      // var aaa = eval(g)
        // return aaa
// console.log(aaa);

    // function del() {    
    //   var a = document.getElementById('main').innerHTML;
    //   if (a== aaa ){
    //       document.getElementById('ans').innerHTML = null;
        
    //   } else {
    //     var b = a.slice(0,a.length-1)
    //     main.innerHTML = b;
    //   }
    
    // }
    // b.search('+')
    // console.log(b);

    // function calc(oper) {
    //     var a = c.includes(oper);
    //     console.log(a);
    //     // if (a == ) {
    //     //     document.getElementById('main').innerHTML =eval('a','b');
    //     //     // console.log(a);
    //     // } 
                                                                                                                                                      
    //   }
    //  calc('+');  
    
    // var c = document.getElementById('ans').innerHTML = `${a}=`;
    // var d = document.getElementById('main').innerHTML= null;
    // if ('ans'.innerHTML == c) {
        // var e = parseInt(document.getElementById('main').innerText);
        // var f = parseInt(document.getElementById('ans').innerText);
        // var g = '+';
        // console.log(g)
        // console.log(e);
        // console.log(f);
    //     // var g = document.getElementById('main').innerHTML=eval("e + f")
    //     // var g = '+';
    //     // if ( g = '+') {
    //     //             //    document.getElementById('main').innerHTML= e+f;
    //     //             console.log(e + f);

    //     //             }
    // }
}
  // var aaa = ope()
  // console.log(aaa);

// console.log(aaa);
// return
function del() {
  var a = document.getElementById('main').innerHTML;
  if (a== aaa ){
      document.getElementById('ans').innerHTML = null;
    
  } else {
    var b = a.slice(0,a.length-1)
    main.innerHTML = b;
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