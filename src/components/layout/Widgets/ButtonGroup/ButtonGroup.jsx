
import Link from '@material-ui/core/Link';
import Button from '../ButtonContent03/Button';
import './ButtonGroup.css'

export default props => {

  return (

    <div className="ButtonGroup">

      <span style={{ cursor: 'not-allowed' }}>
        <Button className="ButtonSpan" component={Link} enable>
          ENABLEDD
        </Button>
      </span>

    </div>
    );
  }