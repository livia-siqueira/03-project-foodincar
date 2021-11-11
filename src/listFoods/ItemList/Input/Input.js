import styles from './Input.module.css';
import react from 'react';


const Input = react.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.controlInput.id}>{props.label}</label>
      <input ref={ref} {...props.controlInput}/>
    </div>
  );
});

export default Input;

