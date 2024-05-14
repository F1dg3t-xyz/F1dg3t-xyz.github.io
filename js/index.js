window.onload = function() {
    // Fetch server statuses from server-side script
    fetch('server-status.php')
        .then(response => response.json())
        .then(statuses => {
            // Update server visuals based on status
            for (const server in statuses) {
                const status = statuses[server];
                const serverElement = document.getElementById(`server${server}`);
                if (serverElement) {
                    serverElement.querySelector('.status').textContent = status;
                    if (status === 'Online') {
                        serverElement.style.backgroundColor = 'lightgreen';
                    } else {
                        serverElement.style.backgroundColor = 'lightcoral';
                    }
                }
            }
        })
        .catch(error => console.error('Error fetching server statuses:', error));
};
