let backtotop = document.querySelector('.back-to-top');
const navbar = document.querySelector("nav");
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      console.log(true); 
      backtotop.classList.add('active');
      navbar.classList.add('fixed-top');
    } else {
      backtotop.classList.remove('active');
      navbar.classList.remove('fixed-top');
    }
  };
  
  // Trigger on page load and scroll
  window.addEventListener('load', toggleBacktotop);
  window.addEventListener('scroll', toggleBacktotop);
}


function changeLargeImage(e){
  let largImage = document.querySelector('#larg-iamge');
  let targetImgSrc =e.target.src 
  largImage.src = targetImgSrc

}

function handleSelect(elm) {
  // Redirects the user to the selected value
  window.location = elm.value;
}


// filter 

// CONTACT FORM START




// CONTACT FORM END




