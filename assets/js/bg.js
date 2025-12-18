const backgroundImages = [
    '//raw.githubusercontent.com/chiyuukei/blog/main/assets/img/bg.jpg',
    '//raw.githubusercontent.com/chiyuukei/blog/main/assets/img/bg2.jpg',
    '//raw.githubusercontent.com/chiyuukei/blog/main/assets/img/bg3.jpg'
  ];

  let currentIndex = 0;
  const interval = 1 * 60 * 1000;

  function changeBackground() {
    document.body.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;
    currentIndex = (currentIndex + 1) % backgroundImages.length;
  }

  setInterval(changeBackground, interval);
  changeBackground();
