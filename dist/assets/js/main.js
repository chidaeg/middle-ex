"use strict";
{
  {
    // ------------------------------------------
    // SPメニュー表示
    // ------------------------------------------

    const spMenu = document.querySelector(".l-header");
    const spBtn = document.getElementById("js-hamburger-trigger");
    const links = document.querySelectorAll(".p-header__nav-list-item a");

    // ボタンでSPメニューを開閉
    spBtn.addEventListener("click", () => {
      spMenu.classList.toggle("is-open");
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        spMenu.classList.remove("is-open");
      });
    });
  }

  {
    // ------------------------------------------
    // スクロールでヘッダーの色を変える
    // ------------------------------------------
    const header = document.querySelector(".l-header");
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    });
  }

  {
    // ------------------------------------------
    // Topページ ファーストビュー画面切り替え
    // ------------------------------------------
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      effect: "fade",
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 1000,
    });
  }

  {
    // ------------------------------------------
    // Topページ お知らせのタブ切り替え
    // ------------------------------------------
    const tabBtns = document.querySelectorAll(".js-tab-btn");
    const tabContents = document.querySelectorAll(".js-tab-content");

    tabBtns.forEach((e) => {
      e.addEventListener("click", () => {
        const tabName = e.dataset.tab;

        tabBtns.forEach((btn) => btn.classList.remove("is-active"));
        e.classList.add("is-active");

        tabContents.forEach((content) => {
          if (content.id === tabName) {
            content.style.display = "block";
          } else {
            content.style.display = "none";
          }
        });
      });
    });
  }

  {
    // ------------------------------------------
    // AOS.js ふわっと
    // ------------------------------------------
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-out",
      delay: 100,
    });
  }
}
