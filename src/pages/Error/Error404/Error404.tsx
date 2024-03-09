import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 25%;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 200px;
`;

const Message = styled.h1``;

const Error404 = () => (
  <Container>
    <Title>404</Title>
    <Message>PAGE NOT FOUND...</Message>
  </Container>
);

export default Error404;
