const defaultStored = {
  isLiked: false
}

export function safeInitialisation(cardID) {
  if(!getStorage(cardID)) localStorage.setItem(`card-${cardID}`, JSON.stringify(defaultStored));
}

export function setStorage(cardID, value) {
  localStorage.setItem(`card-${cardID}`, JSON.stringify({ ...getStorage(cardID), ...value}))
}

export function getStorage(cardID) {
  const data = localStorage.getItem(`card-${cardID}`);
  return JSON.parse(data);
}

