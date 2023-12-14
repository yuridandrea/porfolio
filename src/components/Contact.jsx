const Contact = () => {
  return (
    <section id='contacts'>
      {/* <h1 className='text-xl inline-block pr-2 text-slate-600 mb-8 mt-10 font-mono font-bold'>
        &gt; Contacts
      </h1> */}
      <ul className='block text-center py-11'>
        <li className='inline mr-8'>
          <a href='mailto:dandreaayuri@gmail.com'>
            <i className='fa-solid fa-envelope text-2xl text-slate-600'></i>
          </a>
        </li>
        <li className='inline mr-8'>
          <a href='tel:+41073203565'>
            <i class='fa-solid fa-phone text-2xl text-slate-600'></i>
          </a>
        </li>
        <li className='inline mr-8'>
          <a href=''>
            <i class='fa-brands fa-linkedin text-2xl text-slate-600'></i>
          </a>
        </li>
        <li className='inline mr-8'>
          <a href=''>
            <i class='fa-brands fa-github text-2xl text-slate-600'></i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
