let elsDom, els, y = 20
let lst = (tagName) => {
    let elsDom = document.getElementsByTagName("span"), res = []
    for(var i in elsDom) if (elsDom[i].innerHTML == tagName) res.push(elsDom[i])
    return res
}, next = () => {
    setTimeout(() => {
        y += 60
        window.scrollTo(0, y)
        els = lst("Following")
        els.shift();els.shift()
        go()
    }, 100)
}, go = () => {
    let el = els.shift()
    if (!el) return next()
    el.click()
    setTimeout(() => {
        next()
        lst("Unfollow")[0].click()
    }, 300)
}
next()