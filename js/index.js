document.addEventListener("DOMContentLoaded", function() {
    checkServerStatus('X');
    checkServerStatus('Y');
    checkServerStatus('Z');
});

function checkServerStatus(serverName) {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    var serverUrl = 'http://f1dg3t-' + serverName.toLowerCase() + '.duckdns.org';
    var finalUrl = proxyUrl + serverUrl;
    var serverDiv = document.getElementById('server' + serverName.toUpperCase());
    var statusParagraph = serverDiv.querySelector('.status');

    // Try to fetch the server URL with a GET request
    fetch(finalUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            statusParagraph.textContent = 'Online';
            statusParagraph.style.color = 'green';
        })
        .catch(error => {
            statusParagraph.textContent = 'Offline';
            statusParagraph.style.color = 'red';
        });
}
