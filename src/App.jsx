import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <section className='bg-[#F6F9FC]'>
      <div className='m-auto w-7/12 md:w-9/12 lg:w-9/12'>
        <Navbar />
        <About />
        <Projects />
      </div>
    </section>
  );
}

export default App;
