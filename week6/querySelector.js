
/* <!-- You can work in the html or in a separate js file. Like:
<script>
  1. store the element that says 'The King' in the 'king' variable.
  console.log it.
  2. store 'The Businessman' and 'The Lamplighter'
  in the 'businessLamp' variable.##
  console.log each of them.
  3. store 'The King' and 'The Conceited Man'
  in the 'conceitedKing' variable.
  alert them one by one.
  4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
  in the 'noBusiness' variable.
  console.log each of them.
</script>
OR
<script src="queryselector-1.js"></script> --> */


const king = document.getElementById('b325').innerText;
const businessLamp = document.getElementsByClassName('asteroid big');
console.log(king);
console.log(businessLamp[0].innerHTML);
console.log(businessLamp[1].innerHTML);
const conceitedKing = document.querySelector('section').getElementsByClassName('asteroid');
console.log(conceitedKing[0].innerHTML);
console.log(conceitedKing[1].innerHTML);
const noBusiness = document.querySelectorAll('div');
console.log(noBusiness[0].innerHTML);
console.log(noBusiness[1].innerHTML);
console.log(noBusiness[2].innerHTML);






