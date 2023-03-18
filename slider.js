// slider text
const sliderText = ['Hello Slider', 'Hallo Mr Slider', 'Hi Mrs Slider'];

//index of the array
let index = 0;

const sliderInner = document.getElementById('slider-inner');

const sliderLoop = () => {
  setInterval(() => {
    if (index === sliderText.length) {
      index = 0;
    }
    sliderInner.innerText = sliderText[index];
    index++;
  }, 2000);
};

sliderLoop();
