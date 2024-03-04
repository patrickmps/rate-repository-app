import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components/native';
import dark from '../../theme/dark';

describe('CreateReview', () => {
  describe('CreateReview', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn();
      render(<ThemeProvider theme={dark}></ThemeProvider>);
    });
  });
});
