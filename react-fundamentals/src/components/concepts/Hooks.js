import React, { useState, useEffect, DocumentTitle } from "react";

// const Hooks = () => {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState({});

//   const fetcher = () => {
//     fetch(`https://swapi.dev/api/people/${query}`)
//       .then((res) => res.json())
//       .then((json) => {
//         console.log(json);
//         setResults(json);
//       });
//   };

//   return (
//     <div className="main">
//       <div className="mainDiv">
//         <input
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Enter your sw character"
//         />
//         <button onClick={() => fetcher()}>Click Me</button>
//         {results ? <h2>{results.name}</h2> : <div></div>}
//       </div>
//     </div>
//   );
// };

const Hooks2 = () => {
  const [results, queryNum, setQueryNum] = useNumHook("");
  const [clickNum, setClickNum] = TitleNum(0);

  return (
    <div className="main">
      <div className="mainDiv">
        <h3>Enter a number below to see a number fact</h3>
        <input
          value={queryNum}
          onChange={(e) => setQueryNum(e.target.value)}
          placeholder="Enter a number"
        />
        <button onClick={(e) => setClickNum(clickNum + 1)}>
          Click to Update Document Title
        </button>
        {results ? <h2>{results}</h2> : <div></div>}
      </div>
    </div>
  );
};

const useNumHook = (num) => {
  const [queryNum, setQueryNum] = useState(num);
  const [results, setResults] = useState("");

  useEffect(() => {
    if (queryNum !== "") {
      fetch(`http://numbersapi.com/${queryNum}`)
        .then((res) => res.text())
        .then((json) => {
          setResults(json);
          console.log(json);
        });
    }
  }, [queryNum]);

  return [results, queryNum, setQueryNum];
};

const TitleNum = (num) => {
  const [clickNum, setClickNum] = useState(num);

  useEffect(() => {
    document.title = `you have clicked ${clickNum} times`;
  }, [clickNum]);

  return [clickNum, setClickNum];
};

export default Hooks2;
