import styled from '@emotion/styled';

export const List = styled.ul`
  margin-right: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style-type: none;
`;

export const Avatar = styled.img`
border-radius: 50%;
`

export const Item = styled.li`
list-style-type: none;
`
export const Wrapper = styled.div`
displey: flex;
flex-direction: column;

`


export const Button = styled.button`
  margin-left: 15px;
  padding: 5px;
  border-radius: 12px;
  background-color: white;
  color: black;
  border: 2px solid #4caf50;
 
  
  &:hover, &:focus {
    background-color: #008CBA;
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
`;
