import React ,{useState} from 'react';
import Button from './Button';
import Header from './Header';

const Counter = () => {

    const [count, setcount] = useState(0);

    const handleclick = (value : number) => {
        setcount(count+value);
    }
  return (
    <div>
        <Header label='Counter'/>
        <Header label={`${count}`}/>
        <div className='buttondisp'>
        <Button label="add" handleclick={() => handleclick(1)}/>
        <Button label="subtract" handleclick={() => handleclick(-1)}/>
        </div>
    </div>
  )
}

export default Counter;