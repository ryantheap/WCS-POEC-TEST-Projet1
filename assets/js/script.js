const navClub = document.getElementById('navClub');
const navClubsList = document.getElementById('navClubsList');

navClub.addEventListener('click', () => {
    navClubsList.style.display = "block";
})

document.addEventListener('click', (element) => {
    if (element.target != navClubsList && element.target != navClub) {
        navClubsList.style.display = "none";
    }
}) 