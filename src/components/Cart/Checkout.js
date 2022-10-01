import React, { useRef, useState } from "react";
import styles from "./Checkout.module.css";

const isEmpty = (value) => {
  return value.trim() !== "";
};
const isFiveChar = (value) => {
  return value.length === 5;
};

const Checkout = (props) => {
  const [formIsValid, setFormIsValid] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

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

    const enteredNameIsValid = isEmpty(enteredName);
    const enteredStreetIsValid = isEmpty(enteredStreet);
    const enteredCityIsValid = isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChar(enteredPostalCode);

    const isValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid &&
      enteredStreetIsValid;

    if (!isValid) {
      return;
    }

    setFormIsValid({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });
  };

  const nameControlClasses = formIsValid.name
    ? styles.control
    : `${styles.control} ${styles.invalid}`;
  const streetControlClasses = formIsValid.street
    ? styles.control
    : `${styles.control} ${styles.invalid}`;
  const cityControlClasses = formIsValid.city
    ? styles.control
    : `${styles.control} ${styles.invalid}`;
  const postalcodeControlClasses = formIsValid.postalCode
    ? styles.control
    : `${styles.control} ${styles.invalid}`;
  return (
    <form className={styles.form} onSubmit={onSubmitFormHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={enteredNameRef} />
        {!formIsValid.name && <p>Please enter valid name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={enteredStreetRef} />
        {!formIsValid.street && <p>Please enter valid street</p>}
      </div>
      <div className={postalcodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={enteredPostalCodeRef} />
        {!formIsValid.postalCode && <p>Please enter valid postalCode</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={enteredCityRef} />
        {!formIsValid.city && <p>Please enter valid city</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
