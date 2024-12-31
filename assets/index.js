const url = new URL(location.href);

// Gerando um ID único para a sala da reunião
const roomId = 'room-' + Math.random().toString(36).substr(2, 9); // ou use UUID se preferir
const roomUrl = new URL("https://my-digital-village-phone.whereby.com/" + roomId);

roomUrl.pathname = url.pathname;
roomUrl.search = url.search;

const root = document.getElementById("root");
const whereby = document.createElement("whereby-embed");
whereby.setAttribute("room", roomUrl.href);
whereby.setAttribute("minimal", true);
whereby.setAttribute("style", "height: 100%;");
root.appendChild(whereby);

