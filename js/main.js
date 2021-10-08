const navSlide = () => {
  const all = document.querySelector('.all');
  const nav = document.querySelector('.nav-links');
  const section = document.getElementsByClassName('section');
  const links = document.getElementsByClassName('myLink');



  all.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });

  for (i = 0; i < links.length; i++) {

    links[i].addEventListener('click', clickMyLink);
  }

  function clickMyLink(e) {

    smoothScroll(event);

    if (nav.classList.contains('nav-active')) {
      all.click();
    }

    for (j = 0; j < section.length; j++) {
     
      links[j].classList.remove('current');
      
      section[j].classList.remove('current');
    }
   
    e.currentTarget.classList.add('current');
  }
  
  function smoothScroll(event) {
    
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    let destination = document.querySelector(targetId).offsetTop;
    window.scrollTo({
      top: destination,
      behavior: 'smooth'
    });
  }

  const scrollBtn = document.getElementById('scrollUp');
  const section1 = document.getElementById('section1');
  scrollBtn.addEventListener('click', e => {
    e.preventDefault();
    let destination = section1.offsetTop;
    window.scrollTo({
      top: destination,
      behavior: 'smooth'
    });
  });
};

const pageFunction = () => {
  navSlide();
};

pageFunction();
