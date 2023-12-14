import { projects } from './helper/projects';

const Projects = () => {
  return (
    <section className=''>
      <h1 className='text-xl inline-block pr-2 text-slate-600 mb-8 mt-10 font-mono font-bold'>
        &gt; Projects
      </h1>
      <div>
        {projects.map((proj, i) => (
          <div key={i} className='bg-white shadow-lg flex mb-8'>
            <img
              src={proj.img}
              alt={proj.name}
              className='object-cover mx-w-full w-[450px] h-[300px] rounded-l-md mr-5'
            />
            <div className='flex flex-col gap-3'>
              <h2 className='text-xl mt-2 font-bold'>{proj.name}</h2>
              <p className='pr-5 mb-2'>{proj.description}</p>
              <ul className='my-2'>
                {proj.techs.map((tech, i) => (
                  <li
                    key={i}
                    className='inline border-sky-400 border-[3px] rounded-[5px] mr-3 py-[2px] px-[10px] font-bold '
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className='my-4'>
                <a
                  href={proj.link}
                  target='_blank'
                  className='bg-cyan-400 px-2 py-1 rounded-md text-black mr-2 font-bold'
                >
                  <i className='fa-solid fa-desktop pr-2'></i>
                  Live demo
                </a>
                <a
                  href={proj.code}
                  target='_blank'
                  className='bg-yellow-300 px-2 py-1 rounded-md text-black mr-2 font-bold github-btn relative'
                >
                  <i className='fa-brands fa-github pr-2'></i>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
