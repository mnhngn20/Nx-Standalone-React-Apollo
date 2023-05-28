import styles from './core-utils.module.less';

/* eslint-disable-next-line */
export interface CoreUtilsProps {}

export function CoreUtils(props: CoreUtilsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CoreUtils!</h1>
    </div>
  );
}

export default CoreUtils;
