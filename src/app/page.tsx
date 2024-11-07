import AiChat from '@/components/AiChat';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <div>ChatGPT chat</div>
      <div className={styles.main}>
        <AiChat />
      </div>
      <div className={styles.footer}>Xenophon AI test application</div>
    </div>
  );
}
