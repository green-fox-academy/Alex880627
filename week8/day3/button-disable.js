
let form = document.getElementsByTagName('form')[0];
form.addEventListener('click',(e)=>{  
  e.target.className = 'clicked';
  let goldfish = document.getElementById('goldfish').className;
  let no = document.getElementById('no').className;
  if(e.target.id === 'goldfish' && no === 'clicked' || e.target.id ==='no' && goldfish === 'clicked'){
    document.getElementById('ohne-cat').disabled = false;
  }
  if(e.target.id === 'dog' || e.target.id === 'cat'){
    document.getElementById('ohne-cat').disabled = false;
  }
  if(e.target.id === 'yes'){
    document.getElementById('kit-cat').disabled = false;
  }
})

let kitCat = document.getElementById('kit-cat');
kitCat.addEventListener('click',(e)=>{
  e.preventDefault();
  alert("Thank you, you've successfully signed up for cat facts");
})

let ohneCat = document.getElementById('ohne-cat');
kitCat.addEventListener('click',(e)=>{
  e.preventDefault();
  alert("Sigh, we still added you to the cat facts list");
})

