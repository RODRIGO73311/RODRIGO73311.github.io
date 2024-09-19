



const $next = document.querySelector
('.next');
const $prev = document.querySelector
('.prev');
$next .addEventListener(
    'click',
()=>{
    const items = this.document.
querySelectorAll('.item');
document.querySelector('.slide').
appendChild(items[0]);

},
);
$prev.addEventListener(
    'click'
    ()=>{
        cons items=document.
        querySelectorAll(',item');
    document(items[items.length - 1]);
,    }
);