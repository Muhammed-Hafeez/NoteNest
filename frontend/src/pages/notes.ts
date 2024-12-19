import "../style.css";
import "../icons.css";
import "../components/Navbar";
import { typedNotes } from "../services/notes";
import { Notes } from "../types/types";

const noteHeading: HTMLElement | null = document.querySelector("#note-heading");
const noteBody: HTMLElement | null = document.querySelector("#note-body");
const saveNote: HTMLElement | null = document.querySelector("#saveNote");

if (noteHeading === null) throw new Error("notes heading is null");
if (noteBody === null) throw new Error("notes body is null");

let debounceTimeout: number;
let paramString = window.location.href.split("?")[1];
let queryString = new URLSearchParams(paramString);
const notesId: string | null = queryString.get("id");
if (notesId === null) {
  noteHeading.innerHTML = "404 notes not found";
  noteBody.innerHTML = "";
} else {
  let notes: Notes | undefined = typedNotes.find(
    (value) => notesId === value.id
  );
  noteHeading.innerHTML = notes
    ? notes.title
    : "Error finding notes please try again later";
  noteBody.innerHTML = notes ? notes.body : "";
}
noteHeading.addEventListener("input", () => {
  let wait = 500; // Delay in milliseconds
  saveNote?.classList.add("save");
  // Clear the previous timeout
  clearTimeout(debounceTimeout);

  // Set a new timeout
  debounceTimeout = setTimeout(() => {
    saveNote?.classList.remove("save");
  }, wait);
});

noteBody.addEventListener("input", () => {
  let wait = 500; // Delay in milliseconds

  // Clear the previous timeout
  clearTimeout(debounceTimeout);
  saveNote?.classList.add("save");
  // Set a new timeout
  debounceTimeout = setTimeout(() => {
    console.log(noteBody.innerText);
    saveNote?.classList.remove("save");
  }, wait);
});
