import { render } from '@testing-library/react';
import ChatInput from '@/components/ChatInput/ChatInput';

const setup = async () => {
  const container = render(<ChatInput />);
  return {
    container,
  };
};

describe('ChatInput component', () => {
  it('should render correctly', async () => {
    const { container } = await setup();

    expect(container).toMatchSnapshot();
  });

  it('should contain "Send query" button', async () => {
    const { container } = await setup();

    container.getByRole('button', {
      name: 'Send',
    });
  });
});
