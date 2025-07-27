
function askButton(){
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

let textArea = document.getElementById("textArea").value;

const raw = JSON.stringify({
  "contents": [
    {
      "parts": [
        {
          "text": textArea
        }
      ]
    }
  ]
});


const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBNdXnmqVjEQgHVZIhd_kpuhHjzu0tLnYg", requestOptions)
  .then((response) => response.json())
  .then((result) => {
  document.getElementById("chat-Bubble").innerHTML += `
    <div class="user">${textArea}</div>
    <div class="assistant">${marked.parse(result.candidates[0].content.parts[0].text)}</div>`;
})
  .catch((error) => console.error(error));
}


