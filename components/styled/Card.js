import styled from 'styled-components';

const Card = styled.div`
background-color: #f2f2f2;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
border-radius: 0.5rem;
overflow: hidden;
transition: box-shadow 0.3s ease, background-color 0.3s ease;

&:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
  background-color: #e0e0e0;
}
`;

export default Card;
