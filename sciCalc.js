 
function numbers(num) {
    var jan = document.getElementById('maindiv').innerHTML;
    var b = document.getElementById('ansdiv').innerText

    // var apr = document.getElementById('ansdiv').innerText = 0;
    var march = document.getElementById('cell').innerText
    june = b.includes('(')
    feb = jan.charAt(0)
    console.log(june);
    // if (june = true) {
    // document.getElementById('ansdiv').innerHTML  += num;
        
    // }
    if (jan === '0') {
    document.getElementById('maindiv').innerHTML  = num;
        
    }else if (feb == ' ') {
    document.getElementById('maindiv').innerHTML  = num;
        
    }
     else {
    document.getElementById('maindiv').innerHTML  += num;
        
    }
    if ( march == 'C' && jan !== 0) {
        document.getElementById('cell').innerText = 'CE'
    }
    
    // document.getElementById('maindiv').innerHTML  += num;
}
function cce (params) {
    var a = document.getElementById('maindiv').innerText
    var b = document.getElementById('ansdiv').innerText
   var c = document.getElementById('cell').innerText
//    console.log(b);
   if (c == 'CE') {
    if ( a != 0 || b == ' ' || b !== ' ')  {
        document.getElementById('maindiv').innerText = '0'
        document.getElementById('ansdiv').innerText = ' '
        // if (a == '0' && b == ' ') {
            document.getElementById('cell').innerText= 'C'
        //    }
    }
    
   }else if (c =='C') {
    document.getElementById('ansdiv').innerText = ' '
    document.getElementById('maindiv').innerText = '0'
   }
   
}
function second() {
    var bby = document.getElementById('ssec').style.backgroundColor;
    var check = document.getElementById('raise').innerHTML;
    var check2 = document.getElementById('power').innerHTML;
    var check3 = document.getElementById('maluu').innerHTML;
    var check4 = document.getElementById('cow').innerHTML;
    var check5 = document.getElementById('pig').innerHTML;
    var check6 = document.getElementById('dog').innerHTML;
    var gree = ' rgba(35, 77, 66, 0.836)' ;

    if (bby== '') {
        // if (bby== 'transparent') {
    document.getElementById('ssec').style.backgroundColor= gree; 
    }
    else{
        document.getElementById('ssec').style.backgroundColor='';
        
    }
    if (check === 'x<sup>2</sup>') {
    // var raise = document.getElementById('raise').innerText ='x2';
    document.getElementById('raise').innerHTML= 'x<sup>3</sup>'; 
    // console.log(check);
    } 
    else {
    // console.log(check);
    document.getElementById('raise').innerHTML='x<sup>2</sup>' ; 
        
    }
    if (check2 === '<sup>2</sup>_/x') {
        // var raise = document.getElementById('raise').innerText ='x2';
        document.getElementById('power').innerHTML= '<sup>3</sup>_/x'; 
        // console.log(check);
    }
    else {
        // console.log(check);
        document.getElementById('power').innerHTML='<sup>2</sup>_/x' ; 
            
    }
    if (check3 === 'x <sup>y</sup>') {
        // var raise = document.getElementById('raise').innerText ='x2';
        document.getElementById('maluu').innerHTML= '<sup>y</sup>_/x'; 
        // console.log(check);
    }
    else {
        // console.log(check);
        document.getElementById('maluu').innerHTML='x <sup>y</sup>' ; 
            
    }
    if (check4 === '10<sup>x</sup>') {
        // var raise = document.getElementById('raise').innerText ='x2';
        document.getElementById('cow').innerHTML= '2<sup>x</sup>'; 
        // console.log(check);
    }
    else {
        // console.log(check);
        document.getElementById('cow').innerHTML='10<sup>x</sup>' ; 
            
    }
    if (check5 == 'log') {
        // var raise = document.getElementById('raise').innerText ='x2';
        document.getElementById('pig').innerHTML= 'log<sub>y</sub>x'; 
        // console.log(check);
    }
    else {
        // console.log(check);
        document.getElementById('pig').innerHTML='log' ; 
            
    }
    if (check6 == 'In') {
        // var raise = document.getElementById('raise').innerText ='x2';
        document.getElementById('dog').innerHTML= 'e<sup>x</sup>'; 
        // console.log(check);
    }
    else {
        // console.log(check);
        document.getElementById('dog').innerHTML='In' ; 
            
    }
}
function nap() {
    var a = document.getElementById('maindiv').innerText ;
  if (a == '') {
    var b = document.getElementById('maindiv').innerText= 0; 
  } else {
  }
}
function chichi() {
    var a = document.getElementById('deg').innerText;
    if (a == 'DEG') {
      a =  document.getElementById('deg').innerText= 'RAD'  
    } else if (a == 'RAD') {
      a=  document.getElementById('deg').innerText = 'GRAD'
    }else if (a == 'GRAD') {
        document.getElementById('deg').innerText='DEG'
    }
}
function bobo() {
    var a = document.getElementById('fall').style.borderBottomColor;
    if (a == '') {
    document.getElementById('fall').style.borderBottomColor = 'rgb(35, 77, 66)'  
    }else{
    document.getElementById('fall').style.borderBottomColor = ''
    }
}
// start bracket open code 
function brcko() {
    var z = document.getElementById('ansdiv').innerHTML
    y = z.slice(0,1)
    t = z.includes('+')
    if (y == '(') {
    // document.getElementById('ansdiv').innerHTML= '';
    var a = document.getElementById('ansdiv').innerHTML += '(';
    }else if (t = true) {
        var a = document.getElementById('ansdiv').innerHTML += '(';
        document.getElementById('maindiv').innerHTML= 0
        
    } 
    else {
       var a = document.getElementById('ansdiv').innerHTML += '(';
    }
}
// end 
function brckc() {
    var z= document.getElementById('ansdiv').innerText
   if (z === '') {
       document.getElementById('ansdiv').innerText=''
   }else if(z !== ''){
    var b = document.getElementById('maindiv').innerText
    var d = document.getElementById('ansdiv').innerHTML
    var w = document.getElementById('ansdiv').innerHTML += b+')'
    var e = d.substring(1,d.length-1)
    var c = d.substring(d.length-1)
    // console.log(e);
    var f = parseInt(b);
    var h = parseInt(e);
    // var g = parseInt(g)
    if (c == '+') {
    // console.log(g);
      var g = f+h;
      document.getElementById('maindiv').innerText =' '+ g; 
    }else if (c == '-') {
        var g = f-h;
        document.getElementById('maindiv').innerText =' '+  g; 
    }else if (c == '*') {
        var g = f*h;
        document.getElementById('maindiv').innerText =' '+  g; 
    }else if (c == '/') {
        var g = f/h;
        document.getElementById('maindiv').innerText = ' '+ g; 
    }
   }
}
function base(bade) {
    var a = document.getElementById('maindiv').innerText
    var b = document.getElementById('ansdiv').innerText ;

    tomtom =b.includes('(')

    document.getElementById('maindiv').innerText ='';

    var z = document.getElementById('ansdiv').innerText;
    var c = z.includes('=')
    console.log(tomtom);
    if (c = true && tomtom == false) {
        console.log('hiii');
        document.getElementById('ansdiv').innerText = a
        var a = document.getElementById('maindiv').innerText
        var b = document.getElementById('ansdiv').innerText += a + bade;
        document.getElementById('maindiv').innerText ='';
        
    }
    else if(tomtom = true ){
        console.log('sup');
        var a = document.getElementById('maindiv').innerText
        console.log(a);
        var b = document.getElementById('ansdiv').innerText = '(' + a + bade;
        document.getElementById('maindiv').innerText ='';
    
    }
    else{
        var a = document.getElementById('maindiv').innerText
        var b = document.getElementById('ansdiv').innerText += a + bade;
        document.getElementById('maindiv').innerText ='';
    }
}
function baby() {
    var z = document.getElementById('ansdiv').innerText;
    var x = z.charAt(0)
    var t = parseFloat(x)
    var y = typeof(p)
    
    var o = typeof(t)
    var r = z.includes('^')
    var p = z.includes('yroot')
    var q = z.includes('mod')
    aa = z.includes('abs')
    ab = z.includes('1/')
    // console.log(ab);
    oo = isNaN(t)


    if (x !== '(' && r == false && p == false && q == false && aa == false && ab == false)  {
    console.log('tems');
        var a = document.getElementById('ansdiv').innerText;
    var b = document.getElementById('maindiv').innerText;
    var c = a.substring(a.length-1)
    var d = a.substring(0 , a.length-1)
    document.getElementById('ansdiv').innerText = a + b +'=';
    var e = parseInt(d);
    var f = parseInt(b);
    if (c == '+') {
      var g = e+f;
      laa= document.getElementById('maindiv').innerText = ' '+ g; 
      lau = laa.charAt(0)
    }else if (c == '-') {
        var g = e-f;
        document.getElementById('maindiv').innerText = ' '+g; 
    }else if (c == '*') {
        var g = e*f;
        document.getElementById('maindiv').innerText = ' '+g; 
    }else if (c == '/') {
        var g = e/f;
        document.getElementById('maindiv').innerText = ' '+g; 
    }
    }else if (x == '(') {
        // console.log(z.slice(1,z.length-1));
        tolu = z.slice(1,z.length-1);
        wa = document.getElementById('maindiv').innerText
        ni = z.slice(z.length-1)
        // console.log(ni);
        var f = parseInt(tolu);
        var h = parseInt(wa);
        // var g = parseInt(g)
        if (ni == '+') {
        // console.log(g);
          var g = f+h;
          document.getElementById('ansdiv').innerText = `(${tolu}${ni}${wa})=`
          document.getElementById('maindiv').innerText = ' '+g; 
        }else if (ni == '-') {
            var g = f-h;
          document.getElementById('ansdiv').innerText = `(${tolu}${ni}${wa})=`
          document.getElementById('maindiv').innerText = ' '+g; 
        }else if (ni == '*') {
            var g = f*h;
          document.getElementById('ansdiv').innerText = `(${tolu}${ni}${wa})=`
          document.getElementById('maindiv').innerText = ' '+g; 
        }else if (ni == '/') {
            var g = f/h;
          document.getElementById('ansdiv').innerText = `(${tolu}${ni}${wa})=`
          document.getElementById('maindiv').innerText = ' '+g; 
        }
    }else if (r == true) {
        ab =  document.getElementById('maindiv').innerText;
        aa = document.getElementById('ansdiv').innerText = `${z}${ab}=`;
        ad =  z .slice(0, z.length-1)
        // console.log(ad);
        ac =  document.getElementById('maindiv').innerText = ' '+Math.pow(ad,ab);
    }else if (p == true) {
        ab =  document.getElementById('maindiv').innerText;
        aa = document.getElementById('ansdiv').innerText = `${z} ${ab}=`;
        ad =  z.slice(0, z.length-6)
        ae = 1/ab
        // console.log(ad);
        ac =  document.getElementById('maindiv').innerText = ' '+Math.pow(ad,ae)
//   console.log('kk');
    }else if (q == true) {
        aa = document.getElementById('maindiv').innerText
        ab = z.slice(0, z.length-4)
        // console.log(ab);
        document.getElementById('ansdiv').innerText =`${z} ${aa}=`
        document.getElementById('maindiv').innerText = ' '+ab % aa
    }else if (aa == true) {
        document.getElementById('maindiv').innerText
    }else if (ab == true) {
    var ba = document.getElementById('maindiv').innerText
      bb = document.getElementById('ansdiv').innerText
      bd = bb.includes('1/')
       if (bd= true) {
        bc =ba+'='
       document.getElementById('ansdiv').innerText = bc;
       }
    }
     
    
    else if (ab == false) {
        console.log('bbuuu');
        document.getElementById('ansdiv').innerText = ' 0'
        var de =document.getElementById('maindiv').innerText
        document.getElementById('ansdiv').innerText = ' 0'
        // document.getElementById('ansdiv').innerText =de+'=';
    }
    
    
}
function spam() {
    var a = document.getElementById('maindiv').innerHTML;
   if (a === null) {
     var z =document.getElementById('maindiv').innerText= a;
    //  console.log(z);
   } 
   else   if (a > 0) {
    var c =document.getElementById('maindiv').innerText = '-'+ a;
  } 
  else if (a<=-1){ 
    var d =a.substr(1,a.length+1);
    document.getElementById('maindiv').innerText = d;
  }
}
function abs(params) {
    
    var bush = document.getElementById('ansdiv').innerText
    if (bush == '') {
        var a = document.getElementById('maindiv').innerText;
    var b =document.getElementById('ansdiv').innerText = 'abs('+a +')'
    var c = a.includes('-')
    console.log(c);
    if (c === true) {
        document.getElementById('maindiv').innerText= a.slice(1);
    console.log('sup');
    }

    if (c = false){
        console.log('hi');
     document.getElementById('maindiv').innerText = a;
    }

    }
    

}
function ssqu() {
    var z = document.getElementById('raise').innerHTML;
    // console.log(z);
    if (z == 'x<sup>2</sup>') {
        var bush = document.getElementById('ansdiv').innerText
        if (bush == '') {
            var a = document.getElementById('maindiv').innerText;
        var b =document.getElementById('ansdiv').innerText = 'sqr('+a +')'
        document.getElementById('maindiv').innerText = a*a;
        // var c = a.includes('-')
        // if (c = true) {
        //     document.getElementById('maindiv').innerText= a.slice(1);
    }
      
    } else if(z == 'x<sup>3</sup>'){
        var bush = document.getElementById('ansdiv').innerText
        // if (bush == '') {
            var a = document.getElementById('maindiv').innerText;
        var b =document.getElementById('ansdiv').innerText = 'cube('+a +')'
        document.getElementById('maindiv').innerText = a*a*a;
        // var c = a.includes('-')
        // if (c = true) {
        //     document.getElementById('maindiv').innerText= a.slice(1);
        // }
    
    } 
   
}
function ssqur() {
    var z = document.getElementById('power').innerHTML;
    var bush = document.getElementById('ansdiv').innerText
    var a = document.getElementById('maindiv').innerText;
    y = a.includes('-')
    if (z == '<sup>2</sup>_/x') {
        if (bush == '') {
            var a = document.getElementById('maindiv').innerText;
        var b =document.getElementById('ansdiv').innerText = '_/('+a +')'
        document.getElementById('maindiv').innerText =' '+ Math.sqrt(a);
        // var c = a.includes('-')
        // if (c = true) {
        //     document.getElementById('maindiv').innerText= a.slice(1);
        }
    }else if (z =='<sup>3</sup>_/x') {
        // var bush = document.getElementById('ansdiv').innerText
        if (bush == '') {
            // var a = document.getElementById('maindiv').innerText;
            var b =document.getElementById('ansdiv').innerText = `cuberoot(${a})`
            document.getElementById('maindiv').innerText = ' '+Math.cbrt(a);
        // var c = a.includes('-')
        // if (c = true) {
        //     document.getElementById('maindiv').innerText= a.slice(1);
        }
    }
    if (y === true) {
        document.getElementById('maindiv').innerText = 'Invalid input';
    }
  

}
function pie() {
    var bush = document.getElementById('ansdiv').innerText
    if (bush == '') {
        var a = document.getElementById('maindiv').innerText = 22/7;
    }

}
function modulus(params) {
    a = document.getElementById('maindiv').innerText;
    b = document.getElementById('ansdiv').innerText= `${a} mod`
    c = document.getElementById('maindiv').innerText = ''
}
function tens(params) {
    z = document.getElementById('cow').innerHTML
    if (z == '10<sup>x</sup>') {
        a = document.getElementById('maindiv').innerText
    b = document.getElementById('ansdiv').innerText = `10^(${a})`
    document.getElementById('maindiv').innerText = 10*a;
    }else if(z == '2<sup>x</sup>'){
        a = document.getElementById('maindiv').innerText
        b = document.getElementById('ansdiv').innerText = `2^(${a})`
        document.getElementById('maindiv').innerText = 2*a; 
    }
}
function pemu(params) {
    a = document.getElementById('maindiv').innerText
    // for (let index = 0; index < a; index++) {
        // console.log(a);
        for (let i = 0; i <=a; i++) {

            // console.log(i);
            if (i<a) {
               console.log( a*a-1);
                // z = i+1;
                // console.log(z*i);
            } else {
                // console.log('hee');
            }
            // b = document.getElementById('ansdiv').innerText = `fact(${a})` 
            // c = document.getElementById('maindiv').innerText = a*3*2*1;      
        }        
    // }
}
function unknow(params) {
    z = document.getElementById('maluu').innerHTML
    if (z == 'x <sup>y</sup>' ) {
        t = document.getElementById('maindiv').innerText;
    document.getElementById('ansdiv').innerText = `${t}^`
  document.getElementById('maindiv').innerText = ''
    }else if (z == '<sup>y</sup>_/x') {
        t = document.getElementById('maindiv').innerText;
        document.getElementById('ansdiv').innerText = `${t} yroot`
      document.getElementById('maindiv').innerText = ''
    }
}
function logi() {
    var a = document.getElementById('maindiv').innerText
    var z = document.getElementById('pig').innerText
   if (z == 'log') {
    if (a == 0) {
        document.getElementById('ansdiv').innerText = `log(0)`
        document.getElementById('maindiv').innerText= ' '+ 'Invalid input'
    }else if (a == 'Invalid input') {
        document.getElementById('ansdiv').innerText = `log(0)`
        document.getElementById('maindiv').innerText= ' '+'Invalid input'
    }
    else if (0 <a> 0){
        document.getElementById('ansdiv').innerText = `log(${a}`
        document.getElementById('maindiv').innerText = ' '+`${Math.LOG10E}${a}`
    }
   }else if (z == '2<sup>x</sup>') {
    t = document.getElementById('maindiv').innerText
    document.getElementById('ansdiv').innerText = `2^(${t})`
  document.getElementById('maindiv').innerText = ' '+Math.pow(2,t)
   }
}
function lean() {
    z = document.getElementById('dog').innerHTML
     
  if (z == 'In') {
    var a = document.getElementById('maindiv').innerText
    if (a == 0) {
        document.getElementById('ansdiv').innerText = `In(0)`
        document.getElementById('maindiv').innerText= ' '+'Invalid input'
    }else if (a == 'Invalid input') {
        document.getElementById('ansdiv').innerText = `In(0)`
        document.getElementById('maindiv').innerText= ' '+'Invalid input'
    }
    else if (0 <a> 0){
        document.getElementById('ansdiv').innerText = `In(${a})`
        document.getElementById('maindiv').innerText = ' '+`${Math.LN10}${a}`
    }
  } 
  else if ( z == 'e<sup>x</sup>') {
      t = document.getElementById('maindiv').innerText
    document.getElementById('ansdiv').innerText = `e^(${t})`
  document.getElementById('maindiv').innerText = ' '+Math.pow(Math.E,t)
  }
      
  
}
function eye(params) {
    a = document.getElementById('ansdiv').innerText = Math.E;
}
function shall(params) {
        var a = document.getElementById('maindiv').innerText ;
        if (a == 0) {
          var b = document.getElementById('ansdiv').innerText= '1/(0)'
           maindiv.innerText =' '+ 'Cannot divide by zero'
        } else {
          var b = document.getElementById('ansdiv').innerText= `1/(${a})`
          maindiv.innerText = ' '+eval('1/a')
        }
}

