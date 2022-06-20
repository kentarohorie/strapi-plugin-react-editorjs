export function createCustomCommonInput(
  id,
  placeholder,
  defaultValue,
  enableTopMargin = false
) {
  const input = document.createElement("input");
  input.setAttribute("id", id);
  input.classList.add("cdx-input");
  input.setAttribute("placeholder", placeholder);
  input.value = defaultValue;

  if (enableTopMargin) {
    input.classList.add("custom-top-margin");
  }

  return input;
}
