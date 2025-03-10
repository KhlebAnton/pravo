function toggleAnswer(id) {
    const answer = document.getElementById(`answer${id}`);
    const arrow = document.querySelector(`#answer${id}`).previousElementSibling.querySelector('.arrow');
  
    answer.classList.toggle('open');
    arrow.classList.toggle('rotate');
  }