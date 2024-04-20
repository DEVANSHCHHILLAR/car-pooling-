let ridesData = []; // To store ride details

document.getElementById('rideForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    let start = document.getElementById('start').value;
    let destination = document.getElementById('destination').value;
    let datetime = document.getElementById('datetime').value;
    let seats = parseInt(document.getElementById('seats').value); // Convert to integer

    // Create ride object
    let ride = {
        start,
        destination,
        datetime,
        seats
    };

    // Add ride to ridesData
    ridesData.push(ride);

    // Update rides list
    updateRidesList();

    // Clear form
    document.getElementById('rideForm').reset();
});

function updateRidesList() {
    let ridesList = document.getElementById('ridesList');
    ridesList.innerHTML = ''; // Clear existing list

    ridesData.forEach((ride, index) => {
        let rideDiv = document.createElement('div');
        rideDiv.classList.add('ride-entry');
        rideDiv.innerHTML = `
            <p>From ${ride.start} to ${ride.destination} at ${ride.datetime} - Seats available: ${ride.seats}</p>
            <button onclick="bookRide(${index})">Book a Seat</button>
        `;
        ridesList.appendChild(rideDiv);
    });
}

function bookRide(index) {
    let ride = ridesData[index];
    
    if (ride.seats > 0) {
        ride.seats--; // Decrement available seats
        alert("You have successfully booked a seat!");
        updateRidesList(); // Update the rides list to reflect changes
    } else {
        alert("Sorry, no seats available.");
    }
}
