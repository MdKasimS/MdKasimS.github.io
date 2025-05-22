var typed = new Typed(".text", {
    strings:[ "Data Wranggler", "Software Developer", "Tech Enthusiast"],
    typeSpeed:200,
    backSpeed: 200,
    backDelay: 1000,
    loop: true
});


// var typed = new Typed(".text", {
//     strings: ["Frontend Developer", "YouTuber", "Web Developer"],
//     typeSpeed: 100,
//     backSpeed:100,
//     backDelay: 1000,
//     loop: true
// })


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};


const resume = document.getElementById('downloadable-resume');
resume.href = './MahamadkasimSache_Resume.pdf';
resume.download = 'MahamadkasimSache_Resume.pdf';
// resume.click();

