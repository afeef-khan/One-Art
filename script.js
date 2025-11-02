const hamIcon = document.querySelector('.ham-icon');
const navList = document.querySelector('.nav-list');
const hamCross = document.querySelector('.ham-cross');
const navLink = document.querySelectorAll('.nav-list li a');

hamIcon.addEventListener('click', () => {
    hamIcon.classList.add('ham-active');
    navList.classList.add('ham-active');
    hamCross.classList.add('ham-active');
})

hamCross.addEventListener('click', () => {
    hamIcon.classList.remove('ham-active');
    navList.classList.remove('ham-active');
    hamCross.classList.remove('ham-active');
})

// Close menu if clicking outside
document.addEventListener('click', (event) => {
    if (
        !navList.contains(event.target) &&
        !hamIcon.contains(event.target)
    ) {
        hamIcon.classList.remove('ham-active');
        navList.classList.remove('ham-active');
    }
});

// Close menu if click on NavLink
navLink.forEach(link => {
    link.addEventListener('click', () => {
        hamIcon.classList.remove('ham-active');
        navList.classList.remove('ham-active');
        hamCross.classList.remove('ham-active');
    })
});

