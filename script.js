const items = ['Ferrari', 'Mercedes', 'Audi', 'Bmw', 'Porsche'];

const addBtn = document.querySelector('.create');

var inp = document.getElementsByClassName('tex');

var ul = document.querySelector('ul');


function createItem (item) {

    var li = document.createElement('li');
    var t = document.createTextNode(item);
    li.className = 'my';
    li.appendChild(t);
    ul.appendChild(li);


    var span = document.createElement('span');
    var test = document.createTextNode('\u00D7');

    span.className = 'dlt';
    span.appendChild(test);
    li.appendChild(span);
    
    span.onclick = function () {
        var li = this.parentElement;
        li.style.display = 'none';
    };
};

items.forEach(function (item) {

    createItem(item);

});

addBtn.addEventListener('click', (item) => {
    var item = document.querySelector('.tex').value;
    if(inp.value === ''){
        alert('Please enter car!');
    }
    else{
        createItem(item);
    };
});
