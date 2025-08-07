const content = document.getElementById('content');
const intro = document.getElementById('intro');
const aboutMe = document.getElementById('about-me');
const workExperience = document.getElementById('work-experience');
const projects = document.getElementById('projects');
const contactInfo = document.getElementById('contact-info');
const startButton = document.getElementById('startBtn');
const hiddenContent = document.querySelector('.hidden-content');

function startProfile() {
    const enterProfile = startButton;
    const hiddenProfile = hiddenContent;
    if (enterProfile) {
        if (hiddenContent.style.display === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    }
}
startButton.addEventListener('click', startProfile);