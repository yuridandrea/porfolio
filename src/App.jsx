import { About, Navbar, Projects, Contact } from './components';

function App() {
  return (
    <section className='bg-[#F6F9FC]'>
      <div className='m-auto md:w-9/12 w-5/6'>
        <Navbar />
        <About />
        <Projects />
        <Contact />
      </div>
    </section>
  );
}

export default App;
