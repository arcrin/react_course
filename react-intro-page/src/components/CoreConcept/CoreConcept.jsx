import classes from './CoreConcept.module.css'


function CoreConcept({ title, description, image }) {
  return (
    <li className={classes.li}>
      <img className={classes.img} src={image} alt={title} />
      <h3 className={classes.h3}>{title}</h3>
      <p className={classes.p}>{description}</p>
    </li>
  )
}

export default CoreConcept; 