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
    // Topページ　お知らせのタブ切り替え
    // ------------------------------------------
    const tabBtns = document.querySelectorAll(".p-news__tab-btn");
    const tabContents = document.querySelectorAll(".p-news__tab-content");

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
}
