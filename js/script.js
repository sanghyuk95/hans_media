window.onload = function () {
  // 사이드바
  const yearTitle = document.querySelectorAll(".year-title");
  const monthTitle = document.querySelectorAll(".month-title");
  const day = document.querySelectorAll(".day");

  yearTitle.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active", !item.classList.contains("active"));
    });
  });
  monthTitle.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active", !item.classList.contains("active"));
    });
  });

  day.forEach((item, idx) => {
    item.addEventListener("click", () => {
      day.forEach((a, i) => {
        a.classList.toggle("active", idx === i);
      });
    });
  });

  // 전체체크
  const allCheck = document.querySelector(".all-check");
  const checkbox = document.querySelectorAll('input[type="checkbox"]');
  console.log(checkbox);

  if (allCheck) {
    allCheck.addEventListener("click", () => {
      checkbox.forEach((item) => {
        if (allCheck.checked) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });
    });
  }
  // 매니저버튼
  const managerImg = document.querySelector(".manager-img ");
  const managerOpen = document.querySelector(".manager-open");
  const managerClose = document.querySelector(".manager-close");
  if (managerImg) {
    managerImg.addEventListener("click", () => {
      managerImg.classList.remove("active");
      managerOpen.classList.add("active");
    });
  }
  if (managerClose) {
    managerClose.addEventListener("click", () => {
      managerImg.classList.add("active");
      managerOpen.classList.remove("active");
    });
  }

  //헤더메뉴
  const headerMenu = document.querySelector(".header-menu");
  const headerMenuImg = document.querySelector(".header-menu > img");
  const sidebar = document.querySelector(".sidebar");
  const mainBtns = document.querySelector(".main-btns");
  const search = document.querySelector(".header-search");

  headerMenu.addEventListener("click", () => {
    headerMenu.classList.toggle("active", !headerMenu.classList.contains("active"));
    sidebar.classList.toggle("active", !sidebar.classList.contains("active"));
    if (mainBtns) {
      mainBtns.classList.toggle("active", !mainBtns.classList.contains("active"));
    }
    search.classList.toggle("active", !search.classList.contains("active"));
  });

  // 팝업
  const popupClose = document.querySelector(".popup-close");
  const popup = document.querySelector(".popup");
  const popupOpen = document.querySelector(".main-btns-move");
  if (popup) {
    popupOpen.addEventListener("click", () => {
      popup.classList.add("active");
    });
    popupClose.addEventListener("click", () => {
      popup.classList.remove("active");
    });
  }
};
