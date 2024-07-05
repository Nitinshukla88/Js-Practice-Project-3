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
        let element = document.querySelector('.photo-holder')
        let parent = document.querySelector('.box')
        // element.style.visibility = "visible"
        element.style.left = data.clientX+'px'
        element.style.top = data.clientY+'px'
        console.log(element)
        parent.appendChild(element)
        // setTimeout(() => {
        //     element.remove()
        // }, 2000);
    }, 500));