(() => {
  const openButton = document.querySelector("#openInvitation");
  const intro = document.querySelector("#intro");
  const bookScene = document.querySelector("#bookScene");
  const bookWrap = document.querySelector("#bookWrap");
  const toPark = document.querySelector("#toPark");
  const parkScene = document.querySelector("#parkScene");
  const yesButton = document.querySelector("#yesButton");
  const noButton = document.querySelector("#noButton");
  const rsvpFeedback = document.querySelector("#rsvpFeedback");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let noCount = 0;

  openButton.addEventListener("click", () => {
    if (openButton.disabled) return;
    openButton.disabled = true;

    if (window.gsap && !reduceMotion) {
      const tl = gsap.timeline({
        onComplete: () => {
          intro.style.display = "none";
          bookScene.style.display = "block";
          bookScene.setAttribute("aria-hidden", "false");
          gsap.fromTo(bookWrap,
            { opacity: 0, y: 35, rotateX: 8, scale: .94 },
            { opacity: 1, y: 0, rotateX: 0, scale: 1, duration: 1.05, ease: "power3.out" }
          );
          gsap.from(".book-page", { opacity: 0, y: 18, stagger: .16, duration: .8, ease: "power2.out", delay: .18 });
          gsap.from(".continue-button", { opacity: 0, y: 12, duration: .6, delay: .8 });
        }
      });
      // La solapa se abre, el sello desaparece y la carta se desliza hacia arriba.
      tl.to(".envelope-flap", { rotateX: 180, duration: .7, ease: "power2.inOut", transformOrigin: "top center" })
        .to(".wax-seal", { scale: .15, opacity: 0, rotation: 25, duration: .3, ease: "back.in(2)" }, "-=.28")
        .to(".letter-peek", { y: -78, duration: .75, ease: "power3.out" }, "-=.05")
        .to(".letter-peek", { scale: 1.06, duration: .22, yoyo: true, repeat: 1, transformOrigin: "center bottom" }, "-=.2")
        .to(".envelope", { y: 28, opacity: 0, scale: .94, duration: .45, ease: "power2.in" }, "+=.08");
    } else {
      intro.style.display = "none";
      bookScene.style.display = "block";
      bookScene.setAttribute("aria-hidden", "false");
    }
  });

  toPark.addEventListener("click", () => {
    toPark.disabled = true;
    const revealPark = () => {
      bookScene.style.display = "none";
      bookScene.setAttribute("aria-hidden", "true");
      parkScene.style.display = "block";
      parkScene.setAttribute("aria-hidden", "false");
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    };
    if (window.gsap && !reduceMotion) {
      gsap.to(bookScene, {
        opacity: 0, y: -20, duration: .55, ease: "power2.in",
        onComplete: () => {
          revealPark();
          gsap.fromTo(parkScene, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: .9, ease: "power3.out" });
          gsap.from(".tree-left, .tree-right", { scale: .7, transformOrigin: "bottom center", opacity: 0, duration: 1.2, stagger: .15, ease: "back.out(1.4)", delay: .2 });
          gsap.from(".picnic-setup", { y: 55, opacity: 0, duration: 1, ease: "back.out(1.3)", delay: .55 });
          gsap.from(".flowers", { scale: 0, transformOrigin: "center", stagger: .12, duration: .5, ease: "back.out(2)", delay: .8 });
          gsap.from(".park-footer > *", { opacity: 0, y: 12, stagger: .12, duration: .6, delay: 1.05 });
        }
      });
    } else revealPark();
  });

  noButton.addEventListener("click", () => {
    noCount += 1;
    rsvpFeedback.textContent = noCount === 1
      ? "por que escoges esoo 😔"
      : "no lo escojas otra vezz 😒";
    if (window.gsap && !reduceMotion) {
      gsap.fromTo(rsvpFeedback, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .45, ease: "power2.out" });
      gsap.fromTo(noButton, { x: -4 }, { x: 4, duration: .07, repeat: 5, yoyo: true, clearProps: "x" });
    }
  });

  yesButton.addEventListener("click", () => {
    yesButton.disabled = true;
    noButton.disabled = true;
    rsvpFeedback.textContent = "sabía que dirías que sí 💗";
    if (window.gsap && !reduceMotion) {
      gsap.fromTo(rsvpFeedback, { opacity: 0, y: 8, scale: .96 }, { opacity: 1, y: 0, scale: 1, duration: .65, ease: "back.out(1.5)" });
      gsap.fromTo(yesButton, { scale: 1 }, { scale: 1.08, duration: .2, yoyo: true, repeat: 1 });
    }
  });
})();
