/* ==========================================================
   SECTION 06 : LEARN IN 36 SECONDS
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const videos = document.querySelectorAll(
        ".featured-video-player, .episode-video"
    );

    let activeVideo = null;

    /* ==================================================
       STOP VIDEO
    ================================================== */

    function stopVideo(video) {

        if (!video) return;

        video.pause();

        video.currentTime = 0;

        video.controls = false;

        const card = video.closest(
            ".featured-video, .episode-card"
        );

        if (!card) return;

        const playButton = card.querySelector(
            ".play-button, .episode-play"
        );

        if (playButton) {

            playButton.classList.remove("hidden");

        }

    }

    /* ==================================================
       INITIALIZE EACH VIDEO
    ================================================== */

    videos.forEach((video) => {

        const card = video.closest(
            ".featured-video, .episode-card"
        );

        if (!card) return;

        const playButton = card.querySelector(
            ".play-button, .episode-play"
        );

        /* ==========================================
           HOVER EFFECT
        ========================================== */

        card.addEventListener("mouseenter", () => {

            card.classList.add("video-hover");

        });

        card.addEventListener("mouseleave", () => {

            card.classList.remove("video-hover");

        });

        /* ==========================================
           PLAY VIDEO
        ========================================== */

        playButton.addEventListener("click", async (e) => {

            e.preventDefault();

            e.stopPropagation();

            /* Stop every other video */

            videos.forEach((otherVideo) => {

                if (otherVideo !== video) {

                    stopVideo(otherVideo);

                }

            });

            /* Restart current video */

            video.pause();

            video.currentTime = 0;

            video.controls = true;

            video.volume = 1;

            playButton.classList.add("hidden");

            try {

                await video.play();

                activeVideo = video;

            }

            catch (error) {

                console.warn(error);

                playButton.classList.remove("hidden");

            }

        });

        /* ==========================================
           VIDEO ENDED
        ========================================== */

        video.addEventListener("ended", () => {

            video.controls = false;

            video.currentTime = 0;

            playButton.classList.remove("hidden");

            if (activeVideo === video) {

                activeVideo = null;

            }

        });

        /* ==========================================
           VIDEO PAUSED
        ========================================== */

        video.addEventListener("pause", () => {

            if (video.ended) return;

            if (video.currentTime === 0) {

                playButton.classList.remove("hidden");

                video.controls = false;

            }

        });

    });

});