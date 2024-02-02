import Card from './Card';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  margin-top: 50px;
`;

const experiences = [
  {
    startDate: 'May 2022',
    endDate: 'Present',
    position: 'Full Stack Developer',
    companyName: 'FlashWorks',
    jobDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel arcu imperdiet, tincidunt dolor eget, mattis urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi vestibulum nisl non est euismod, maximus volutpat quam egestas. Nulla facilisi. Nullam id congue tortor, sed efficitur ipsum. Curabitur vitae lobortis massa. Proin rhoncus, augue et rhoncus aliquet, nibh dui vestibulum risus, vitae lobortis ante tellus id nisl. Praesent fringilla nisl non fringilla luctus. Nam vel vehicula arcu, eget feugiat ligula. Donec vestibulum, enim non condimentum eleifend, leo nulla tempus ex, a finibus dui nisl non nisi. Suspendisse at sagittis libero. Mauris vulputate sit amet risus vel aliquet. Integer rutrum, velit non sodales mattis, turpis purus dapibus augue, porttitor tincidunt velit turpis vel lectus. Ut ac laoreet orci. Fusce tempus consequat dolor, sit amet vestibulum neque molestie ut. Sed ut tortor ultricies enim molestie malesuada.`,
  },
  {
    startDate: 'July 2021',
    endDate: 'May 2022',
    position: 'Full Stack Developer',
    companyName: 'Samsung Electronics Philippines Corp.',
    jobDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel arcu imperdiet, tincidunt dolor eget, mattis urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi vestibulum nisl non est euismod, maximus volutpat quam egestas. Nulla facilisi. Nullam id congue tortor, sed efficitur ipsum. Curabitur vitae lobortis massa. Proin rhoncus, augue et rhoncus aliquet, nibh dui vestibulum risus, vitae lobortis ante tellus id nisl. Praesent fringilla nisl non fringilla luctus. Nam vel vehicula arcu, eget feugiat ligula. Donec vestibulum, enim non condimentum eleifend, leo nulla tempus ex, a finibus dui nisl non nisi. Suspendisse at sagittis libero. Mauris vulputate sit amet risus vel aliquet. Integer rutrum, velit non sodales mattis, turpis purus dapibus augue, porttitor tincidunt velit turpis vel lectus. Ut ac laoreet orci. Fusce tempus consequat dolor, sit amet vestibulum neque molestie ut. Sed ut tortor ultricies enim molestie malesuada.`,
  },
  {
    startDate: 'April 2020',
    endDate: 'July 2021',
    position: 'React Developer',
    companyName: 'ThinkDWM Inc.',
    jobDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel arcu imperdiet, tincidunt dolor eget, mattis urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi vestibulum nisl non est euismod, maximus volutpat quam egestas. Nulla facilisi. Nullam id congue tortor, sed efficitur ipsum. Curabitur vitae lobortis massa. Proin rhoncus, augue et rhoncus aliquet, nibh dui vestibulum risus, vitae lobortis ante tellus id nisl. Praesent fringilla nisl non fringilla luctus. Nam vel vehicula arcu, eget feugiat ligula. Donec vestibulum, enim non condimentum eleifend, leo nulla tempus ex, a finibus dui nisl non nisi. Suspendisse at sagittis libero. Mauris vulputate sit amet risus vel aliquet. Integer rutrum, velit non sodales mattis, turpis purus dapibus augue, porttitor tincidunt velit turpis vel lectus. Ut ac laoreet orci. Fusce tempus consequat dolor, sit amet vestibulum neque molestie ut. Sed ut tortor ultricies enim molestie malesuada.`,
  },
];

const Experiences = () => {
  return (
    <Container>
      {experiences.map((experience) => {
        return <Card {...experience} />;
      })}
    </Container>
  );
};

export default Experiences;
