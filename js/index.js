document.addEventListener("DOMContentLoaded", function() {
    checkServerStatus('X');
    checkServerStatus('Y');
    // checkServerStatus('Z');
});

function checkServerStatus(serverName) {
    var url = 'http://f1dg3t-' + serverName.toLowerCase() + '.duckdns.org/' + serverName.toLowerCase() + '/index.html';
    var serverDiv = document.getElementById('server' + serverName.toUpperCase());
    var statusParagraph = serverDiv.querySelector('.status');

    // Try to fetch the server URL with a GET request
    fetch(url)
        .then(response => {
            if (response.ok) {
                statusParagraph.textContent = 'Online';
                statusParagraph.style.color = 'green';
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .catch(error => {
            statusParagraph.textContent = 'Offline';
            statusParagraph.style.color = 'red';
        });
}
