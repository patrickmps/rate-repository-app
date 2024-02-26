import {render, fireEvent, screen} from '@testing-library/react-native';
import RepositoryList, {RepositoryListContainer} from '.';
import {ThemeProvider} from 'styled-components/native';
import dark from '../../theme/dark';
import numbro from 'numbro';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      render(
        <ThemeProvider theme={dark}>
          <RepositoryListContainer repositories={repositories} />
        </ThemeProvider>,
      );
      const repositoryItems = screen.getAllByTestId('repositoryItem');

      const numbroFormat = (number: number) =>
        numbro(number).format({
          average: true,
          mantissa: 1,
          trimMantissa: true,
        });

      repositoryItems.forEach((value, index) => {
        expect(
          screen.getByText(repositories.edges[index].node.fullName),
        ).toBeDefined();
        expect(
          screen.getByText(repositories.edges[index].node.description),
        ).toBeDefined();
        expect(
          screen.getByText(repositories.edges[index].node.language),
        ).toBeDefined();
        expect(
          screen.getAllByText(
            numbroFormat(repositories.edges[index].node.forksCount),
          ),
        ).toBeDefined();
        expect(
          screen.getAllByText(
            numbroFormat(repositories.edges[index].node.stargazersCount),
          ),
        ).toBeDefined();
        expect(
          screen.getAllByText(
            numbroFormat(repositories.edges[index].node.ratingAverage),
          ),
        ).toBeDefined();
        expect(
          screen.getAllByText(
            numbroFormat(repositories.edges[index].node.reviewCount),
          ),
        ).toBeDefined();
      });
    });
  });
});
