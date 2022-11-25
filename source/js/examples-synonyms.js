const examples = document.querySelectorAll('.example');

for (let example of examples) {
  const buttonExample = example.querySelector('.example__button');

  buttonExample.addEventListener('click', () => {
    buttonExample.style.display = 'none';

    const paragraphExamples = document.createElement('p');
    paragraphExamples.classList.add('example__paragraph');
    paragraphExamples.textContent = buttonExample.dataset.examples;
    example.append(paragraphExamples);
  })
}
