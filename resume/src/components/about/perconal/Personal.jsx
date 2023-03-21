import classes from './Personal.module.css';

import photo from './../../../assets/photo.webp';
import { Link } from 'react-router-dom';

export default function Personal() {
  return (
    <>
      <div className={classes.personal}>
        <div className={classes['info-wrapper']}>
          <h2 className={classes['personal-header']}>Contacts: </h2>
          <Link className={classes.link} type='email' to={'https://t.me/andrey_tsakunov'} target={'_blank'}>
            <span className={classes['info-descr']}>Telegram:</span>
            <span className={classes['info-value']}>@andrey_tsakunov</span>
          </Link>
          <Link className={classes.link} type='email' to={'https://discord.com/users/572575602759172127'} target={'_blank'}>
            <span className={classes['info-descr']}>Discord:</span>
            <span className={classes['info-value']}>andrei-tsakunou#2704</span>
          </Link>
          <Link className={classes.link} type='email' to={'mailto: andrey.tsakunov@gmail.com'} target={'_blank'}>
            <span className={classes['info-descr']}>Email:</span>
            <span className={classes['info-value']}>andrey.tsakunov@gmail.com</span>
          </Link>
          <Link className={classes.link} to={'https://github.com/ts-andrey'} target={'_blank'}>
            <span className={classes['info-descr']}>Github:</span>
            <span className={classes['info-value']}>https://github.com/ts-andrey</span>
          </Link>
        </div>
        <div className={classes['img-wrapper']}>
          <img className={classes.img} src={photo} alt="photo" />
        </div>
      </div>
    </>
  )
}