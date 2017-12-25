var ws = new WebSocket('ws://localhost:40510');
ws.onmessage = function (e) {
    console.log(JSON.parse(e.data));
    $('.ticker').append($('<div>').text(e.data));    
}
