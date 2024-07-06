document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        });
    });

    // Hover Effects for Plans and Tracks
    const plans = document.querySelectorAll(".plan");
    plans.forEach(plan => {
        plan.addEventListener("mouseover", () => {
            plan.classList.add("hover");
        });
        plan.addEventListener("mouseout", () => {
            plan.classList.remove("hover");
        });
    });

    const tracks = document.querySelectorAll(".track");
    tracks.forEach(track => {
        track.addEventListener("mouseover", () => {
            track.classList.add("hover");
        });
        track.addEventListener("mouseout", () => {
            track.classList.remove("hover");
        });
    });

    // Modal for Plan Selection
    const planButtons = document.querySelectorAll(".plan button");
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Plan Details</h2>
            <p id="plan-details"></p>
        </div>
    `;
    document.body.appendChild(modal);

    const closeModal = modal.querySelector(".close");
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    planButtons.forEach(button => {
        button.addEventListener("click", () => {
            const plan = button.closest(".plan");
            const planDetails = plan.querySelector("h2").textContent + " - " + plan.querySelector("p").textContent;
            modal.querySelector("#plan-details").textContent = planDetails;
            modal.style.display = "block";
        });
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Play/Pause button
    const playPauseBtn = document.getElementById("play-pause");
    const audio = new Audio('track-url.mp3');
    let isPlaying = false;

    playPauseBtn.addEventListener("click", () => {
        if (isPlaying) {
            audio.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            audio.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    });

    // Update progress bar
    audio.addEventListener("timeupdate", () => {
        const progress = document.querySelector(".progress");
        const currentTime = document.querySelector(".current-time");
        const duration = document.querySelector(".duration");

        progress.style.width = (audio.currentTime / audio.duration) * 100 + "%";
        currentTime.textContent = formatTime(audio.currentTime);
        duration.textContent = formatTime(audio.duration);
    });

    // Format time in mm:ss
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }

    // Volume control
    const volumeControl = document.getElementById("volume");
    volumeControl.addEventListener("input", (e) => {
        audio.volume = e.target.value / 100;
    });

    // Previous and Next buttons (dummy implementation)
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    prevBtn.addEventListener("click", () => {
        // Implement previous track logic
        alert("Previous track");
    });

    nextBtn.addEventListener("click", () => {
        // Implement next track logic
        alert("Next track");
    });
});

