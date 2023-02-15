function editElement(ref, match, replacement) {
    const text = ref.textContent;
    const result = text.split(match).join(replacement);
    ref.textContent = result;
}