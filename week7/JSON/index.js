let ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');

ourRequest.onload = () => {
  let content = JSON.parse(ourRequest.responseText);
  console.log(content[0]);  
}
ourRequest.send();


