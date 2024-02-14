import React from 'react';
import {RepositoryTypes} from '../../@types/repository';
import {
  Avatar,
  Column,
  Container,
  Description,
  FullName,
  Label,
  Language,
  Number,
  Row,
} from './styles';
import numbro from 'numbro';

type RepositoryProps = {repository: RepositoryTypes};

const RepositoryItem = ({repository}: RepositoryProps) => {
  return (
    <Container>
      <Row>
        <Column>
          <Avatar source={{uri: repository.ownerAvatarUrl}} />
        </Column>
        <Column gap={8}>
          <FullName>{repository.fullName}</FullName>
          <Description>{repository.description}</Description>
          <Language>{repository.language}</Language>
        </Column>
      </Row>
      <Row justifyContent="center" gap={25}>
        <Column alignItems="center">
          <Number>
            {numbro(repository.stargazersCount).format({
              average: true,
              mantissa: 1,
              trimMantissa: true,
            })}
          </Number>
          <Label>Stars</Label>
        </Column>
        <Column alignItems="center">
          <Number>
            {numbro(repository.forksCount).format({
              average: true,
              mantissa: 1,
              trimMantissa: true,
            })}
          </Number>
          <Label>Forks</Label>
        </Column>
        <Column alignItems="center">
          <Number>
            {numbro(repository.reviewCount).format({
              average: true,
              mantissa: 1,
              trimMantissa: true,
            })}
          </Number>
          <Label>Reviews</Label>
        </Column>
        <Column alignItems="center">
          <Number>
            {numbro(repository.ratingAverage).format({
              average: true,
              mantissa: 1,
              trimMantissa: true,
            })}
          </Number>
          <Label>Rating</Label>
        </Column>
      </Row>
    </Container>
  );
};

export default RepositoryItem;
