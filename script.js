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
    json = data.players;

    json = json.sort((a,b) => {
        if(a.score > b.score){
            return -1;
        }
    });

    const infoUl = document.querySelector("#info");
    var count = 1;
    for (const player of json){

        infoUl.innerHTML += `<div>${count} | ${player.name} -- Punten: ${player.score} <div>`;
        count++;
    }
}



start()