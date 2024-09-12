import React, { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log("ok");
  }, [num]);
  return (
    <div>
      {num}
      <button
        onClick={() => {
          setNum((p) => p + 1);
        }}
      >
        클릭
      </button>
    </div>
  );
}

export default App;
