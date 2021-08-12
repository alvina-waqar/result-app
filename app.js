var array = [{name:'ali',age:13,contactno:88888,result:0},
{name:'ali',age:13,contactno:88888,result:0},
{name:'asif',age:13,contactno:88888,result:1},
{name:'anum',age:13,contactno:88888,result:1},
{name:'alishba',age:13,contactno:88888,result:0},
{name:'ali askari',age:13,contactno:88888,result:0},
{name:'areeba',age:13,contactno:88888,result:1},
{name:'alvina',age:13,contactno:88888,result:1},
{name:'alina',age:13,contactno:88888,result:0},
{name:'ali zaidi',age:13,contactno:88888,result:1},
]


for(var i=0;i<array.length;i++){
    array[i].rollno = i+1
}

for(var i=0;i<array.length;i++){
    if(array[i].result == 0){
        array[i].rank = 'fail'
    }
    else{
        array[i].rank = 'pass'
    }
}

var c = document.getElementById('main')

function displayresult(){
    var roll_no = document.getElementById('userinput')
    for(var i=0 ; i<array.length ; i++){
        if(array[i].rollno == roll_no.value){
            console.log(array[i])
            var e1 = document.createElement('p')
            e1.append(document.createTextNode(array[i].rank))
            c.append(e1)
            roll_no.value =''
        }

    }
}

