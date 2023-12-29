import reactImg from '../../assets/react-core-concepts.png'
import classes from './Header.module.css'

function Header() {
  const title = Math.random() > 0.5 ? 'Fundamental' : 'Crucial';

  return (
    <header>
      <img className={classes.img} src={reactImg} alt="Stylized atom" />
      <h1 className={classes.h1}>React Essential</h1>
      <p className={classes.p}>
        {title} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

export default Header;