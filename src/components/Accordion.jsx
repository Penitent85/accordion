import { useState } from 'react';
import { accordion } from '../data'; 
const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [multipleSelected, setMultipleSelected] = useState([]);
  const [isMultipleOrSingle, setIsMultipleOrSingle] = useState(false);
  const handleSelected = (targetId) => {
    setSelected(targetId);
  };
  const handleMultipleSelected = (targetId) => {
    const found = multipleSelected.indexOf(targetId);

    if (found === -1) {
      const arr = [...multipleSelected];
      arr.push(targetId);

      setMultipleSelected((prev) => [...prev, targetId]);
    } else {
      const found = multipleSelected.filter((id) => id !== targetId);
      setMultipleSelected(found);
    }
  };
  const handleIsMultibeOrSingle = () => {
    setIsMultipleOrSingle((prev) => !prev);
  };

  return (
    <div className='container'>
      <button onClick={handleIsMultibeOrSingle}>
        IsMutable Or Single : {isMultipleOrSingle ? 'multiple' : 'single'}
      </button>
      {accordion && accordion.length > 0 ? (
        accordion.map((item) => (
          <div
            className='accordion'
            key={item.id}
            onClick={
              isMultipleOrSingle
                ? () => handleMultipleSelected(item.id)
                : () => handleSelected(item.id)
            }
          >
            <div className='accordion-title'>
              <h2>{item.question}</h2>
              <span>{selected && item.id ? '-' : '+'}</span>
            </div>
            <div>
              {isMultipleOrSingle ? (
                multipleSelected.includes(item.id) ? (
                  <p>{item.answer} </p>
                ) : null
              ) : item.id === selected ? (
                <p>{item.answer}</p>
              ) : null}
            </div>
          </div>
        ))
      ) : (
        <h2>No data</h2>
      )}
    </div>
  );
};
export default Accordion;
