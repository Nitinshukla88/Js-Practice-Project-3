const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
console.log(document.querySelector('.box'))
document.querySelector('.box').addEventListener("mousemove",
    throttleFunction((data) => {
        let createddiv = document.createElement('div')
        createddiv.classList.add('photo-holder')
        let parent = document.querySelector('.box')
        createddiv.style.left = data.clientX+'px'
        createddiv.style.top = data.clientY+'px'
        parent.appendChild(createddiv)
    }, 500));