import React, { useRef } from "react";
import styles from "./Checkout.module.css";

const Checkout = (props) => {
  const enteredNameRef = useRef();
  const enteredStreetRef = useRef();
  const enteredPostalCodeRef = useRef();
  const enteredCityRef = useRef();

  const onSubmitFormHandler = (e) => {
    e.preventDefault();

    const enteredName = enteredNameRef.current.value;
    const enteredStreet = enteredStreetRef.current.value;
    const enteredPostalCode = enteredPostalCodeRef.current.value;
    const enteredCity = enteredCityRef.current.value;
  };
  return (
    <form className={styles.form} onSubmit={onSubmitFormHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={enteredNameRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={enteredStreetRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={enteredPostalCodeRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={enteredCityRef} />
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
