let total_score = 0
const mainbutton = document.getElementById('main_buton');
mainbutton.addEventListener('click', () => {
  total_score ++;
  switch (true) {
      case (total_score > 8191):
        document.getElementById("bits").textContent = Math.floor(total_score/8192);
        break;
      case (total_score > 7):
        document.getElementById("bits").textContent = Math.floor(total_score/8);
        break;
      case (total_score < 8):
        document.getElementById("bits").textContent = total_score;
        break;
      document.getElementById("bits").textContent = 'x';
  console.log()
  }
  console.log(total_score);
  mainbutton.classList.add('large');

  setTimeout(() => {
    mainbutton.classList.remove('large');
  }, 150);
  switch (true) {
    case (total_score > 8191):
      {document.getElementById('type_unit_information').textContent = 'kilobyte'
      document.getElementById('info').textContent = '8 bits = 1 byte \n1024 bytes = 1 kilobyte'};
    break;
    case (total_score > 7):
      {document.getElementById('type_unit_information').textContent = 'bytes'
      document.getElementById('info').textContent = '8 bits = 1 byte'};
    break;
  }});