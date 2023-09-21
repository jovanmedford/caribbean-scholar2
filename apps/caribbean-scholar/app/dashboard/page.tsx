import styles from './page.module.css';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  return (
    <div className={styles['container']}>
      <h1>Sign up to Caribbean Scholar</h1>
    </div>
  );
}

export default Dashboard;
