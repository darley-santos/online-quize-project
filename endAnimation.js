function createLine(leftPosition, animationDelay = '0s', animationDuration = '2.5s') {
    const line = document.createElement('div')
    line.classList.add('line')
    line.style.left = leftPosition
    line.style.animationDelay = animationDelay
    line.style.animationDuration = animationDuration
    return line
  }
  
  const parentElement = document.querySelector('.congratulations-lines')
  
  const linesData = [
    { leftPosition: '10%', animationDelay: '0.5s', animationDuration: '3s' },
    { leftPosition: '25%', animationDelay: '1s', animationDuration: '2s' },
    { leftPosition: '40%', animationDelay: '1.5s' },
    { leftPosition: '55%', animationDelay: '2s', animationDuration: '2.5s' },
    { leftPosition: '70%', animationDelay: '2.5s', animationDuration: '3s' },
    { leftPosition: '85%', animationDelay: '3s', animationDuration: '1.5s' }
  ]
  
  linesData.forEach(data => {
    const { leftPosition, animationDelay, animationDuration } = data
    const line = createLine(leftPosition, animationDelay, animationDuration)
    parentElement.appendChild(line)
    console.log(data)
  })