function peace() {
    var bbyb= document.getElementById('kind').style.backgroundColor;
    var check = document.getElementById('peace').innerHTML;
    var check2 = document.getElementById('joy').innerHTML;
    var check3 = document.getElementById('love').innerHTML;
    var check4 = document.getElementById('endure').innerHTML;
    var check5 = document.getElementById('longs').innerHTML;
    var check6 = document.getElementById('once').innerHTML;
    var gree = ' rgba(35, 77, 66, 0.836)' ;
    if (bbyb == '') {
    document.getElementById('kind').style.backgroundColor= gree; 
    }
    else{
        document.getElementById('kind').style.backgroundColor='';
    }
    if (check === 'sin'){
        document.getElementById('peace').innerHTML= 'sin<sup>-1</sup>'; 
        } 
    else {
        document.getElementById('peace').innerHTML='sin' ; 
        }
    if (check2=== 'cos'){
        document.getElementById('joy').innerHTML= 'cos<sup>-1</sup>'; 
        } 
    else {
        document.getElementById('joy').innerHTML='cos' ; 
        }
    if (check3 === 'tan'){
        document.getElementById('love').innerHTML= 'tan<sup>-1</sup>'; 
        } 
    else {
        document.getElementById('love').innerHTML='tan' ; 
        }
    if (check4 === 'sec'){
        document.getElementById('endure').innerHTML= 'sec<sup>-1</sup>'; 
        } 
    else {
        document.getElementById('endure').innerHTML='sec' ; 
        }
    if (check5 === 'csc'){
        document.getElementById('longs').innerHTML= 'csc<sup>-1</sup>'; 
        } 
    else {
        document.getElementById('longs').innerHTML='csc' ; 
        }
    if (check6 === 'cot'){
        document.getElementById('once').innerHTML= 'cot<sup>-1</sup>'; 
        } 
    else {
        document.getElementById('once').innerHTML='cot' ; 
        }
}
function sinhi() {
    var b = document.getElementById('maindiv').innerText ;
    var a = document.getElementById('peace').innerHTML;
    if (a === 'sin') {
        document.getElementById('ansdiv').innerText = `sin(${b})`
        document.getElementById('maindiv').innerText = ' '+Math.sin(b)
    }
    else if (a === 'sin<sup>-1</sup>') {
        // b = document.getElementById('manindiv').innerText
        document.getElementById('ansdiv').innerHTML = ' '+`sin<sup>-1</sup>(${b})`
        c = Math.sin(b)
        document.getElementById('maindiv').innerText = 1/c;
    }else if (a === 'sinh') {
        document.getElementById('ansdiv').innerText = `sinh(${b})`
        document.getElementById('maindiv').innerText = ' '+Math.sinh(b)
    }
}
function coshi() {
    var b = document.getElementById('maindiv').innerText ;
    var a = document.getElementById('joy').innerHTML;
    if (a === 'cos') {
        document.getElementById('ansdiv').innerText = `cos(${b})`
        document.getElementById('maindiv').innerText = ' '+Math.cos(b)
    }
    else if (a === 'cos<sup>-1</sup>') {
        // b = document.getElementById('manindiv').innerText
        document.getElementById('ansdiv').innerHTML = `cos<sup>-1</sup>(${b})`
        c = Math.cos(b)
        document.getElementById('maindiv').innerText = ' '+1/c;
    }else if (a === 'cosh') {
        document.getElementById('ansdiv').innerText = `cosh(${b})`
        document.getElementById('maindiv').innerText = ' '+Math.cosh(b)
    }
}
function tanhi() {
    var b = document.getElementById('maindiv').innerText ;
    var a = document.getElementById('love').innerHTML;
    if (a === 'tan') {
        document.getElementById('ansdiv').innerText = `tan(${b})`
        document.getElementById('maindiv').innerText = ' '+Math.tan(b)
    }
    else if (a === 'tan<sup>-1</sup>') {
        // b = document.getElementById('manindiv').innerText
        document.getElementById('ansdiv').innerHTML = `tan<sup>-1</sup>(${b})`
        c = Math.tan(b)
        document.getElementById('maindiv').innerText = ' '+1/c;
    }else if (a === 'tanh') {
        document.getElementById('ansdiv').innerText = `tanh(${b})`
        document.getElementById('maindiv').innerText = ' '+Math.tanh(b)
    }
}
function sechi() {
    var b = document.getElementById('maindiv').innerText ;
    var a = document.getElementById('endure').innerHTML;
    if (a === 'sec') {
        document.getElementById('ansdiv').innerText = `sec(${b})`
        document.getElementById('maindiv').innerText = ' '+1/Math.cos(b)
    }
    else if (a === 'sec<sup>-1</sup>') {
        // b = document.getElementById('manindiv').innerText
        document.getElementById('ansdiv').innerHTML = `sec<sup>-1</sup>(${b})`
        c = 1/Math.cos(b)
        document.getElementById('maindiv').innerText = ' '+1/c;
    }else if (a === 'sech') {
        document.getElementById('ansdiv').innerText = `sech(${b})`
        document.getElementById('maindiv').innerText = ' '+1/Math.cosh(b)
    }
}
function cschi() {
    var b = document.getElementById('maindiv').innerText ;
    var a = document.getElementById('longs').innerHTML;
    if (a === 'csc') {
        document.getElementById('ansdiv').innerText = `csc(${b})`
        document.getElementById('maindiv').innerText =' '+ 1/Math.sin(b)
    }
    else if (a === 'csc<sup>-1</sup>') {
        // b = document.getElementById('manindiv').innerText
        document.getElementById('ansdiv').innerHTML = `csc<sup>-1</sup>(${b})`
        c = 1/Math.sin(b)
        document.getElementById('maindiv').innerText = ' '+1/c;
    }else if (a === 'csch') {
        document.getElementById('ansdiv').innerText = `csch(${b})`
        document.getElementById('maindiv').innerText = ' '+1/Math.sinh(b)
    }
}
function cothi() {
    var b = document.getElementById('maindiv').innerText ;
    var a = document.getElementById('once').innerHTML;
    if (a === 'cot') {
        document.getElementById('ansdiv').innerText = `cot(${b})`
        document.getElementById('maindiv').innerText =' '+ 1/Math.tan(b)
    }
    else if (a === 'cot<sup>-1</sup>') {
        // b = document.getElementById('manindiv').innerText
        document.getElementById('ansdiv').innerHTML = `cot<sup>-1</sup>(${b})`
        c =1/Math.tan(b)
        document.getElementById('maindiv').innerText =' '+ 1/c;
    }else if (a === 'coth') {
        document.getElementById('ansdiv').innerText = `coth(${b})`
        document.getElementById('maindiv').innerText =' '+ 1/Math.tanh(b)
    }
}
function hyp() {
    var bbyb= document.getElementById('divine').style.backgroundColor;
    var check = document.getElementById('peace').innerHTML;
    var check2 = document.getElementById('joy').innerHTML;
    var check3 = document.getElementById('love').innerHTML;
    var check4 = document.getElementById('endure').innerHTML;
    var check5 = document.getElementById('longs').innerHTML;
    var check6 = document.getElementById('once').innerHTML;
    var gree = ' rgba(35, 77, 66, 0.836)' ;
    if (bbyb == '') {
    document.getElementById('divine').style.backgroundColor= gree; 
    }
    else{
        document.getElementById('divine').style.backgroundColor='';
    }
    if (check === 'sin'){
        document.getElementById('peace').innerHTML= 'sinh'; 
        } 
    else {
        document.getElementById('peace').innerHTML='sin' ; 
        }
    if (check2=== 'cos'){
        document.getElementById('joy').innerHTML= 'cosh'; 
        } 
    else {
        document.getElementById('joy').innerHTML='cos' ; 
        }
    if (check3 === 'tan'){
        document.getElementById('love').innerHTML= 'tanh'; 
        } 
    else {
        document.getElementById('love').innerHTML='tan' ; 
        }
    if (check4 === 'sec'){
        document.getElementById('endure').innerHTML= 'sech'; 
        } 
    else {
        document.getElementById('endure').innerHTML='sec' ; 
        }
    if (check5 === 'csc'){
        document.getElementById('longs').innerHTML= 'csch'; 
        } 
    else {
        document.getElementById('longs').innerHTML='csc' ; 
        }
    if (check6 === 'cot'){
        document.getElementById('once').innerHTML= 'coth'; 
        } 
    else {
        document.getElementById('once').innerHTML='cot' ; 
        }
}
function sceil(params) {
    var a = document.getElementById('maindiv').innerHTML;
    if (a === null) {
      var z =document.getElementById('maindiv').innerText= a;
     //  console.log(z);
    } else{
        document.getElementById('ansdiv').innerText = `ceil(${a})`
        document.getElementById('maindiv').innerText= ' '+ Math.ceil(a)
    }
}
function sfloor(params) {
    var a = document.getElementById('maindiv').innerHTML;
    if (a === null) {
      var z =document.getElementById('maindiv').innerText= a;
     //  console.log(z);
    } else{
        document.getElementById('ansdiv').innerText = `floor(${a})`
        document.getElementById('maindiv').innerText= ' '+Math.floor(a)
    }
}
function srand(params) {
    document.getElementById('maindiv').innerText =' '+ Math.random()
}
function dot(params) {
    var a = document.getElementById('maindiv').innerText += '.'
}
function del(params) {
    var a = document.getElementById('ansdiv').innerText
    var b = document.getElementById('maindiv').innerHTML
    y = b.length
    z = b.charAt(0)
    // console.log(z);
    // console.log(y);
      if (b == '0') {
        // console.log('hiiii');

        document.getElementById('maindiv').innerText = '0'
    }
    else if (b !== 0 && z !== ' ') {
        // console.log('sup');
        c = b.slice(0,b.length-1)
    var d = document.getElementById('maindiv').innerText = c
       var m = b.length
    //    console.log(m);
       if (m == 1) {
     document.getElementById('maindiv').innerText = 0
           
       }
    }
    else if (z == ' ') {
        // console.log('hiiii');
    document.getElementById('ansdiv').innerText = ' '
        
    }else if (a == ' ') {
        // console.log('hiiii');

        document.getElementById('ansdiv').innerText = ' '
    }
}