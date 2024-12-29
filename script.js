document.getElementById('fetch-user').addEventListener('click', fetchRandomUser);

function fetchRandomUser() {
    const userContainer = document.getElementById('user-container');
    userContainer.style.display = 'none'; // Hide container while loading

    fetch('https://randomuser.me/api/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const user = data.results[0];
            document.getElementById('user-avatar').src = user.picture.large;
            document.getElementById('user-name').textContent = `${user.name.first} ${user.name.last}`;
            document.getElementById('user-email').textContent = `Email: ${user.email}`;
            document.getElementById('user-location').textContent = `Location: ${user.location.city}, ${user.location.country}`;
            userContainer.style.display = 'block'; // Show container with user data
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            alert('Failed to fetch user. Please try again.');
        });
}
