import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const ItemContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Item = styled.div`
  cursor: pointer;
`;

const routes = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'Experiences',
    route: '/experiences',
  },
  {
    name: 'Tech Stack',
    route: '/tech-stack',
  },
];

const Navbar = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <ItemContainer>
        {routes.map(({ route, name }) => (
          <Item
            key={route}
            onClick={() => history.push(route)}
          >
            {name}
          </Item>
        ))}
      </ItemContainer>
    </Wrapper>
  );
};

export default Navbar;
