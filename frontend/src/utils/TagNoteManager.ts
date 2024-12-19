import { typedNotes } from "../services/notes";
import { Notes } from "../types/types";

/**
 * The `TagNotesManager` class provides methods to filter and manage notes dynamically
 * based on specific tags. It maintains a static array of filtered notes.
 */
export default class TagNotesManager {
  // A static array to store filtered notes
  static filteredNotes: Notes[] = [];

  /**
   * Updates the filtered notes list based on the specified filter condition and value.
   *
   * @param shouldFilter - A boolean flag indicating whether to add or remove notes based on the tag.
   *                       If true, notes matching the tag are added to the filtered list.
   *                       If false, notes matching the tag are removed from the filtered list.
   * @param value - The tag to filter notes by.
   *
   * @returns The updated list of filtered notes. If no notes are filtered, the original `typedNotes` list is returned.
   */
  updateFilteredNotes = (shouldFilter: boolean, value: string): Notes[] => {
    if (shouldFilter) {
      // Add notes matching the specified tag to the filtered list
      typedNotes
        .filter((note) => note.tag === value)
        .forEach((note) => {
          TagNotesManager.filteredNotes.push(note);
        });
    } else {
      // Remove notes matching the specified tag from the filtered list
      TagNotesManager.filteredNotes = TagNotesManager.filteredNotes.filter(
        (note) => note.tag !== value
      );
    }

    // Return the original list if the filtered list is empty
    if (TagNotesManager.filteredNotes.length <= 0) return typedNotes;

    // Return the filtered list
    return TagNotesManager.filteredNotes;
  };
}
