import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import { logo } from '../assets';
import { links } from '../assets/constants';

const NavLinks = ({ handleClick }) => (
  <div className='mt-10'>
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      {/* Sidebar for larger screens */}
      <div className={`md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]`}>
        <img src={logo} alt='logo' className='w-full h-14 object-contain mb-4' />
        <NavLinks />
      </div>

      {/* Mobile menu toggle button */}
      <div className='md:hidden flex items-center p-4 bg-[#191624] fixed top-0 right-0'>
        <button
          onClick={toggleMenu}
          className='text-white text-2xl'
        >
          {mobileMenuOpen ? <RiCloseLine className="w-6 h-6 text-white mr-2" /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile sidebar */}
      <div className={`fixed top-0 left-0 w-3/4 h-full bg-[#191624] p-4 z-10 transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='flex justify-between items-center mb-4'>
          <img src={logo} alt='logo' className='w-24 h-10 object-contain' />
          <button
            onClick={toggleMenu}
            className='text-white text-2xl'
          >
            <RiCloseLine />
          </button>
        </div>
        <NavLinks handleClick={toggleMenu} />
      </div>
    </>
  );
};

export default Sidebar;
