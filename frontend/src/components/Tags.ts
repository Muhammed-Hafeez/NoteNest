import notes from "../data/notes.json";
import TagNotesManager from "../utils/TagNoteManager";
import {  ToggleDataAttributeValue } from "../utils/util";
import { addNotesToNotesContainer } from "./Notes";

const tags: HTMLElement | null = document.querySelector("#tags");
const notesContainer = document.querySelector("#notes") as HTMLElement;
const tagsSet = new Set<string>();

for (const note of notes) {
  tagsSet.add(note.tag);
}

const tagsList = Array.from(tagsSet);

tagsList.map((tag: string) => {
  tags?.insertAdjacentHTML(
    "beforeend",
    ` <button
          class="border-2 hover:bg-black focus:bg-black hover:text-white focus:text-white rounded-xl py-2 px-4 border-gray-400 focus:border-black " data-tag=""
        >
         ${tag}
        </button>`
  );
});



document.querySelectorAll("[data-tag]").forEach((element) => {
  element.addEventListener("click", (e) => {
    e.stopPropagation();
    const elem: HTMLElement = e.currentTarget as HTMLElement;
    const shouldFilter = ToggleDataAttributeValue(elem, "clicked","data-tag");
    const note = new TagNotesManager();
    let newNotes = note.updateFilteredNotes(shouldFilter, elem.innerText);
    notesContainer.innerHTML = "";
    addNotesToNotesContainer(newNotes, notesContainer);
  });
});

