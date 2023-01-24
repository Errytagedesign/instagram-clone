import React, { useState } from "react";
import { data } from "./data";

function Testing() {
  const [show, setShow] = useState(false);

  const handleShow = (id) => {
    setShow((prev) => ({ [id]: !prev[id] }));
  };

  return (
    <div>
      {data.map((dat) => (
        <section>
          <div className="title" onClick={() => handleShow(dat.id)}>
            {dat.title}
          </div>
          {show[dat.id] && <div className="content">{dat.content}</div>}
        </section>
      ))}
    </div>
  );
}

export default Testing;
