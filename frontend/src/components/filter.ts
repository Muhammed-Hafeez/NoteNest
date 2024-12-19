import { typedNotes } from "../services/notes";
import { Notes } from "../types/types";
import { addNotesToNotesContainer } from "./Notes";
const notesGrid = document.querySelector("#notes");
const filterInput: HTMLInputElement | null =
  document.querySelector("#filterNotes");

filterInput?.addEventListener("input", (e: Event) => {
  const target: HTMLInputElement | null = e.target as HTMLInputElement;

  if (target === null || notesGrid === null) {
    return;
  }
  const value = target.value;
  const regex = RegExp(`(${value})`, "gim");
  const filteredNotes: Notes[] = typedNotes.filter((note) => {
    return note.title.match(regex);
  });
  notesGrid.innerHTML = "";
  if (filteredNotes.length !== 0) {
    addNotesToNotesContainer(filteredNotes, notesGrid);
  } else {
    notesGrid.innerHTML = `<h1 class="font-bold text-2xl md:text-4xl w-fit">Notes not found</h1>`;
  }
});
