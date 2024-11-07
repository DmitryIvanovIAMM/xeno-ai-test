import { render } from '@testing-library/react';
import AiChat from '@/components/AiChat/AiChat';

const setup = async () => {
  const container = render(<AiChat />);
  return {
    container,
  };
};

describe('AiChat component', () => {
  it('should render correctly', async () => {
    const { container } = await setup();

    expect(container).toMatchSnapshot();
  });

  it('should contains structural information', async () => {
    const { container } = await setup();

    expect(container.container).toHaveTextContent('Allow mock responses');
    container.getByRole('button', {
      name: 'Send query',
    });
  });
});
