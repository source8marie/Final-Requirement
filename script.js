const formModal = document.getElementById('formModal');
const overlay = document.getElementById('overlay');
const formTitle = document.getElementById('formTitle');
let selectedTheme = '#FFFFFF';

function openForm(occasion, themeColor) {
    formTitle.textContent = `Send a ${occasion} Greeting`;
    formModal.style.display = 'block';
    overlay.style.display = 'block';
    selectedTheme = themeColor;
}

function closeForm() {
    formModal.style.display = 'none';
    overlay.style.display = 'none';
}

function sendGreeting(event) {
    event.preventDefault();
    const senderName = document.getElementById('senderName').value;
    const recipientName = document.getElementById('recipientName').value;
    const message = document.getElementById('personalMessage').value;

    const newTab = window.open();
    newTab.document.body.style.backgroundColor = selectedTheme;
    newTab.document.body.style.fontFamily = 'Poppins, sans-serif';
    newTab.document.body.style.color = '#212121';
    newTab.document.body.style.display = 'flex';
    newTab.document.body.style.flexDirection = 'column';
    newTab.document.body.style.justifyContent = 'center';
    newTab.document.body.style.alignItems = 'center';
    newTab.document.body.style.height = '100vh';
    newTab.document.body.innerHTML = ` 
        <h1 style="font-size: 3rem;">Happy ${formTitle.textContent.split(' ')[2]}!</h1>
        <p style="font-size: 1.5rem;">From: ${senderName}</p>
        <p style="font-size: 1.5rem;">To: ${recipientName}</p>
        <p style="font-size: 1.2rem;">Message: ${message}</p>
    `;

    closeForm();
}
