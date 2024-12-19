export function changeThemeDark(elem: HTMLElement) {
  elem.style.backgroundColor = "#000";
  elem.style.color = "#fff";
}

export function changeThemeLight(elem: HTMLElement) {
  elem.style.backgroundColor = "#fff";
  elem.style.color = "#000";
}

export function resetElementsByAttribute(attribute: string) {
  document.querySelectorAll(`[${attribute}]`).forEach((allElem) => {
    allElem.removeAttribute(attribute);
    const allElements = allElem as HTMLElement;
    changeThemeLight(allElements);
  });
}

export const ToggleDataAttributeValue = (
  elem: HTMLElement,
  value: string,
  tag: string
) => {
  if (elem.getAttribute(tag) === value) {
    changeThemeLight(elem);
    elem.setAttribute(tag, "");
    return false;
  }
  changeThemeDark(elem);
  elem.setAttribute(tag, value);
  return true;
};
