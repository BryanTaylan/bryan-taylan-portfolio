// Performance optimized scroll animations with throttling
export const initScrollAnimations = () => {
  const animateElements = document.querySelectorAll('.fade-in-up, .section-animate, .project-cards-container, .about-items, .skills-container, .contact-content');

  const observerOptions = {
    threshold: [0.1, 0.15, 0.2],
    rootMargin: '0px 0px -10px 0px'
  };

  // Use requestAnimationFrame for smooth transitions
  let animationFrame;
  const handleIntersection = (entries) => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
    
    animationFrame = requestAnimationFrame(() => {
      entries.forEach((entry) => {
        const target = entry.target;
        
        if (entry.isIntersecting) {
          // Element is entering viewport - fade in
          target.classList.add('animate');
          target.classList.remove('fade-out');
        } else {
          // Element is leaving viewport - fade out
          target.classList.remove('animate');
          target.classList.add('fade-out');
        }
      });
    });
  };

  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  // Initialize all elements as not animated and observe them
  animateElements.forEach((element) => {
    element.classList.remove('animate');
    element.classList.add('fade-out');
    observer.observe(element);
  });

  // Cleanup function for performance
  return () => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
    observer.disconnect();
  };
};