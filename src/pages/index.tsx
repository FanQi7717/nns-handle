import { history } from 'umi';
import styles from './index.less';

export default function IndexPage({ children }: any) {
  return (
    <div>
      {/* <h1 className={styles.title}>{children}</h1> */}
      <button onClick={() => history.push('/ml5ImageType')}>
        ml5ImageType
      </button>
    </div>
  );
}
