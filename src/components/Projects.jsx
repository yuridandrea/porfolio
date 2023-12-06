import { projects } from './helper/projects';

const Projects = () => {
  return (
    <section className=''>
      <h1>Projects</h1>
      <div>
        {projects.map((proj, i) => (
          <div key={i} className='bg-white shadow-lg flex gap-2 mb-8'>
            <img src={proj.img} alt='' />
            <div className='flex flex-col gap-3'>
              <h2 className='text-xl mt-2'>{proj.name}</h2>
              <p>{proj.description}</p>
              <ul className=''>
                {proj.techs.map((tech, i) => (
                  <li
                    key={i}
                    className='inline border-sky-400 border-[3px] rounded-[5px] mr-3 py-[2px] px-[10px] font-bold '
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div>
                <a href={proj.link}>Live demo</a>
                <a href={proj.code}>GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
