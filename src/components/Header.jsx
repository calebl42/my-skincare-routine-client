import skincare from '/src/assets/skincare.png';

function Header() {
  return (
    <header>
      <img src={skincare} alt='skincare'/>
      <h1>My Skincare Routine</h1>
    </header>
  );
}

export default Header;