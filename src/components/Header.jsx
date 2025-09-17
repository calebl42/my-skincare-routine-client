import skincare from '/src/assets/skincare.png';

function Header() {
  return (
    <header>
      <div>
        <img src={skincare} alt='skincare'/>
        <h3>New products every day!</h3>
      </div>
      <h1>My Skincare Routine</h1>
    </header>
  );
}

export default Header;