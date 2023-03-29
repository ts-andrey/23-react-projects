import { useState } from 'react';
import Prism from 'prismjs';

import classes from './CodeSamples.module.css';

import Code from './Code/Code';
import * as CodeSamplesObj from './../../assets/codeSamples';

export default function CodeSamples() {
  const [activeCodeSample, setActiveCodeSample] = useState('');
  const [activeLink, setActiveLink] = useState('');
  const codeSamplesNames = Object.keys(CodeSamplesObj);

  function activeCodeSampleHandler(event) {
    console.log(event.target);
    const linkText = event.target.innerText;
    setActiveLink(linkText)
    setActiveCodeSample(CodeSamplesObj[linkText]);
  }

  function activeClassHandler(name) {
    return (activeLink === name) ? ` ${classes['code-link_active']}` : '';
  }

  return (
    <>
      <div className={classes.section}>
        <div className={classes['content-wrapper']}>
          <div onClick={activeCodeSampleHandler} className={classes['code-link__wrapper']}>
            {codeSamplesNames.map((name, index) => <div key={index} className={classes['code-link'] + `${activeClassHandler(name)}`}>{name}</div>)}
          </div>
          <Code code={activeCodeSample} language={'javascript'} />
        </div>
      </div>
    </>
  )
}