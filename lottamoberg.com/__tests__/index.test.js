/**
 * @jest-environment jsdom
 */

import {render} from '@testing-library/react';
import Home from '../pages/index';

async function getStaticProps() {
  return {
    props: {}
  };
}

describe('Index page', () => {
  beforeAll(() => {
    Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
      set: jest.fn(),
    });
  });

  test('should render', async () => {
    const props = await getStaticProps();
    const {getByText} = render(<Home {...props} />);
    expect(getByText(`Financial analysis through an Austrian economists'`)).toBeTruthy();
  });
});
