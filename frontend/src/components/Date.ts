// Importing required modules, utilities, and data
import { typedNotes } from "../services/notes"; // Typed notes array for further processing
import { getDayByNumber, getMonthByNumber } from "../utils/date"; // Utility functions to get day/month names by number
import { changeThemeDark, resetElementsByAttribute } from "../utils/util"; // Functions for theming and resetting DOM attributes
import { addNotesToNotesContainer } from "./Notes"; // Function to render notes into the notes container

// Select the date container where date-based buttons will be dynamically created
const dateContainer: HTMLElement | null = document.querySelector("#date");

// Generate buttons dynamically for the first 8 notes with valid review dates
typedNotes.map((note, index: number) => {
  // Extract the review date from each note
  const rvDate: string | null = note.reviewDate;

  // Skip notes without a review date
  if (rvDate == null) return;

  // Convert the review date string into a Date object
  const newDate = new Date(rvDate);

  // Get day and month names using utility functions
  let day: string | number = getDayByNumber(newDate.getDay());
  let month: string | number = getMonthByNumber(newDate.getMonth());

  // Handle invalid day/month values by assigning a default "NaN" string
  if (typeof day === "number") day = "NaN";
  if (typeof month === "number") month = "NaN";

  // Limit the number of buttons to 8
  if (index > 7) return;

  // Dynamically insert a button into the date container
  dateContainer?.insertAdjacentHTML(
    "beforeend",
    `
        <button
          class="date hover:bg-black rounded-2xl p-3 hover:text-white text-center bg-white border-2 border-black text-black transition-all duration-200 min-w-[60px] w-full"
          data-date="${note.reviewDate}" data-date-clicked=""
        >
          <p class="text-sm font-light md:text-lg">${day.slice(
            0,
            3
          )}</p> <!-- Display short day name -->
          <p class="text-xl md:text-2xl">${newDate.getDate()}</p> <!-- Display the day number -->
          <p class="text-sm font-light md:text-lg">${month.slice(
            0,
            3
          )}</p> <!-- Display short month name -->
        </button>
    `
  );
});

// Function to filter and render notes based on the selected date
function filterTypedArrayByDate(e: Event) {
  // Get the notes container where filtered notes will be displayed
  const noteContainer = document.getElementById("notes") as HTMLElement;

  // Get the clicked button element and extract its `data-date` attribute
  const elem: HTMLElement = e.currentTarget as HTMLElement;
  const reviewDate: string = elem.getAttribute("data-date") as string;

  // Prevent event bubbling to avoid unintended behavior
  e.stopPropagation();

  // If the button is already clicked, reset the filter and display all notes
  if (elem.getAttribute("clicked") === "true") {
    resetElementsByAttribute("clicked"); // Reset the clicked state for all buttons
    addNotesToNotesContainer(typedNotes, noteContainer); // Display all notes
    return;
  }

  // Set the clicked button's state and apply a dark theme to indicate selection
  resetElementsByAttribute("clicked");
  elem.setAttribute("clicked", "true");
  changeThemeDark(elem);

  // Additional safeguard to ensure the event target is valid
  if (e.currentTarget === null) return console.error("Date target is null");

  // Filter notes that match the selected review date
  const filteredNotes = typedNotes.filter((note) => {
    return note.reviewDate === reviewDate;
  });

  // Clear the notes container and render the filtered notes
  noteContainer.innerHTML = "";
  addNotesToNotesContainer(filteredNotes, noteContainer);
}

// Select all dynamically generated date buttons
const dataDateElements: NodeListOf<Element> =
  document.querySelectorAll("[data-date]");

// Attach click event listeners to each date button for filtering
dataDateElements.forEach((element) => {
  element.addEventListener("click", filterTypedArrayByDate); // Trigger the filter function on button click
});
