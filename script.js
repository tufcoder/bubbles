let timer = 1000
const container = document.querySelector('.container')
container.style.backgroundColor = randColor()
setTimeout(frequency, timer)

function frequency() {
    const screen = container.clientWidth * container.clientHeight
    if (screen <= 480000) {
        timer = 1000
    }
    else if (screen <= 1024000) {
        timer = 800
    }
    else {
        timer = 100
    }
    makeBubbles()
    setTimeout(frequency, timer)
}

const clearBubbles = setInterval(() => {
    const delBubbles = []
    const clear = container.querySelectorAll('.circle')
    clear.forEach(item => {
        if (item.style.opacity == 0)
            delBubbles.push(item)
    })
    while (delBubbles.length > 0) {
        container.removeChild(delBubbles.shift())
    }
    container.style.backgroundColor = randColor()
}, 20000);

function makeBubbles() {
    const x = Math.floor(Math.random() * container.clientWidth + 1)
    const y = Math.floor(Math.random() * container.clientHeight + 1)
    return container.appendChild(createCircle(x, y))
}

function createCircle(x, y) {
    const div = document.createElement('div')
    div.id = 'div_' + x + '_' + y + '_' + Date.now().toString()
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = x + 'px'
    div.style.top = y + 'px'
    div.className = 'circle'
    div.style.backgroundColor = randColor()
    div.addEventListener("transitionend", () => {
        div.style.opacity = 0;
    })
    setTimeout(() => {
        const radius = randRadius()
        div.style.width = radius + 'px'
        div.style.height = radius + 'px'
        div.style.opacity = randOpacity()
    }, 100);
    return div
}

function randRadius(max = 500, min = 100) {
    return Math.floor(Math.random() * max) + min;
}

function randColor() {
    return '#' + Math.round((Math.random() * 0xFFFFFF))
        .toString(16)
        .padEnd(6, "F")
}

function randOpacity(max = 40, min = 20) {
    return (Math.floor(Math.random() * max) + min) / 100
}