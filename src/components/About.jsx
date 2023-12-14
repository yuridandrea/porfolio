import cv from '../assets/Y-Dandrea.pdf';

const About = () => {
  return (
    <section>
      <div>
        <h1 className='text-[5rem] inline-block pr-2 text-slate-600 mt-[200px] font-mono'>
          &gt; Yuri D'Andrea
        </h1>
        <div className='blinker big bg-slate-600'></div>
        <p className='text-xl my-[100px] pr-[10rem]'>
          As a front-end developer, I specialize in building captivating user
          interfaces using the power of React. Proficient in HTML, CSS, and
          JavaScript, I bring creativity to life by seamlessly integrating
          technology with user-centric design. With a passion for crafting
          responsive and dynamic experiences, I thrive on the challenges of the
          evolving web landscape.
        </p>
      </div>
      {/* terminal */}
      <div className='w-7/9'>
        {/* header terminal */}
        <div className='bg-slate-200 h-8 rounded relative '>
          {/* circles */}
          <div className='flex gap-2 absolute top-2 left-3'>
            <div className='bg-red-600 w-4 h-4 rounded-2xl'></div>
            <div className='bg-yellow-400 w-4 h-4 rounded-2xl'></div>
            <div className='bg-green-600 w-4 h-4 rounded-2xl'></div>
          </div>
        </div>
        {/* terminal body */}
        <div className='bg-slate-600 rounded-b flex flex-col gap-8 px-11 py-6  text-lg font-mono shadow-lg'>
          <div>
            <p className='text-white'>&gt; Yuri.currentLocation</p>
            <p className='text-yellow-300'>"Lugano, CH"</p>
          </div>
          <div>
            <p className='text-white'>&gt; Yuri.contactInfo</p>
            <p className='text-yellow-300'>
              ["
              <a className='text-sky-400' href='mailto:dandreaayuri@gmail.com'>
                dandreaayuri@gmail.com
              </a>
              ", "{' '}
              <a
                className='text-sky-400'
                href='https://www.linkedin.com/in/yuri-d-andrea/'
                target='_blank'
              >
                Linkedin
              </a>
              ", "{' '}
              <a
                className='text-sky-400'
                href='https://github.com/yuridandrea'
                target='_blank'
              >
                Github
              </a>
              "]
            </p>
          </div>
          <div>
            <p className='text-white'>&gt; Yuri.curriculum</p>
            <p className='text-yellow-300'>
              "
              <a className='text-sky-400' href={cv} download='Y-Dandrea'>
                Y-Dandrea.pdf
              </a>
              "
            </p>
          </div>
          <div>
            <p className='text-white'>&gt; Yuri.interests</p>
            <p className='text-yellow-300'>
              ["design", "outdoor", "cooking", "plants"]
            </p>
          </div>
          <div>
            <p className='text-white'>&gt; Yuri.education</p>
            <p className='text-yellow-300'>
              ["Full stack developer - Master class", "Henley Collage diploma -
              Design and Photography"]
            </p>
          </div>
          <div>
            <p className='text-white'>&gt; Yuri.skills</p>
            <p className='text-yellow-300'>
              ["Sass/Less", "HTML5", "JavaScript", "ReactJs", "VueJs",
              "webpack", "git"]
            </p>
          </div>
          <div className='text-white'>
            &gt; <div className='blinker small'></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
