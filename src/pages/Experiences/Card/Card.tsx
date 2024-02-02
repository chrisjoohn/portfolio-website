import { FC } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const Tenure = styled.div`
  width: 200px;
`;

const Content = styled.div`
  max-width: 800px;
`;
const Header = styled.h2`
  margin: 0;
`;

const Description = styled.div`
  margin-top: 15px;
  line-height: 1.6;
`;

type CardProps = {
  startDate: string;
  endDate: string;

  companyName: string;
  position: string;

  jobDescription: string;
};

const Card: FC<CardProps> = (props) => {
  const { startDate, endDate, position, companyName, jobDescription } = props;
  return (
    <Container>
      <Tenure>
        {startDate} - {endDate || 'Present'}
      </Tenure>
      <Content>
        <Header>
          {position} | {companyName}
        </Header>
        <Description>{jobDescription}</Description>
      </Content>
    </Container>
  );
};

export default Card;
