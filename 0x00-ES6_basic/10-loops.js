export default function appendToEachArrayValue(array, appendString) {
  const updatedArray = array;
  for (const value of array) {
    const idx = array.indexOf(value);
    updatedArray[idx] = appendString + value;
  }

  return array;
}
