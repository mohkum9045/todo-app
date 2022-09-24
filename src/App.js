// import React, { useState } from "react";

// const App = () => {
//   const [items, setitems] = useState();
//   const [items2, setitems2] = useState([]);

//   const fillChange = (event) => {
//     setitems(event.target.value);
//   };

//   const addItems = () => {
//     setitems2((array) => {
//       return [...array, items];
//     });
//     setitems("");
//   };

//   const deleteitem = (id) => {

//     setitems2((olditems) => {
//       return olditems.filter((element, val) => {
//         return val !== id;
//       });
//     });
//   };

//   return (
//     <>
//       <input
//         placeholder="Enter the Task to do"
//         value={items}
//         onChange={fillChange}></input>
//       <button onClick={addItems}>+</button>
//       <ul>
//         {items2.map((val, index) => {
//           return (
//             <li>
//               <button id={index} onClick={deleteitem}>
//                 -
//               </button>
//               {val}
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

// export default App;

import React, { useState } from "react";

const App = () => {
  const [items, setitems] = useState();
  const [aItems, asetItems] = useState([]);

  const getItem = (event) => {
    setitems(event.target.value);
  };

  const handleItem = () => {
    asetItems((array) => {
      return [...array, items];
    });
    setitems("");
  };

  const deleteItems = (event) => {
    asetItems((oldItems) => {
      return oldItems.filter((data, ind) => {
        return ind !== event.target.id;
      });
    });
    console.log(event.target.id);
  };

  return (
    <>
      <input
        placeholder="Enter the items into the list"
        value={items}
        onChange={getItem}></input>
      <button onClick={handleItem}>+</button>
      <ul>
        {aItems.map((value, index) => {
          return (
            <li>
              <button id={index} onClick={deleteItems}>
                -
              </button>
              {value}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
