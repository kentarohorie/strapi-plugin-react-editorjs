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

export function createCustomCommonInputWithLabel(
  id,
  placeholder,
  defaultValue,
  enableTopMargin = false
) {
  const wrapper = document.createElement("div");
  const label = document.createElement("label");
  label.innerText = placeholder;
  label.classList.add("custom-label-bottom");

  const input = document.createElement("input");
  input.setAttribute("id", id);
  input.classList.add("cdx-input");
  input.setAttribute("placeholder", placeholder);
  input.value = defaultValue;

  if (enableTopMargin) {
    input.classList.add("custom-top-margin");
  }

  wrapper.appendChild(label);
  wrapper.appendChild(input);

  return wrapper;
}
