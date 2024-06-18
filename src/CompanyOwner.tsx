import { useState } from "react";

function CompanyOwner() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Företagare: Välj mest ekonmiska alternativet för bilen!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">Vi räknar rött åt dig!</p>
    </>
  );
}

export default CompanyOwner;
