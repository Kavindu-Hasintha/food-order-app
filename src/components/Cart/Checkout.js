import useInput from "../../hooks/use-input";
import classes from "./Checkout.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isNotFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);
  const {
    value: enteredStreet,
    isValid: enteredStreetIsValid,
    hasError: enteredStreetHasError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreetInput,
  } = useInput(isNotEmpty);
  const {
    value: enteredPostalCode,
    isValid: enteredPostalCodeIsValid,
    hasError: enteredPostalCodeHasError,
    valueChangeHandler: postalCodeChangeHandler,
    inputBlurHandler: postalCodeBlurHandler,
    reset: resetPostalCodeInput,
  } = useInput(isNotFiveChars);
  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: enteredCityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCityInput,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredStreetIsValid &&
    enteredPostalCodeIsValid &&
    enteredCityIsValid
  ) {
    formIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();

    if (
      !enteredNameIsValid ||
      !enteredStreetIsValid ||
      !enteredPostalCodeIsValid ||
      !enteredCityIsValid
    ) {
      return;
    }

    console.log("Name: " + enteredName);
    console.log("Street: " + enteredStreet);
    console.log("Postal Code: " + enteredPostalCode);
    console.log("City: " + enteredCity);

    resetNameInput();
    resetStreetInput();
    resetPostalCodeInput();
    resetCityInput();
  };

  const nameInputClasses = enteredNameHasError
    ? classes.invalid
    : classes.control;

  const streetInputClasses = enteredStreetHasError
    ? classes.invalid
    : classes.control;

  const postalCodeInputClasses = enteredPostalCodeHasError
    ? classes.invalid
    : classes.control;

  const cityInputClasses = enteredCityHasError
    ? classes.invalid
    : classes.control;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {enteredNameHasError && <p>Please enter valid name</p>}
      </div>
      <div className={streetInputClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
          value={enteredStreet}
        />
        {enteredStreetHasError && <p>Please enter valid street</p>}
      </div>
      <div className={postalCodeInputClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeBlurHandler}
          value={enteredPostalCode}
        />
        {enteredPostalCodeHasError && (
          <p>Please enter valid postal code (5 characters long)</p>
        )}
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          value={enteredCity}
        />
        {enteredCityHasError && <p>Please enter valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!formIsValid}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
