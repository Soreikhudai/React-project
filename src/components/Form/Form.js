import Card from '../UI/Card'
import InputForm from './InputForm'
import classes from './Form.module.css';

const Form = (props) => {
  return (
    <Card className={classes.forms}>
      <InputForm onAddToCart={props.onAdd}/>
    </Card>
  )

};

export default Form;