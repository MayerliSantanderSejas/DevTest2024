import { Navbar } from "flowbite-react";

function Header() {
  return (
    <Navbar fluid={true} className="shadow-md px-10 sticky top-0">
      <div className='flex items-center'>
        <span className='text-3xl pl-28 font-roboto font-bold text-neutral-950'>
          Online Polls
        </span>
      </div>
    </Navbar>
  );
}

export default Header;