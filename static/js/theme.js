
console.log('theme')

function main() {
    settingLoginFonSize()
}
main()

function settingLoginFonSize() {
    const logo = document.querySelector('.nav .logo')
    logo.style.fontSize = '20px'
    logo.innerHTML += addThemeSelectList();
    bindEvent()

    if (select.selectedIndex === 1) {
        darkTheme()
    } else {
        lightTheme()
    }
}
function bindEvent() {
    select.onclick = function (e) {
        e.stopPropagation()
        const n = document.querySelector('.nav')
        setTimeout(() => {
            n.style.display = '';
        }, 0)
        console.log(n)
    }
    select.onchange = function (e) {
        const v = e.target.selectedIndex
        localStorage.setItem('$$_THEME_STYLE', v)

        if (v === 0) {
            lightTheme()
        } else if (v === 1) {
            darkTheme()
        }
    }
}
function lightTheme() {
    const contentDom = document.querySelector('.content.markdown-body')
    const b = document.body
    const pageToc = document.querySelector('.page-toc')
    // 亮白
    contentDom.style.backgroundColor = ''
    contentDom.style.color = ''
    if(document.getElementById('darkStyle')){
        darkStyle.parentNode.removeChild(darkStyle)
    }
    pageToc.style.backgroundColor = ''
}
function darkTheme() {
    const contentDom = document.querySelector('.content.markdown-body')
    const b = document.body
    const pageToc = document.querySelector('.page-toc')
    // 深黑
    contentDom.style.backgroundColor = '#393939'
    contentDom.style.color = '#f9f9f9'
    const style = document.createElement('style')
    style.id = 'darkStyle'
    style.innerHTML = `
     .warpper .page-toc ul a{
         color:#f9f9f9;
     }
     `
    pageToc.style.backgroundColor = '#393939'
    b.appendChild(style)
}
function addThemeSelectList() {
    const h = new Date().getHours();
    const local = localStorage.getItem('$$_THEME_STYLE')
    let v = 0;
    console.log(local)
    if (local != null) {
        v = local
    } else {
        if (h > 12) {
            v = 1
        } else {
            v = 0
        }
    }
    let s = ``
    const map = {
        0: '亮白',
        1: '深夜'
    }
    for (let i = 0; i < 2; i++) {
        if (v == i) {
            s += `<option value='${i + 1}' selected> ${map[i]} </option>`
        } else {
            s += `<option value='${i + 1}' > ${map[i]} </option>`
        }
    }
    let html = `
        <select id='select' style='background-color:#393939;'>
            ${s}
        </select>
    `

    return html
}