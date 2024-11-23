const toggleButton = document.getElementById('toggle-otherSkills') as HTMLButtonElement
const skills = document.getElementById('otherSkills') as HTMLElement

toggleButton.addEventListener('click', () => {
  if(skills.style.display === 'none') {
   
    skills.style.display = 'block'
  
} else {
    skills.style.display = 'none'
}
});
