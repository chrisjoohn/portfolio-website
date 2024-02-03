import { FC } from 'react';
import styled from 'styled-components';

type CardProps = {
  logoUrl: string;
  name: string;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.img``;

const Card: FC<CardProps> = (props) => {
  const { logoUrl, name } = props;
  return (
    <Container>
      <Logo src={logoUrl} />
      <div>{name}</div>
    </Container>
  );
};

export default Card;
