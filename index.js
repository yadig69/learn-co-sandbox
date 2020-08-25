function speaker() {
  var sentence = 'Bird is the word';
  
  console.log(sentence);
}

speaker();

var cuteAnimal = 'quokka';
 
function makeVariable() {
  var cuteAnimal = 'sugar glider';
  return cuteAnimal;
}
 
makeVariable();
 // 'sugar glider'
 
cuteAnimal;
// 'quokka'

const person = {
  name: "Terrance Roberts",
  occupation: {
    title: "District Manager",
    yearsHeld: 2
  },
  pets: [{
    kind: "dog",
    name: "Fiona"
  },{
    kind: "cat",
    name: "Ralph"
  
  }]
 
}
console.log (person.occupation.yearsHeld)

function find(array, criteriaFn) {
  let current = array
  let next = []
  const numberCollections = [1, [2, [4, [5, [6]], 3]]]
  
  while (current || current === 0) {
    if (criteriaFn(current)) {
      return current
    }
    if (Aray.isArray(current)) {
      for (let i = 0; i < current.length; i++)
      {
        next.push(current[i])
      }
    }
    
    curent = next,shift()
  }
  
  return criteriaFn
}

console.log (numberCollections, number => number > 5)
