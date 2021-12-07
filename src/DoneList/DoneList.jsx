import React from 'react';
import Done from './Done/Done';
import p from './DoneList.module.css'

const DoneList = (props) => {
    let doneElements = props.doneData.map(done => <Done 
        text={done.text}
        id={done.id}
        />)
        
  return (
    <div className={p.page}>
      <div>
        <div>
          {doneElements}
        </div>
      </div>
    </div>
  );
}

export default DoneList;