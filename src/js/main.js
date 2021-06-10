const search = document.getElementById('search');


const data = [
    {
        h2: "test",
        p: "test",
    },
    {
        h2: "tusuf",
        p: "test"
    }
]


const faqBlocks = document.querySelector('.faq');
const faqItems = document.querySelectorAll('.faq-item h2');

let dataArr = [];

function searching(query, data) {

dataArr = [];

data.forEach(item => {

const result = item.h2.indexOf(query)

if (result !== -1) {
    console.log(result);
    console.log(item);

    dataArr.push(item);
}
})

}


search.addEventListener('input', (e) => {

    searching(e.target.value, data);

    console.log(dataArr);
    faqBlocks.innerHTML ='';
    
    dataArr.forEach(item => {
        
    faqBlocks.insertAdjacentHTML('beforeend', `<div class="faq-item">
    <h2>${item.h2}</h2>
    <p>${item.p}</p>
    </div>`)
    })

    

})


