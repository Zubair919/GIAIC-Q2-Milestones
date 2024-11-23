var toggleButton = document.getElementById('toggle-otherSkills');
var skills = document.getElementById('otherSkills');
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
