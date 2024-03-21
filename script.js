makeBubbles();

function makeBubbles() {
    const container = document.querySelector('.container')
    const timeBubbles = setInterval(() => {
        const x = Math.floor(Math.random() * container.clientWidth + 1)
        const y = Math.floor(Math.random() * container.clientHeight + 1)
        container.appendChild(createCircle(x, y))
    }, 50);
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
    }, 20000);
}

function createCircle(x, y) {
    const div = document.createElement('div')
    div.id = 'div_' + x + '_' + y
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

function randRadius(max = 500, min = 50) {
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