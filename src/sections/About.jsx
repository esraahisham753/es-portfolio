import grid1 from '../assets/grid1.webp'
import grid2Webp from '../assets/grid2.webp'

const About = () => {
  return (
    <section id="about" className="c-space my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src={grid1}
              alt="grid-1"
              loading="lazy"
              decoding="async"
              width="640"
              height="360"
              className="w-full sm:h-[276px] h-full object-cover rounded-5xl"
            />
            <p className="grid-headtext">Hi, I'm Esraa Abduallah</p>
            <p className="grid-subtext">Software Engineer with 3+ years of comprehensive freelance experience. My technical passion lies in diving into the fundamental science and theory behind complex concepts, ensuring not just functional but highly optimized solutions.</p>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
                src={grid2Webp}
                alt="grid-2"
                loading="lazy"
                decoding="async"
                width="640"
                height="360"
                className="w-full xl:h-[276px] h-full object-cover"
            />
            <p className="grid-headtext">Tech Stack</p>
            <p className="grid-subtext">Specialized in web development using Javascript, Typescript and Python technologies &amp; Frameworks.<br />React, TailwindCSS, Node.js, Express, Sass, three.js, ReactNative, Django.</p>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About