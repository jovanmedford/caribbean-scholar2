import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import styles from './page.module.css';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  return (
    <div className={styles['container']}>
      <h1 className="mb-4">Login</h1>
      <TextField
        id="email-address"
        label="Email Address"
        variant="outlined"
      ></TextField>
      <TextField
        id="password"
        label="Password"
        type="password"
        variant="outlined"
      ></TextField>
      <Button variant="contained">Login</Button>
    </div>
  );
}

export default Login;
