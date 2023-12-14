const Navbar = () => {
  return (
    <nav>
      <ul className='w-full text-right font-mono pt-5 text-xl text-slate-600'>
        <li className='inline mr-8'>
          <a
            href='/'
            onClick={(e) => {
              let hero = document.getElementById('projects');
              e.preventDefault(); // Stop Page Reloading
              hero && hero.scrollIntoView();
            }}
          >
            Projects{' '}
          </a>
        </li>
        <li className='inline '>
          <a
            href='/'
            onClick={(e) => {
              let hero = document.getElementById('contacts');
              e.preventDefault(); // Stop Page Reloading
              hero && hero.scrollIntoView();
            }}
          >
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
