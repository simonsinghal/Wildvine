document.addEventListener('DOMContentLoaded', function () {
    // Sample data for events
    const eventsData = [
        {
            name: 'Wildlife Conservation Conference',
            date: '2023-03-15',
            description: 'Join us for a conference on wildlife conservation strategies.'
        },
        {
            name: 'Tree Planting Day',
            date: '2023-04-22',
            description: 'Help us plant trees to preserve wildlife habitats.'
        },
        // Add more events as needed
    ];

    const eventsList = document.getElementById('events-list');

    // Populate the events list
    eventsData.forEach(event => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h2>${event.name}</h2>
            <p class="date">${event.date}</p>
            <p class="description">${event.description}</p>
        `;
        eventsList.appendChild(listItem);
    });
});
