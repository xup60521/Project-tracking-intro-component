# **Frontend Mentor Challenge - Project tracking intro component**

This is a solution to the [Project tracking intro component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/project-tracking-intro-component-5d289097500fcb331a67d80e "https://www.frontendmentor.io/challenges/project-tracking-intro-component-5d289097500fcb331a67d80e").

## Table of contents

- [Overview](#overview)

- [My process](#my-process)

   - [Built with](#built-with)

   - [What I learned](#what-i-learned)

      - [Menu open animation](#menu-open-animation)

- [Resources](#resources)

## Overview

Links:

- GitHub Repo: <https://github.com/xup60521/Project-tracking-intro-component>

- Website: <https://xup60521.github.io/Project-tracking-intro-component/>

```bash
# install dependencies
bun install
# start vite dev server
bun run dev
# build (output path /dist)
bun run build
```

## My process

### Built with

- vite

- typescript

- tailwindcss

- gsap (for animation)

### What I learned

#### Menu open animation

I used `gsap` to add animation to menu when opening or closing.

```tsx
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
```

## Resources

- Google Fonts - <https://fonts.google.com>