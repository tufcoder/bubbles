let timer = 1000
const container = document.querySelector('.container')
container.style.backgroundColor = randColor()
setTimeout(frequency, timer)

function frequency() {
    const screen = container.clientWidth * container.clientHeight
    if (screen <= 480000)
        timer = 1000
    else if (screen <= 1024000)
        timer = 800
    else
        timer = 100
    makeBubbles()
    setTimeout(frequency, timer)
}

const clearBubbles = setInterval(() => {
    const delBubbles = []
    const bubbles = container.querySelectorAll('.circle')
    bubbles.forEach(bubble => {
        if (bubble.style.opacity == 0)
            delBubbles.push(bubble)
    })
    while (delBubbles.length > 0)
        container.removeChild(delBubbles.shift())
    container.style.backgroundColor = randColor()
}, 10000)

function makeBubbles() {
    return container.appendChild(createCircle())
}

function createCircle() {
    const x = Math.floor(Math.random() * container.clientWidth + 1)
    const y = Math.floor(Math.random() * container.clientHeight + 1)
    const div = document.createElement('div')
    div.id = 'div_' + x + '_' + y + '_' + Date.now().toString()
    div.style.width = 0
    div.style.height = 0
    div.style.top = y + 'px'
    div.style.left = x + 'px'
    div.style.borderRadius = '50%'
    div.className = 'circle'
    div.style.backgroundColor = randColor()
    setTimeout(() => {
        const radius = randRadius()
        div.style.width = radius + 'px'
        div.style.height = radius + 'px'
        div.style.opacity = randOpacity()
    }, 100)
    div.addEventListener("transitionend", () => {
        div.style.opacity = 0
    })
    return div
}

function randRadius(max = 800, min = 100) {
    const screen = container.clientWidth * container.clientHeight
    if (screen <= 480000)
        max = 400
    return Math.floor(Math.random() * max) + min
}

function randColor() {
    return '#' + Math.round(Math.random() * 0xFFFFFF)
        .toString(16)
        .padEnd(6, "F")
}

function randOpacity(max = 40, min = 20) {
    return (Math.floor(Math.random() * max) + min) / 100
}