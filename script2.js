const obj = {
  array1: ["Text-1", "Text-2", "Text-3", "Text-4", "Text-5", "Text-6"],
  array2: ["Text-a", "Text-b", "Text-c", "Text-d", "Text-e", "Text-f"],
  array3: ["Text-A", "Text-B", "Text-C", "Text-D", "Text-E", "Text-F"],
};

function generator() {
  for (let i = 0; i <= Object.keys(obj).length; i++) {
    randomNumber = Math.floor(Math.random() * obj.array[i].length);
    document.getElementById(
      "root"
    ).innerHTML += `${obj.array[i][randomNumber]}<br>`;
    document.getElementById("root1").innerHTML = Object.keys(obj);
    console.log(Object.keys(obj));
  }
}
