
console.log('theme')

function main() {
    settingLoginFonSize()
    toggleMenuState()

    
}
main()

function toggleMenuState(){
   const  pageToc = document.querySelector('.page-toc')
    // pageToc.style.transition  = '300ms';
    pageToc.style.cssText += `
        transition:300ms;
        padding-top:40px;
    `;
    pageToc.innerHTML += `
        <img src='/static/icon/toggle-left.png' id='toggleImg'/>
    `
    const imgEl = document.querySelector('#toggleImg')
    
    const setttingImgSrc = (darkImg,lightImg) => {
        if(selectTheme.selectedIndex === 1){
            toggleImg.src = `/static/icon/${lightImg}.png`
        }else{
            toggleImg.src = `/static/icon/${darkImg}.png`
        }
    }
    if(imgEl){
        imgEl.style.cssText = `
            position:absolute;
            z-index:1;
            right:15px;
            top:20px;
            width:20px;
            height:20px;
            cursor:pointer;
        `;
        setttingImgSrc('toggle-left','fff_toggle-left');
    }

    const contentEl = document.querySelector('.content.markdown-body')
    contentEl.style.transition = '300ms';
    imgEl.onclick = function(){
        console.log(this.src,'src')
        if(this.getAttribute('src').indexOf('toggle-right.png') !== -1){
            this.setAttribute('src','/static/icon/toggle-left.png')
            setttingImgSrc('toggle-left','fff_toggle-left');
            this.parentElement.style.width = '';
            contentEl.style.marginLeft = ''
        }else{
            this.setAttribute('src','/static/icon/toggle-right.png')
            setttingImgSrc('toggle-right','fff_toggle-right');
            this.parentElement.style.width = `60px`;
            contentEl.style.marginLeft = '60px';
        }


    }
    


}



function settingLoginFonSize() {
    const logo = document.querySelector('.nav .logo')
    logo.style.fontSize = '20px'
    logo.innerHTML += addThemeSelectList();
    bindEvent()

    if (selectTheme.selectedIndex === 1) {
        darkTheme()
    } else {
        lightTheme()
    }
}
function bindEvent() {
    selectTheme.onclick = function (e) {
        e.stopPropagation()
        const n = document.querySelector('.nav')
        setTimeout(() => {
            n.style.display = '';
        }, 0)
        console.log(n)
    }
    selectTheme.onchange = function (e) {
        const v = e.target.selectedIndex
        localStorage.setItem('$$_THEME_STYLE', v)

        if (v === 0) {
            lightTheme()
            if(toggleImg.src.indexOf('toggle-left') !== -1){
                toggleImg.src = '/static/icon/toggle-left.png'
            }else{
                toggleImg.src = '/static/icon/toggle-right.png'
            }

        } else if (v === 1) {
            darkTheme()
            if(toggleImg.src.indexOf('toggle-left') !== -1){
                toggleImg.src = '/static/icon/fff_toggle-left.png'
            }else{
                toggleImg.src = '/static/icon/fff_toggle-right.png'
            }
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
        <select id='selectTheme' style='background-color:#393939;'>
            ${s}
        </select>
    `

    return html
}