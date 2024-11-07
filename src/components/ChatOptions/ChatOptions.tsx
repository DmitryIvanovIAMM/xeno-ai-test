import { useQueryAiHook } from '@/hooks/useQueryAiHook';
import styles from './chat-options.module.css';
import { Checkbox, FormControlLabel } from '@mui/material';

const ChatOptions = () => {
  const { chatAiState, setAllowMockResponses } = useQueryAiHook();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const allowMockResponsesClicked = (event: MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    setAllowMockResponses(event.target.checked);
  };

  return (
    <div className={styles.container}>
      {chatAiState.error && <div className={styles.error}>{chatAiState.error}</div>}
      <div>
        <FormControlLabel
          control={
            <Checkbox
              onClick={allowMockResponsesClicked}
              checked={chatAiState.allowMockResponses}
            />
          }
          label='Allow mock responses'
        />
      </div>
    </div>
  );
};
export default ChatOptions;
