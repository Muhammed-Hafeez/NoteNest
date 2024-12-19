import { typedNotes } from "../services/notes";
import { Notes } from "../types/types";
const NotesGrid = document.querySelector("#notes") as HTMLElement;
const bodyLimit = 100;

export function addNotesToNotesContainer(
  noteArray: Notes[],
  NotesGrid: Element
) {
  noteArray.map((note) => {
    NotesGrid?.insertAdjacentHTML(
      "beforeend",
      `
        <span class="m-2 rounded-xl p-4 h-fit hover:cursor-pointer" style="background-color:${
          note.color
        };" data-notes-id="${note.id}">
          <h2 class="text-xl font-bold">${note.title}</h2>
          <p class="text-sm w-full">
            ${
              note.body.length > bodyLimit
                ? note.body.slice(0, bodyLimit).concat("...")
                : note.body
            }
          </p>
        </span>
        `
    );
  });
}

addNotesToNotesContainer(typedNotes, NotesGrid);

document.querySelectorAll("[data-notes-id]").forEach((element) => {
  element.addEventListener("click", moveToNotePage);
});

function moveToNotePage(e: Event) {
  e.stopPropagation();
  const element = e.currentTarget as HTMLElement;
  const id: string | null = element.getAttribute("data-notes-id");

  if (id == null) {
    return;
  }
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  url.pathname = "/notes"
  
  params.set("id", id);
  url.search = params.toString();
  window.history.pushState({}, "", url);
  window.location.reload();
}
