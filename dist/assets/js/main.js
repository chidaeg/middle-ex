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
  {
    // ------------------------------------------
    // 宿泊予約モーダル表示・非表示
    // ------------------------------------------
    const modal = document.querySelector(".p-modal");
    const modal_btn = document.querySelector(".p-modal__btn");
    const mask = document.querySelector(".p-modal__mask");
    const close_btn = document.querySelector(".p-modal__close-btn");

    modal_btn.addEventListener("click", () => {
      modal.classList.add("is-open");
      mask.classList.add("is-open");
    });
    mask.addEventListener("click", () => {
      modal.classList.remove("is-open");
      mask.classList.remove("is-open");
    });
    close_btn.addEventListener("click", () => {
      modal.classList.remove("is-open");
      mask.classList.remove("is-open");
    });
  }

  {
    // ------------------------------------------
    // flatpickr モーダル日付カレンダー選択
    // ------------------------------------------
    flatpickr("#js-datepicker", {
      locale: "ja",
      dateFormat: "Y.m.d（D）",
      minDate: "today",
      mode: "range",
    });
  }
}
