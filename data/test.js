const btn= document.querySelector('button')
console.log(btn)
        btn.addEventListener('click', e => {
            console.log('conver button to a')
            btn.outerHTML= `
                <a
                href="./index.html"
                onmouseover= "nextPage()"
                 >click here</a>
            `
        })

function nextPage() {
    const a= document.querySelector('a')

    a.addEventListener('mouseover', handleNextPage)
}

function handleNextPage() {
    console.log('log')
}