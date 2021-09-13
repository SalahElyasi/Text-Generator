const obj = {
  array1: ["Widder", "Stier", "Zwillinge", "Krebs", "Löwe", "Jungfrau"],
  array2: ["Text-a", "Text-b", "Text-c", "Text-d", "Text-e", "Text-f"],
  array3: ["Text-A", "Text-B", "Text-C", "Text-D", "Text-E", "Text-F"],
};

function generator() {
  randomNumber1 = Math.floor(Math.random() * obj.array1.length);
  randomNumber2 = Math.floor(Math.random() * obj.array2.length);
  randomNumber3 = Math.floor(Math.random() * obj.array3.length);
  document.getElementById(
    "root"
  ).innerHTML = `${obj.array1[randomNumber1]}<br>${obj.array2[randomNumber2]}<br>${obj.array3[randomNumber3]}`;
  document.getElementById("root1").innerHTML = Object.keys(obj).length;
  console.log(Object.keys(obj).length);
}
