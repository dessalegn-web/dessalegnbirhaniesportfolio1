let history = [];

function insert(val){document.getElementById("display").value+=val;}
function clearDisplay(){document.getElementById("display").value=""; document.getElementById("result").innerText="";}
function backspace(){let c=document.getElementById("display").value; document.getElementById("display").value=c.substring(0,c.length-1);}

function calculate(){
  let input=document.getElementById("display").value;
  try{
    let scope={x:1,y:2,z:3,i:math.complex(0,1)};
    let result=math.evaluate(input,scope);
    document.getElementById("result").innerText=result.toString();
    history.push({input,result});
  }catch(err){
    document.getElementById("result").innerText="Error: "+err.message+"\nCheck syntax or use parentheses";
  }
}

function toggleTheme(){document.body.classList.toggle("light");}

function plotGraph(){
  let expr=document.getElementById("graphInput").value;
  try{
    let xVals=math.range(-10,10,0.1).toArray();
    let yVals=[]; let validY=[];
    xVals.forEach(x=>{try{let y=math.evaluate(expr,{x:x}); if(typeof y==="number" && isFinite(y)){yVals.push(y); validY.push(y);} else{yVals.push(NaN);}}catch{yVals.push(NaN);}});  
    let trace={x:xVals,y:yVals,type:'scatter',mode:'lines',line:{color:'#17a2b8',width:2}};
    let layout={margin:{t:20},paper_bgcolor:'#111',plot_bgcolor:'#111',font:{color:'#fff'}};
    Plotly.newPlot('graph',[trace],layout,{responsive:true});
  }catch(err){alert("Graph Error: "+err.message);}
}
function showHistory(){
  let historyDiv=document.getElementById("history");
  historyDiv.innerHTML="";
  history.forEach(entry=>{
    let p=document.createElement("p");
    p.innerText=`${entry.input} = ${entry.result}`;
    historyDiv.appendChild(p);
  });
}
function clearHistory(){history=[]; document.getElementById("history").innerHTML="";}

