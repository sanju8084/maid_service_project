import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-orange-500 text-white'>
      <div className='flex justify-around items-center max-w-6xl mx-auto p-3' >
<Link to='/'>
<h1><img src="https://static.wixstatic.com/media/2947d4_9f0742788b594e7794a0ed1ea4a4f86d~mv2.png" className='w-24 h-12'></img></h1>

</Link>
        <ul className='flex gap-4 text-lg font-semibold'>
<Link to='/'>
<li>Home</li>
</Link>
<Link to='/services'><li>Services</li></Link>            
<Link to='/pricing'><li>Pricing</li></Link>           
<Link to='/about'> <li>About</li></Link>            
<Link to='/contact us'><li>ContactUs</li></Link>
<Link to='/sign-in'><li>SignIn</li></Link>

        </ul>
      </div>
    </div>
  );
}

export default Header;
