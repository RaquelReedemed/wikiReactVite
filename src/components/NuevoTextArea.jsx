import { BiPlusCircle } from 'react-icons/bi';

function NuevoTextArea() {
  return (
    <div 
      style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '95%',
      height: '20vh',
      border: '1px solid black',
      borderRadius: '5px',
    }}>
      <BiPlusCircle size={48} />
    </div>
  );
}

export default NuevoTextArea;