import styled from 'styled-components';

import Card from './Card';

const techList: {
  [key: string]: {
    name: string;
    list: { logoUrl: string; name: string }[];
  };
} = {
  programmingLanguages: {
    name: 'Programming Languages',
    list: [
      {
        logoUrl: 'https://img.icons8.com/color/144/javascript--v1.png',
        name: 'JavaScript',
      },
      {
        logoUrl: 'https://img.icons8.com/fluency/144/typescript--v1.png',
        name: 'TypeScript',
      },
      {
        name: 'Java',
        logoUrl:
          'https://img.icons8.com/color/144/java-coffee-cup-logo--v1.png',
      },
      {
        name: 'Python',
        logoUrl: 'https://img.icons8.com/color/144/python--v1.png',
      },
    ],
  },
  webTech: {
    name: 'Web Technologies',
    list: [
      {
        name: 'React',
        logoUrl: 'https://img.icons8.com/color/144/react-native.png',
      },
      {
        name: 'NextJS',
        logoUrl:
          'https://img.icons8.com/fluency-systems-regular/144/ffffff/nextjs.png',
      },
      {
        name: 'Webpack',
        logoUrl: 'https://img.icons8.com/color/144/webpack.png',
      },
    ],
  },
  backendTech: {
    name: 'Backend Technologies',
    list: [
      {
        name: 'NodeJS',
        logoUrl: 'https://img.icons8.com/fluency/144/node-js.png',
      },
      {
        name: 'Django REST',
        logoUrl: 'https://img.icons8.com/color/144/django.png',
      },
      {
        name: 'Java Spring',
        logoUrl: 'https://img.icons8.com/color/144/spring-logo.png',
      },
    ],
  },
  databases: {
    name: 'Database',
    list: [
      {
        name: 'MySQL',
        logoUrl: 'https://img.icons8.com/fluency/144/mysql-logo.png',
      },
      {
        name: 'PostgreSQL',
        logoUrl: 'https://img.icons8.com/color/144/postgreesql.png',
      },
      {
        name: 'MongoDB',
        logoUrl: 'https://img.icons8.com/color/144/mongodb.png',
      },
    ],
  },
  codingTools: {
    name: 'Tools',
    list: [
      {
        name: 'Git',
        logoUrl: 'https://img.icons8.com/color/144/git.png',
      },
      {
        name: 'Docker',
        logoUrl: 'https://img.icons8.com/fluency/144/docker.png',
      },
      {
        name: 'Jira',
        logoUrl: 'https://img.icons8.com/color/144/jira.png',
      },
      {
        name: 'Confluence',
        logoUrl: 'https://img.icons8.com/color/144/atlassian-confluence.png',
      },
    ],
  },
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const ItemContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const TechStack = () => {
  return (
    <Wrapper>
      <Container>
        {Object.keys(techList).map((key) => {
          const { name, list } = techList[key];
          return (
            <div key={key}>
              <h2>{name}</h2>
              <ItemContainer>
                {list.map((item) => {
                  return <Card {...item} />;
                })}
              </ItemContainer>
            </div>
          );
        })}
      </Container>
    </Wrapper>
  );
};

export default TechStack;
