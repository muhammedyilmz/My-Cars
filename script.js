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











/*
for (var i=0; i<item.length; i++){

        var li=document.createElement('li');
    
        ul.appendChild(li);
        li.innerHTML=li.innerHTML + item[i];
    
    }










































/*

var items = ['car 1', 'car 2', 'car 3'];

var list = document.getElementsByClassName('lists');


function createItem (itemss){
    
    var li = document.createElement('li');
    list.appenChild(li);
    
};

items.forEach(function(item){
    createItem(item);
});

const addBtn = document.querySelector('button');
var itemss = document.querySelector('.tex');

addBtn.addEventListener('click', e => {
    
    if(itemss === ''){
        alert('Please enter car!');
        return;
    }
    else{
        createItem(itemss);
    }
    
})
/*
document.querySelector('.create').onclick = function () {
    var item = document.querySelector('.tex').value;
    if(item === ''){
        alert('Please enter car!');
        return;
    };
    createItem(item);
};
*/

/*
const li = document.createElement('li');
    li.className='my';
    li.appendChild(document.createTextNode(item));

    var span = document.createElement('span');
    var dlt = document.createTextNode('\u00D7');

    span.className = 'dlt';
    span.appendChild(dlt);
    li.appendChild(span);

    span.onclick = function (){
        var li = this.parentElement;
        li.style.display = 'none';
        li.className.remove('dlt');
    }
    */