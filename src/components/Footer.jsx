import github from '/src/assets/github.png';

function Footer() {
  return (
    <footer>
      <div>
        <a href='https://github.com/calebl42/my-skincare-routine' target='_blank'>
          2025 Caleb Lee
          <img src={github} alt='github'></img>
        </a>
      </div>
    </footer>
  )
}

export default Footer;