export function handleFieldChange(evt, obj, func) {
  const stateToChange = { ...obj };
  stateToChange[evt.target.id] = evt.target.value;
  func(stateToChange);
}

export function removeItem(arr, idx, func) {
  const copyOfArr = [...arr];
  copyOfArr.splice(idx, 1);
  func(copyOfArr);
}
