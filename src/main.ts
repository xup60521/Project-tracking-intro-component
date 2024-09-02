import MenuIcon from "/images/icon-hamburger.svg";
import CloseIcon from "/images/icon-close.svg";
import gsap from "gsap";

const btn = document.getElementById("btn") as HTMLImageElement;
const menu = document.getElementById("menu") as HTMLDivElement;

let isMenuOpen = false;

btn.addEventListener("click", () => {
    if (isMenuOpen) {
        btn.src = MenuIcon;
        gsap.to(menu, {
            height: "0",
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
                isMenuOpen = false;
            },
        });
    } else {
        btn.src = CloseIcon;
        gsap.to(menu, {
            height: "auto",
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
                isMenuOpen = true;
            },
        });
    }
});
