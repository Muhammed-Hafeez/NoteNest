const nav: HTMLElement | null = document.getElementById("Navbar");

const pages: Array<{ page: string; link: string }> = [
  {
    page: "main",
    link: "/",
  },
  {
    page: "home",
    link: "/home",
  },
  {
    page: "login",
    link: "/login",
  },
  {
    page: "register",
    link: "/signup",
  },
];

if (nav === null) throw new Error("Navbar is null");

nav.innerHTML = `
 <nav
      class="flex bg-black text-white w-fit p-4 rounded-full m-4 fixed z-40 right-0 cursor-pointer bottom-10 border-2 border-white"
      id="navMenu"
    >
      <div class="menu"></div>
</nav>
    <div
      class="bg-black w-full h-full text-white  -translate-x-full transition-transform duration-200 sm:w-1/2 md:w-1/4 fixed top-0 z-20"
      id="menuBar"
    >
      <ul class="relative top-20 p-4" id="sideMenuUl">
      </ul>
    </div>
`;
pages.forEach((items) => {
  document.getElementById("sideMenuUl")?.insertAdjacentHTML(
    "beforeend",
    `
          <li class="border-b-white border-b-2 p-2">
            <a href="${items.link}">${items.page}</a>
          </li>
        `
  );
});
const navMenu: HTMLElement | null = document.getElementById("navMenu");
navMenu?.addEventListener("click", () => {
  document.querySelector("#menuBar")?.classList.toggle("-translate-x-full");
});
