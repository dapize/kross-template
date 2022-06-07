import { MutableRefObject, useEffect, useState } from "react";

const useInView = ( ref: MutableRefObject<null | Element> ) => {
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if( entry.isIntersecting ){
          setInView( true );
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 1});
    observer.observe(ref.current as Element)
  }, [])

  return inView
}

export default useInView
