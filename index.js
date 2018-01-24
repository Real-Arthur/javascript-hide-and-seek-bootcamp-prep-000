function getFirstSelector(selector) {
  return document.querySelector(selector)
  
}

function nestedTarget() {
  const thing = document.querySelector('#nested .target')
  return thing
}


function deepestChild() {
  const nodeOne = document.querySelector('div#grand-node')
  const nodeTwo = nodeOne.querySelector('div')
  const nodeThree = nodeTwo.querySelector('div')
  const nodeFour = nodeThree.querySelector('div')
  const nodeFive = nodeFour.querySelector('div')
  return nodeFive
  
}


function increaseRankBy(n) {
  const whatever = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  var x = n
  for (let i = 0; i < whatever.length; i++) {
    whatever[i].innerHTML = (i + n).toString()
    }
}


