// slider text
const sliderText = ['Hello Slider', 'Hallo Mr Slider', 'Hi Mrs Slider'];
const image = ['images/tea-2.png', 'images/tea-3.png', 'images/tea-4.png'];

//index of the array
let index = 0;
// let index = Math.round(Math.random() * sliderText.length);

const sliderInner = document.getElementById('slider-inner');
const sliderImgInner = document.getElementById('slider-img-inner');

// without parameter and not reusable

// const sliderLoop = () => {
//   setInterval(() => {
//     if (index === sliderText.length) {
//       index = 0;
//     }
//     sliderInner.innerText = sliderText[index];
//     index++;
//   }, 2000);
// };

// sliderLoop();

// using reusable function for text

const sliderCustomLoop = (arr, targetContent) => {
  setInterval(() => {
    if (index === arr.length) {
      index = 0;
    }
    targetContent.innerText = arr[index];
    index++;
  }, 2000);
};

sliderCustomLoop(sliderText, sliderInner);

// image slider

const sliderImgLoop = (arr, targetContent) => {
  setInterval(() => {
    if (index === arr.length) {
      index = 0;
    }
    targetContent.setAttribute('src', arr[index]);
    index++;
  }, 2000);
};

sliderImgLoop(image, sliderImgInner);
