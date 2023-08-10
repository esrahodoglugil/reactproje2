import PropTypes from 'prop-types';
import {useState} from 'react';

const Sayac=({baslangic})=>{
    const[sayacDegeri, setSayacDegeri]=useState(0);

    const Artir=()=>{
        setSayacDegeri(sayacDegeri+1);
    }
    const Azalt=()=>{
        setSayacDegeri(sayacDegeri-1);
    }

return (
        <div className='sayac'>
            <h2>{baslangic + sayacDegeri}</h2>
            <button className='btn' onClick={Artir} >+</button>
            <button className='btn' onClick={Azalt}>-</button>
        </div>
    );

}
Sayac.defaultProps={
    baslangic:1,
}

Sayac.propTypes={
    baslangic:PropTypes.number,
}
export default Sayac;