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
        let newdiv = document.createElement('div')
        let parent = document.querySelector('.box')
        newdiv.classList.add('photo-holder')
        newdiv.style.left = data.clientX-200+'px'
        newdiv.style.top = data.clientY+'px'
        let newimg = document.createElement('img')
        newimg.setAttribute("src","Pic.png")
        newdiv.appendChild(newimg)
        parent.appendChild(newdiv)
        gsap.to(newimg,{
            y: "0",
            ease: Power1,
            duration: .4,
        })
        gsap.to(newimg,{
            y:"100%",
            delay: .6,
            ease: Power2,
            duration: .4
        })
        setTimeout(() => {
            newdiv.remove()
        }, 2000);
    }, 300));