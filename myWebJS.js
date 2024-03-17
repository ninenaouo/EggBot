function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function onloadall() {
  onRateCalc();

  }
function testok(){
    alert("Hello World!");

}
var enhanceNum =0;
var rng = Math.random()*2000;
function enhance(){ 
if(enhancingItem==""){
  $("#display").text("請選擇裝備!");
  return;
}
if(enhanceable()==false){
  $("#display").text("此裝備無法強化! 請重新選擇!");
  return;

}

  $("#enhancing").css("visibility","visible");
  $("#ingri").css("visibility","visible");
rng = Math.random()*2000;
  if($("#skip")[0].checked == true){
    $("#display").css("color","white");
    $("#display").text("強化中...");
    sw = true;

  }else{
  $("#display").css("color","white");
  $("#display").text("強化中...");
  enhanceNum =3;
  sw = true;
startTime = new Date().getTime();

}
}
//基本設定
var enhancingItem = "";
var ehnacingName = "";
var winItem = "";
var winItemName = "";
var cronsCos = 0;
var downItem = "";
var downItemName = "";
function updateItemData(){
  for(let i=0;i<equips.length;i++){
    if( enhancingItem == equips[i][0]){
      ehnacingName = equips[i][1];
      winItem = equips[i+1][0];
      winItemName = equips[i+1][1];
      if(equips[i][4]==0){
        downItem = enhancingItem;
        downItemName = equips[i][1];
      }else{
        downItem = equips[i-1][0];
        downItemName = equips[i-1][1];
      }

      if(equips[i][4]==5){
        enhancingItem = "";
      }
    }

  }
  updateEq();
  onRateCalc();

}

function enhanceable(){
  for(let i=0;i<equips.length;i++){
    if( enhancingItem == equips[i][0]){
      ehnacingName = equips[i][1];
      if(equips[i][4]==5){
       return false;
      }else{
      return true;
      }
    }

  }

}


function updateEq(){ 
  for(let i=0;i<equips.length;i++){
    if(equips[i][0]==enhancingItem){
  
      $("#enhancing").css("visibility","visible");
      $("#ingri").css("visibility","visible");
      $("#enhancing").attr("src",`./Picture/${equips[i][0]}.png`);
      $("#ingri").attr("src",`./Picture/${equips[i][3]}.png`);
      $("#crons").text(equips[i][2]); 
    }
  }
 }

const equips  = [
  ["debobelt","德柏雷卡腰帶",95,"debobelt",0],["1debobelt","I 長:德柏雷卡腰帶",288,"debobelt",1],["2debobelt","II 廣:德柏雷卡腰帶",865,"debobelt",2],["3debobelt","III 故:德柏雷卡腰帶",2405,"debobelt",3],["4debobelt","IV 琉:德柏雷卡腰帶",11548,"debobelt",4],["5debobelt","V 東:德柏雷卡腰帶",0,"debobelt",5],
  ["bde","黑暗侵蝕耳環",62,"bde",0],["1bde","I 長:黑暗侵蝕耳環",187,"bde",1],["2bde","II 廣:黑暗侵蝕耳環",811,"bde",2],["3bde","III 故:黑暗侵蝕耳環",1562,"bde",3],["4bde","IV 琉:黑暗侵蝕耳環",7499,"bde",4],["5bde","V 東:黑暗侵蝕耳環",0,"bde",5]
];

function onclickeq(id){

for(let i=0;i<11;i++){
  if(id == equips[i][0]){
    $("#enhancing").css("visibility","visible");
    $("#ingri").css("visibility","visible");
    $("#enhancing").attr("src",`./Picture/${equips[i][0]}.png`);
    $("#ingri").attr("src",`./Picture/${equips[i][3]}.png`);
    $("#crons").text(equips[i][2]); 
    enhancingItem = equips[i][0];
    updateItemData();
  }

}
onRateCalc();

}


//
var startTime = new Date().getTime();

// update progess with the timer.
function update (seconds) {
  barRenderer(seconds);

}
function enhanceRate(stack){
  var rate = 0;
  for(let i=0;i<11;i++){
    if(enhancingItem == equips[i][0]){
      switch( equips[i][4]){
        case 0:
          if(stack<=18){
          rate = 25+stack*2.5;}else{
            rate = 25+ 18*2.5;
            rate = rate + (stack-18)/5 *2.5;
          }
        break;
        case 1:
          if(stack<=40){
            rate = 10+stack*1;
          }else{
            rate = 10+40;
            rate = rate + (stack-40)/5 * 1;
          }
        break;
        case 2:
          if(stack<=44){
            rate = 7.5+stack*0.75;
          }else{
            rate = 7.5+0.75*44;
            rate = rate + (stack-44)/5 *0.75;
          }
        break;
        case 3:
          if(stack<=110){
            rate = 2.5+stack*0.25;
          }else{
            rate = 2.5+110*0.25;
            rate = rate + (stack-110)/5 *0.25;
          }
        break;
        case 4:
          rate = 0.5+stack*0.05;
        break;

      }

    }
  
  }
if(rate>90){rate=90}
return rate;
}

