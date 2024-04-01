/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    let menuBtn = document.getElementById("myNavMenu");
  
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
  
  /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};
  
  function headerShadow() {
    const navHeader =document.getElementById("header");
  
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
  
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
  
    } else {
  
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
  
    }
  }
  
  /* ----- TYPING EFFECT ----- */
  let typingEffect = new Typed(".typedText",{
    strings : ["Physics","Maths","Chemistry"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 2000
  })
  
  /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
  const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
  })
  
  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  
  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})
  
  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})
  
  /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
  
  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})
  
  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  
  /* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')
  function scrollActive() {
  const scrollY = window.scrollY;
  
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')
  
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
  
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
  
    }  else {
  
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
  
    }
  })
  }
  
  window.addEventListener('scroll', scrollActive)


//For Read More
class readMore {
  constructor() {
      this.content = '.readmore__content';
      this.buttonToggle = '.readmore__toggle';
  }

  bootstrap() {
      this.setNodes();
      this.init();
      this.addEventListeners();
  }

  setNodes() {
      this.nodes = {
          contentToggle: document.querySelector(this.content)
      };

      this.buttonToggle = this.nodes.contentToggle.parentElement.querySelector(this.buttonToggle);
  }

  init() {
      const { contentToggle } = this.nodes;

      this.stateContent = contentToggle.innerHTML;

      contentToggle.innerHTML = `${this.stateContent.substring(0, 500)}...`;
  }

  addEventListeners() {
      this.buttonToggle.addEventListener('click', this.onClick.bind(this))
  }

  onClick(event) {
      const targetEvent = event.currentTarget;
      const { contentToggle } = this.nodes

      if (targetEvent.getAttribute('aria-checked') === 'true') {
          targetEvent.setAttribute('aria-checked', 'false')
          contentToggle.innerHTML = this.stateContent;
          this.buttonToggle.innerHTML = 'Show less'

      } else {
          targetEvent.setAttribute('aria-checked', 'true')
          contentToggle.innerHTML = `${this.stateContent.substring(0, 500)}...`
          this.buttonToggle.innerHTML = 'Show more'
      }
  }
}


const initReadMore = new readMore();
initReadMore.bootstrap()