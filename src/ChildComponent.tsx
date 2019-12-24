import React from 'react';
import mei from './mei.png';

interface ChildProps {
  handleData: (data: HandlerDetails) => void;
  data: any;
}

interface HandlerDetails {
  name: string;
  age: number;
  eyecolor: string;
  hairstyle: string;
}

function ChildComponent(props: ChildProps) {
  const {handleData, data} = props;
  return(
    <div>
      <button
        type="button"
        onClick={() => handleData({name: 'Mei Ling Zhou', age: 31, eyecolor: 'Brown', hairstyle: 'Curly'})}
      >
        Click Mei!
      </button>
      <div>
        {data.get('age', 0) === 31 &&
        <img src={mei} alt="Mei"/>
        }
      </div>
    </div>
  );
}

export default ChildComponent;
