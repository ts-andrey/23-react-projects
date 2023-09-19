import classes from './Education.module.css';

import DataItem from '../../../ui/dataItem/DataItem';
import { coursesData } from './course.data';

export default function Education() {
  return (
    <>
      <article className={classes.education}>
        {
          coursesData.map((el, index) =>
            <DataItem
              property={el.courseName}
              description={el.courseInfo}
              link={el.courseLink}
              type='course'
              key={index}
            />)
        }
      </article>
    </>
  )
}