function onRateCalc(){
var stack = document.getElementById("stack").value;
var winrate = enhanceRate(stack);
$("#displayRate").text("強化成功率:  "+winrate.toFixed(2)+"%");
}
// refresh the bar.
function barRenderer (seconds) {
  var percent = ((1300-seconds) /1300) * 100;
  $(".progress-bar").css("width", percent+"%");

}

var sw = false;
// timer.
var timer = function (startTime) {
  // 當前時間。
var currentTime = new Date().getTime();

  // 當前時間 - 起始時間 = 經過時間。(因為不需要毫秒，所以將結果除以1000。)
  var diffSec = Math.round((currentTime - startTime));
  
  // 目標時間 - 經過時間 = 剩餘時間。
  var remainingTime = enhanceNum*1000 - diffSec;
  // update progess.  
  update(remainingTime);
  var myrand = 0-rng;
  if (remainingTime <= myrand && sw == true) {
    sw=false;
    // stop the timer.
    //clearInterval(timerId);
    // 確保最後顯示的時間為00:00
    update(1300);
    // do anything you want to.
    enhanceItem($("#stack").val());
    
  } 
}

// start the timer.
var timerId = setInterval( function () { timer(startTime); }, 1);

var stackArray = [];


function addStackBag(stack){
  var have = false;
  for(var i=0;i<stackArray.length;i++){
    if(parseInt(stackArray[i][0])==stack){
      have = true;
      stackArray[i][1] = parseInt(stackArray[i][1])+1;
    }
  }
  if(have == false){
    var arr = [stack,1];
    stackArray.push(arr);
  }
reFreshStack();
}

function reFreshStack(){
  $('#stackbag').html("");
  if(stackArray.length>0){
   for(var i=0;i<stackArray.length;i++){
    if(stackArray[i][1]>0){
    $('#stackbag').html($('#stackbag').html()+
    `
    <div class="eq"style="float:left;margin-top:15px;margin-left:5px;margin-right:5px"><input id="barcs" type="image" src="./Picture/barcs.png" class="eqimg" style="position:relative;right: 1px;" onclick="onclickStack(dataset.stack)"  id="stack_${stackArray[i][0]}" data-stack='${stackArray[i][0]}' data-num = '${stackArray[i][1]}'>
    <p class="stackWord" id="thisStack_${stackArray[i][0]}">+${stackArray[i][0]}</p>
    <pre id="thisStackNum_${stackArray[i][1]}" style="position:relative; bottom:55px;right:2px; width:44px;color:wheat; text-align:right">${stackArray[i][1]}</pre>
    </div>
    `);

   }
  }

  }
}

function onclickStack(stack){
  for(var i=0;i<stackArray.length;i++){
    if(stackArray[i][0]==stack){
      if($("#stack").val()=="0"){
        if(parseInt(stack)==stackArray[i][0]){
          stackArray[i][1]= stackArray[i][1]-1;
          $("#stack").val(stack);
        }
        }else{
          addStackBag($("#stack").val());
          stackArray[i][1]= stackArray[i][1]-1;
          $("#stack").val(stack);
        }

    }
  }
  reFreshStack();
  onRateCalc();
}
function onclickGetStack(){
  reFreshStack();
  var getStack =parseInt($("#stack").val());
  if(isNaN(getStack)==true || getStack<=0){
    $("#display").text( "請輸入大於0的層數!");
  return;
}

  addStackBag(parseInt(getStack));
}

