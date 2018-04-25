let i = 0;
const image = document.getElementById('image'),
    year = document.getElementById('year'),
    title = document.getElementById('title'),
    subject = document.getElementById('subject'),
    role = document.getElementById('role'),
    client = document.getElementById('client'),
    tech = document.getElementById('tech'),
    desc = document.getElementById('desc'),
    link = document.getElementById('link'),
    nav = document.getElementsByClassName('navigator'),
    imageDir = 'assets/images/projects/';

// Create array for images
let images = [];
    images[0] = imageDir + '1.jpg';
    images[1] = imageDir + '2.jpg';
    images[2] = imageDir + '3.jpg';
    images[3] = imageDir + '4.jpg';

// Create array of objects with project details
let project = [];
    project[0] = {
        year: 2017,
        title: 'SHICSchools',
        subject: 'Nonprofit Organization',
        role: 'Developer',
        client: 'Students for High-Impact Charity',
        technologies: `Wordpress, jQuery, Bulma`,
        description: 'A responsive website for ReThink Charity, built on WordPress platform.',
        link: 'https://shicschools.org/'
    };
    project[1] = {
        year: 2017,
        title: 'ReThink Charity',
        subject: 'Nonprofit Organization',
        role: `Developer & Designer`,
        client: 'ReThink Charity',
        technologies: `Wordpress, jQuery, Bootstrap`,
        description: 'A responsive website for Students for High Impact Charity, built on WordPress platform.',
        link: 'https://rtcharity.org/'
    };
    project[2] = {
        year: 2018,
        title: 'Weather Forecast',
        subject: 'JavaScript Application',
        role: `Developer & Designer`,
        client: 'Personal',
        technologies: `HTML, SCSS, JavaScript, API`,
        description: 'JavaScript weather application, developed using OpenWeatherMap API.',
        link: 'https://github.com/bekqs/OpenWeatherMap'
    };
    project[3] = {
        year: 2018,
        title: 'Unit Converter',
        subject: 'JavaScript Application',
        role: `Developer & Designer`,
        client: 'Personal',
        technologies: `HTML, SCSS, JavaScript`,
        description: 'JavaScript unit converter.',
        link: 'https://github.com/bekqs/unit-converter'
    };

// Add animation - right direction
const animateRight = function() {
    const cover = document.getElementsByClassName('right');
    for (const c of cover) {
        c.classList.remove('active');
        void c.offsetWidth;
        c.classList.add('active');
    };
};

// Add animation - left direction
const animateLeft = function() {
    const cover = document.getElementsByClassName('left');
    for (const c of cover) {
        c.classList.remove('active');
        void c.offsetWidth;
        c.classList.add('active');
    };
};

// Change content with radio buttons
const radioButtons = document.getElementsByName('radio');
for (var r = 0; r < radioButtons.length; r++) {    
    radioButtons[r].addEventListener('click', function() {
        if (this.checked) {
            i = this.value;
            // Call functions to update content
            animateRight();
            setTimeout(addContent, 500);
        }
    });
};

// Add Content
const addContent = function addContent() {
    image.src = images[i];
    year.innerHTML = project[i].year;
    title.innerHTML = project[i].title;
    subject.innerHTML = project[i].subject;
    role.innerHTML = project[i].role;
    client.innerHTML = project[i].client;
    tech.innerHTML = project[i].technologies;
    desc.innerHTML = project[i].description;
    link.setAttribute('href', project[i].link);
}
addContent();

// Change site content using slider navigation
function update() {
    for (let arrow of nav) {
        arrow.addEventListener('click', function changeContent(e, par) {
            e.preventDefault();
            // Create infinite loop
            if (this.id == 'right') {
                i++;
                animateRight();
                if (i == images.length) {
                    i = 0;
                }
            } else {
                i--;
                animateLeft();
                if (i < 0) {
                    i = images.length - 1;
                }
            };
            // Switch between radio buttons checked attribute
            radioButtons[i].checked = true;            
            // Call functions to update content
            setTimeout(addContent, 500);
        }, false);
    };
};
update();

// About section
const about = document.getElementById('about'),
    aboutHead = document.getElementById('about-head'),
    aboutLink = document.getElementById('about-link');

// Open About section
aboutLink.addEventListener('click', function(e) {
    e.preventDefault();
    about.classList.add('about-active');
    aboutHead.classList.add('about-active');

    // Close About section
    if (about.classList.contains('about-active')) {
        const close = document.getElementsByClassName('close');
        for (const c of close) {
            c.addEventListener('click', function(e) {
                if (c.classList.contains('button')) {
                    e.preventDefault();
                    document.getElementById('bars').checked = false;
                };

                about.classList.remove('about-active');
                aboutHead.classList.remove('about-active');
            });
        };
    };
});

// Responsive design
if (window.innerWidth <= 768) {
    const bars = document.getElementById('bars');

    // Close Navigation section when opening About
    aboutLink.addEventListener('click', function() {
        bars.checked = false;
    });
};