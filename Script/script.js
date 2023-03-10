var mainBox= document.getElementById('mainBox')
var callText=document.getElementById('callMe')
var busyText=document.getElementById('Busy')
var hiText=document.getElementById('hiDear')
var green=document.getElementById('green')
var blue=document.getElementById('blue')
var purple=document.getElementById('purple')


callText.addEventListener('click',function(){
    mainBox.style.textAlign='center'
    mainBox.innerHTML='Call Me'
})
busyText.addEventListener('click',function(){
    mainBox.style.textAlign='center'
    mainBox.innerHTML='I am Busy'
})
hiText.addEventListener('click',function(){
    mainBox.style.textAlign='center'
    mainBox.innerHTML='Hi Dear'
})
green.addEventListener('click',function(){
    mainBox.style.backgroundColor='green'
})
blue.addEventListener('click',function(){
    mainBox.style.backgroundColor='blue'
})
purple.addEventListener('click',function(){
    mainBox.style.backgroundColor='purple'
})