function resetcrons(){
  cronsCos=0;
  $("#cronsCos").text("消耗x0");
}
function resetlog(){
  $("#log").text("");
  logs=[[1,0,0],[2,0,0],[3,0,0],[4,0,0],[5,0,0]];
  updateEnhanceLog();
  
}
function enhanceItem(stack){
 if(enhanceable()==false){
  $("#display").css("color","wheat");
  $("#display").text( "此道具無法強化! 請重新選擇!");
  return;
 }
  onRateCalc();
  if(stack==""){stack=0}
  var winrate = enhanceRate(stack);
  var win = getRandomInt(1000000);
  win = win/10000;
  var enhanceTime = new Date();
  var nowTime = enhanceTime.getHours()+":"+enhanceTime.getMinutes()+":"+enhanceTime.getSeconds();;
  if($("#cronsChk")[0].checked == true){
    let addVal = $("#crons").text();
    addVal = parseInt(addVal);
    cronsCos = cronsCos+addVal;
    $("#cronsCos").text("消耗x " + cronsCos);
  }
  if(winrate>=win){
    addWin(winItem);
    $("#display").text("道具強化成功!");
    $("#log").html(`<pre style="color:blue;font-size:12px">
${nowTime} 以${stack}層 獲得  ${winItemName} 強化成功!</pre>`+$("#log").html());
$('#stack').val("0");
    $(".display").css("color","blue");
    $(".display").css("font-weight","bold");
    $("#enhancing").attr("src",`./Picture/${winItem}.png`);
    $("#ingri").css("visibility","hidden");
    updateEnhanceLog();
    enhancingItem = winItem;
    updateItemData();
    
    
   
    return;
  }else{
    addLose(winItem);
    var originStack = parseInt($('#stack').val());
        originStack +=1;
        $('#stack').val(originStack);
    if($("#cronsChk")[0].checked==true){
      let downrate = 40;
      let down = getRandomInt(1000000);
      down=down/10000;
      if(downrate>=down){
      
        $("#display").text( "道具強化失敗! 強化階段下降!");
        $("#log").html(`<pre style="color:red;font-size:12px;overflow:hidden;word-wrap: break-word;">
${nowTime} 以${stack}層 挑戰  ${winItemName} 強化失敗! 強化階段下降!</pre>`+$("#log").html());
        enhancingItem= downItem;
        updateItemData();
        $(".display").css("color","red");
        $(".display").css("font-weight","bold");
        
      }else{
      
        $("#display").text( "道具強化失敗!");
        $("#log").html(`<pre style="color:red;font-size:12px;overflow:hidden;word-wrap: break-word;">
${nowTime} 以${stack}層 挑戰  ${winItemName} 強化失敗!</pre>`+$("#log").html());
        $(".display").css("color","red");
        $(".display").css("font-weight","bold");
  
      }
   
          }else{
              $("#display").text( "道具強化失敗!");
              $("#log").html(`<pre style="color:red;font-size:12px;overflow:hidden;word-wrap: break-word;">
${nowTime} 以${stack}層 挑戰  ${winItemName} 強化失敗!</pre>`+$("#log").html());
              $(".display").css("color","red");
              $(".display").css("font-weight","bold");
              $("#enhancing").css("visibility","hidden");
              $("#ingri").css("visibility","hidden");

            }
 
            updateEnhanceLog();
  }
 
}
var logs=[[1,0,0],[2,0,0],[3,0,0],[4,0,0],[5,0,0]];
function addWin(equip){
  for(var i=0;i<equips.length;i++){
    if(equips[i][0]==equip){
        switch(equips[i][4]){
          case 1:
            logs[0][1] = logs[0][1]+1;
          break;
          case 2:
            logs[1][1] = logs[1][1]+1;
          break;
          case 3:
            logs[2][1] = logs[2][1]+1;
          break;
          case 4:
            logs[3][1] = logs[3][1]+1;
          break;
          case 5:
            logs[4][1] = logs[4][1]+1;
          break;

        }
    }

  }

}
function addLose(equip){
  for(var i=0;i<equips.length;i++){
    if(equips[i][0]==equip){
      switch(equips[i][4]){
        case 1:
          logs[0][2] = logs[0][2]+1;
        break;
        case 2:
          logs[1][2] = logs[1][2]+1;
        break;
        case 3:
          logs[2][2] = logs[2][2]+1;
        break;
        case 4:
          logs[3][2] = logs[3][2]+1;
        break;
        case 5:
          logs[4][2] = logs[4][2]+1;
        break;
        

      }
    }

  }

}

function updateEnhanceLog(){
  
  var res = 
  `
  PRI:${logs[0][1]}/${parseInt(logs[0][1]+logs[0][2])}
  DUO:${logs[1][1]}/${parseInt(logs[1][1]+logs[1][2])}
  TRI:${logs[2][1]}/${parseInt(logs[2][1]+logs[2][2])}
  TET:${logs[3][1]}/${parseInt(logs[3][1]+logs[3][2])}
  PEN:${logs[4][1]}/${parseInt(logs[4][1]+logs[4][2])}
  `;
  $("#enhancelog").text(res);
}

// Get the input field
var input = document.getElementById("stack");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("en").click();
    onRateCalc();
  }
});


