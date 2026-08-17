function showSection(sectionId) {
    let sections = document.querySelectorAll(".about-info");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");
}
const links = document.querySelectorAll(".nav-link");

window.onscroll = () => {
    let current = "home";

    document.querySelectorAll("section[id]").forEach(section => {
        if (scrollY >= section.offsetTop - 300)
            current = section.id;
    });

    if (current === "title") current = "home";

    links.forEach(link =>
        link.classList.toggle("active", link.hash === "#" + current)
    );
};
const resumeBtn = document.getElementById("resumeBtn");
const resumeModal = document.getElementById("resumeModal");
const closeModal = document.getElementById("closeModal");

resumeBtn.addEventListener("click", () => {
    resumeModal.classList.add("active");
});

closeModal.addEventListener("click", () => {
    resumeModal.classList.remove("active");
});

resumeModal.addEventListener("click", (e) => {
    if (e.target === resumeModal) {
        resumeModal.classList.remove("active");
    }

});
const hamburger = document.getElementById("hamburger");

const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
navMenu.classList.toggle("active");

});
document.querySelectorAll("#navMenu .nav-link").forEach(link => {

link.addEventListener("click", () => {
navMenu.classList.remove("active");
});

});
