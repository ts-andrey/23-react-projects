import classes from './Personal.module.css';

import DataItem from '../../../ui/dataItem/DataItem';
import { contactsData } from './contacts.data';

import photo from './../../../assets/photo.webp';

export default function Personal() {
  return (
    <>
      <div className={classes.personal}>
        <div className={classes['info-wrapper']}>
          <h2 className={classes['personal-header']}>Contacts: </h2>
          {contactsData.map((el, index) =>
            <DataItem
              property={el.contactType}
              description={el.contactValue}
              type='contact'
              link={el.contactLink}
              key={index}
            />
          )}
        </div>
        <div className={classes['img-wrapper']}>
          <img className={classes.img} src={photo} alt="photo" />
        </div>
      </div>
    </>
  )
}