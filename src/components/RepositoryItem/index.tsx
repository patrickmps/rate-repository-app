import React from 'react';
import {RepositoryTypes} from '../../@types/repository';
import {
  Avatar,
  Button,
  ButtonTitle,
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
import {Linking} from 'react-native';

type RepositoryProps = {repository: RepositoryTypes; showButton?: boolean};

const RepositoryItem = ({repository, showButton = false}: RepositoryProps) => {
  return (
    <Container testID="repositoryItem">
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
      {showButton && (
        <Button
          onPress={async () => {
            await Linking.openURL(repository.url);
          }}>
          <ButtonTitle>Open in GitHub</ButtonTitle>
        </Button>
      )}
    </Container>
  );
};

export default RepositoryItem;
