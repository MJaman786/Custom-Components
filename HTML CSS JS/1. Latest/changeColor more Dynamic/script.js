const body = document.querySelector('body');
const controlCard = body.querySelector('.control-card');

const subtitle = controlCard.querySelector('.subtitle');
const statusText = controlCard.querySelector('#status-text');

const startBtn = controlCard.querySelector('#start-btn');
const stopBtn = controlCard.querySelector('#stop-btn');

const customAlertModal = body.querySelector('#custom-alert-modal');
const modalContent = customAlertModal.children[0];
const modalTitle = modalContent.children[0];
const modalMessage = modalContent.children[1];
const modalCloseBtn = modalContent.children[2];

let intervalId = null;
const hex = '0123456789ABCDEF';

function changeColor() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  subtitle.innerHTML = `Current color: <strong>${color}</strong>`;
  body.style.backgroundColor = color;
  statusText.textContent = 'Running';
}

// ✅ Function to show modal with custom title + message
function showCustomAlert(title, message) {
  modalTitle.textContent = title;
  modalMessage.textContent = message;
  customAlertModal.classList.remove('hidden');
}

// ✅ Close modal when user clicks the close button
modalCloseBtn.addEventListener('click', () => {
  customAlertModal.classList.add('hidden');
});

startBtn.addEventListener('click', () => {
  if (intervalId) {
    // Already running → show alert + stop the execution
    clearInterval(intervalId);
    intervalId = null;
    statusText.textContent = 'Stopped';
    showCustomAlert('⚠️ Already Running!', 'Color changing was active. It has been stopped for safety.');
  } else {
    // Start the color change loop
    intervalId = setInterval(changeColor, 1000);
    statusText.textContent = 'Running';
  }
});

stopBtn.addEventListener('click', () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    statusText.textContent = 'Stopped';
  } else {
    // Not running → show alert
    showCustomAlert('ℹ️ Already Stopped!', 'The color changer is not running right now.');
  }
});
