
const fs = require('fs')
const http = require('http')

const path = require('path')
const filePath = dir => path.resolve(__dirname, dir)

const htmlDir = filePath('html')

// console.log(htmlDir)

function getImgList() {

  let fileList = fs.readdirSync(htmlDir)
  fileList = fileList.map(file => {
    return htmlDir + '\\' + file
  })
  const imgList = new Set();
  fileList.map(file => {
    const r = fs.readFileSync(file, 'utf8')
    // console.log(r,'r')
    const temp = `
  </code></pre>
  <h3 id="t81.8 &#x5168;&#x90E8;&#x66FF;&#x6362;">1.8 &#x5168;&#x90E8;&#x66FF;&#x6362; <a href="#t81.8 &#x5168;&#x90E8;&#x66FF;&#x6362;"> # </a></h3>
  <pre><code class="lang-js">((\/\*([\w\W]+?)\*\/)|(\/\/.+?(?=[&quot;$\r\n]))|(^\s*(?=\r?$)\n))
  </code></pre>
  <!-- http://img.zhufengpeixun.cn -->
  <p><img src="http://img.zhufengpeixun.cn/emptylineregexp.png" alt="emptylineregexp.png"></p>
  <table>
  `
    const reg = /http:\/\/img\.zhufengpeixun\.cn.*?\.png/g;
    const match = r.match(reg)
    if (match) {
      match.forEach(imgUrl => {
        if (imgUrl) {
          imgList.add(imgUrl)
        }
      })
    }

  })

  let imgStr = JSON.stringify([...imgList])
  const jsonStr = `
  const imgList =   ${imgStr} ;
  module.exports = imgList
`

  const r = fs.writeFileSync(filePath('imgList.txt'), jsonStr)
}


const imgList = require('./imgList')
// console.log(imgList)
const downLoad = () => {

  const createRequest = (fileName) => {
    return new Promise((resolve, reject) => {
      const content = filePath(`static/zhufengImg`)
      const fileP = `${content}\\${fileName}`
      const r = fs.existsSync(fileP)
      if (r) {
        console.log('已经存在--跳过下载')
        resolve()
        return;
      }

      const options = {
        hostname: 'img.zhufengpeixun.cn',// 这里别加http://，否则会出现ENOTFOUND错误
        path: `/${fileName}`,// 子路径
        method: 'GET',
      };
      console.log(fileName,'--------------------')
      const req = http.request(options, (res) => {
        let imgData = ''
        res.setEncoding("binary");
        res.on('data', (chunk) => {
          imgData += chunk
        })

        res.on('end', () => {
          fs.writeFile(fileP, imgData, 'binary', (err) => {
            if (err) {
              console.log("文件下载失败.");
              reject()
            }
            resolve()
            console.log("下载成功");
          })
        })
      })

      req.end();
    });

  }
  imgList.forEach(async img => {
    const fileName = path.basename(img);
    try {
      await createRequest(fileName)
    } catch (error) {
      console.log(error)
      console.log(fileName, 'fileName')
    }
  })
  console.log('-------end--------')
}


downLoad();