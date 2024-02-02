import styled, { keyframes } from 'styled-components';

const typewriter = keyframes`
  from { width: 0}
  to { width: 100% }
`;

const Greetings = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 68px;
  overflow: hidden;
  white-space: nowrap;
  animation: ${typewriter} 1.5s steps(30, end);
`;

const Name = styled(Greetings)`
  font-size: 80px;
  animation-name: ${typewriter};
  animation-delay: 1.1s;
  animation-fill-mode: both;
`;

const Role = styled(Greetings)`
  animation-name: ${typewriter};
  animation-delay: 2.2s;
  animation-fill-mode: both;
`;

const Content = styled.div`
  position: absolute;
  bottom: 100px;
  left: 100px;
`;

const Home = () => {
  return (
    <div>
      <Content>
        <Greetings>Hello World! 👋🏼</Greetings>
        <Name>I'm Chris John!</Name>
        <Role>Full Stack Developer 👨🏽‍💻</Role>
      </Content>
    </div>
  );
};

export default Home;
