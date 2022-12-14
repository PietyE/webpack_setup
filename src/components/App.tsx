import type { FC } from 'react';

import styles from '@styles/App.module.css';

const App: FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Hello React</p>
      <p>TEST DEPLOY</p>
      <img
        src={`${process?.env.PUBLIC_URL ?? ''}/logo.png`}
        alt='logo'
        width='200px'
        height='200px'
      />
    </div>
  );
};

export default App;
