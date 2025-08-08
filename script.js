var json


function start(){
    fetchJson()
}


function fetchJson(){
    fetch('data.json')
        .then(res => res.json())
        .then(data => loadInfo(data))
}

function loadInfo(data){
    json = data
    showInfo()
}

function showInfo(){
    console.log(json.players)
}




start()