import React, { useState } from 'react';

const Checkbox = () => {
  const catArr = ["Electronic", "Baby", "Women", "Men"]
  const [cat, setCat] = useState(catArr);
  const [selected, setSelected] = useState(["Women", "Men"]);

  const handleInputChange = (e) => {
    const oldSelectedCatList = [...selected];
    if (selected.includes(e.target.value)) {
      oldSelectedCatList.splice(  selected.indexOf(e.target.value), 1);

      setSelected(oldSelectedCatList);
    } else {
      oldSelectedCatList.push(e.target.value);
      setSelected(oldSelectedCatList);
    }

  }





  return (
    <div>

      <div className="container mx-auto py-10">
        <h1 className='font-semibold'>Checkbox issue</h1>

        <ul className='flex gap-x-3 '>
          {cat.map((item, index) =>
            <li key={index}>
              <label className='text-black'>
                <input value={item} type="checkbox" onChange={handleInputChange} checked={selected.includes(item)} />{item}
              </label></li>
          )}
        </ul>





      </div>



    </div>
  )
}

export default Checkbox