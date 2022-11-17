import {useContext} from 'react';
import { XXconcept } from '../contexts/trialContext';

const Side = () => {
    const {state} = useContext(XXconcept);
  return (
    <aside width='30%'>{state.map(((tas, index)=><p key={index}>{tas}</p> ))}</aside>
  );
}

export default Side;
