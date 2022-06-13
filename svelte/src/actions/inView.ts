const inView = ( node: HTMLElement, action: () => void) => {
  const mainObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if( entry.isIntersecting ){
        observer.unobserve(entry.target);
        action();
      }
    });
  }, {threshold: 1});

  mainObserver.observe(node);

  return {
    destroy () {
      mainObserver.disconnect();
    }
  }
}

export default inView;
