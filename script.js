const keyC = document.getElementById("key-c");
const soundC = new Audio ("sounds/C.mp3");
keyC.addEventListener("click", () => {
    soundC.play();

    information.innerHTML = "<h2>About Me</h2><p>I’m a curious and creative Full Stack Developer student who enjoys turning ideas into something people can interact with. I’m passionate about learning, problem-solving, and exploring how technology can be used creatively. I believe that every project is an opportunity to learn something new — one line of code, one idea, and one note at a time.</p>";

information.scrollIntoView({behavior: "smooth"});
});

const information = document.getElementById("information");


const keyD = document.getElementById("key-d");
const soundD = new Audio ("sounds/D.mp3");
keyD.addEventListener("click", () => {
    soundD.play();

    information.innerHTML = "<h2>My Skills</h2><p>My current skills include HTML, CSS, and JavaScript, along with responsive web design, Flexbox, and basic programming. I’m continuously developing my full stack skills and enjoy problem-solving, learning new technologies, and creating interactive digital experiences.</p>";
    information.scrollIntoView({behavior: "smooth"});
});

const keyE = document.getElementById("key-e");
const soundE = new Audio ("sounds/E.mp3");
keyE.addEventListener("click", () => {
    soundE.play();

    information.innerHTML = "<h2>My Interests</h2><p>I’m interested in web development, user experience, and the intersection of technology and creativity. I enjoy exploring new tools and techniques to improve my development process and create engaging digital experiences.</p>";
    information.scrollIntoView({behavior: "smooth"});
});

const keyF = document.getElementById("key-f");
const soundF = new Audio ("sounds/F.mp3");
keyF.addEventListener("click", () => {
    soundF.play();

    information.innerHTML = "<h2>My Projects</h2><p>Here are some of the projects I've worked on. Each one has taught me something new and helped me grow as a developer.</p>";
    information.scrollIntoView({behavior: "smooth"});
});

const keyG = document.getElementById("key-g");
const soundG = new Audio ("sounds/G.mp3");
keyG.addEventListener("click", () => {
    soundG.play();

    information.innerHTML = "<h2>My Education</h2><p>I'm currently pursuing a degree in Full Stack Development, where I'm learning to build and maintain web applications from the ground up.</p>";
    information.scrollIntoView({behavior: "smooth"});
});

const keyA = document.getElementById("key-a");
const soundA = new Audio ("sounds/A.mp3");
keyA.addEventListener("click", () => {
    soundA.play();

    information.innerHTML = "<h2>My Contact Information</h2><p>Feel free to reach out to me if you have any questions or would like to collaborate!</p>";
    information.scrollIntoView({behavior: "smooth"});
});

const keyB = document.getElementById("key-b");
const soundB = new Audio ("sounds/B.mp3");
keyB.addEventListener("click", () => {
    soundB.play();

    information.innerHTML = "<h2>My Experience</h2><p>I have experience in various aspects of web development, including frontend and backend technologies. I'm always looking for new opportunities to grow and learn.</p>";
    information.scrollIntoView({behavior: "smooth"});
});