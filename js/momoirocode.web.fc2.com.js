
console.log('Hi! running momoiro-ext!') //runnnign checker.

class MomoiroExtension {
    GetProductInfo(){
        return document.querySelectorAll('#app > div > div > div > div > div.swipe-item.scroll > div.content > div > ol > li > div.work-name')
    }
    hrefs = {}
    useViewer = 0
    constructor(){
        let _hrefs = document.getElementsByName('menu')[0].contentDocument.querySelectorAll('li > a')
        this.hrefs = Array.from(_hrefs).map(a => a.href)
        document.getElementsByName('menu')[0].contentDocument.querySelector('body > p > span').innerHTML += `<label><input type="checkbox" id="useViewer" value="1">スマホ向け</label>`
        document.getElementsByName('menu')[0].contentDocument.getElementById("useViewer").addEventListener('change',(event)=>{
            if (event.target.checked){
                this.useViewer = 1;
                this.ReplaceToMovue()
            }else{
                this.useViewer = 0;
                this.ReplaceToMomoirocode()
            }
        })
    }
    ReplaceToMomoirocode(){
        console.log("running replace to momoirocode links.")
        console.log(this.hrefs)
        let doc = document.getElementsByName('menu')[0].contentDocument.querySelectorAll('li > a')
        doc.forEach((x, i) => {
            x.setAttribute('href', this.hrefs[i])
        })
    }

    ReplaceToMovue(){
        console.log('running replace manage link.')
        let doc = document.getElementsByName('menu')[0].contentDocument.querySelectorAll('li > a')
        console.log(doc)
        doc.forEach((x,i) => {
            x.setAttribute('href',`https://movue.iranika.info/#/?page=${i+1}`)
        })
        console.log(this.hrefs)
    }

}

window.onload = function(){
    let moext = new MomoiroExtension();
    //moext.ReplaceToMovue()
}
