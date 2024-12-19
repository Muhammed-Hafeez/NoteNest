const footer: HTMLElement | null = document.querySelector("#footer");
if (footer === null) throw new Error("footer is null");
footer.insertAdjacentHTML(
  "afterbegin",
  `
<div class="bg-white dark:bg-black self-baseline">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-white sm:text-center ">© 2024 <a href="https://flowbite.com/" class="hover:underline">Notes™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0 mx-auto">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</div>
`
);
