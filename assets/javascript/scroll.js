$(document).ready(function(){
    let lastScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;
  
  window.addEventListener(
    'scroll',
    function handleScroll() {
      const scrollTopPosition =
        window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollTopPosition > lastScrollTop) {
        console.log('scrolling down');
        console.log(scrollTopPosition);
        if (scrollTopPosition >= 120 && scrollTopPosition < 122){
            console.log('load about section');
            window.location.load("index.html#about");
        }
      } else if (scrollTopPosition < lastScrollTop) {
        console.log('scrolling up');
      }
      lastScrollTop =
        scrollTopPosition <= 0 ? 0 : scrollTopPosition;
    },
    false,
  );  
})