"use strict";
{
  {
    // ------------------------------------------
    // SPメニュー表示
    // ------------------------------------------

    const sp_menu = document.querySelector(".l-header");
    const sp_btn = document.getElementById("js-hamburger-trigger");
    const links = document.querySelectorAll(".p-header__nav-list-item a");

    // ボタンでSPメニューを開閉
    sp_btn.addEventListener("click", () => {
      sp_menu.classList.toggle("is-open");
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        sp_menu.classList.remove("is-open");
      });
    });
  }
}
