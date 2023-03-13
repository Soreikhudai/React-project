import { useState, useRef } from "react";
import Card from "./Card";

const Form = () => {
  const [detailsList, setDetailsList] = useState([]);

  const medicinenameRef = useRef("");
  const descriptionRef = useRef("");
  const priceRef = useRef("");

  const addToCartHandler = (event) => {
    event.preventDefault();
    const details = {
      medicinename: medicinenameRef.current.value,
      description: descriptionRef.current.value,
      price: priceRef.current.value,
    };
    setDetailsList([...detailsList, details]);
    medicinenameRef.current.value = "";
    descriptionRef.current.value = "";
    priceRef.current.value = "";
  };

  const addToFireBaseHandler = async () => {
    try {
      const lastItem = detailsList[detailsList.length - 1];
      const response = await fetch(
        "https://react-http-project-da8f6-default-rtdb.firebaseio.com/medicine.json",
        {
          method: "POST",
          body: JSON.stringify(lastItem),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      await response.json();
    } catch (error) {
      alert("something went wrong");
    }
  };

  return (
    <Card>
      <form
        style={{
          border: "1px solid grey",
        }}
        onSubmit={addToCartHandler}
      >
        <div style={{ margin: "1rem auto" }}>
          <label style={{ marginLeft: "1rem" }}>Medicine Name</label>
          <input
            style={{ marginLeft: "1rem" }}
            type="text"
            ref={medicinenameRef}
          />
        </div>
        <div style={{ margin: "1rem auto" }}>
          <label style={{ marginLeft: "1rem" }}>Description</label>
          <input
            style={{ marginLeft: "1rem" }}
            type="text"
            ref={descriptionRef}
          />
        </div>

        <div style={{ margin: "1rem auto" }}>
          <label style={{ marginLeft: "1rem" }}>Price</label>
          <input style={{ marginLeft: "1rem" }} type="number" ref={priceRef} />
        </div>
        <div style={{ margin: "1rem auto" }}>
          <button style={{ marginLeft: "1rem", padding: "10px" }}>
            Add Product
          </button>
        </div>
      </form>
      <ul>
        {detailsList.map((item, index) => (
          <li key={index} style={{ listStyle: "none" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                height: "5rem",
                border: "1px solid grey",
              }}
            >
              <div>{item.medicinename}</div>
              <div>{item.description}</div>
              <div>${item.price}</div>
              <div>
                <button onClick={addToFireBaseHandler}>ADD</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Form;
