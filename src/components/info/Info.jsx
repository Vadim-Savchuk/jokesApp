import { Fragment } from 'react';

import './Info.scss';

function Info({ text }) {
    const textArray    = text.split("\n");

    const textElements = textArray.map((text, index) => (
      <Fragment key={index}>
        {text}
        <br />
      </Fragment>
    ));
  
    return (
        <div className='full-screen'>
            <h1 className='info-text'>{textElements}</h1>
        </div>
    );
}

export default Info;