import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
font-family: Arial, Helvetica, sans-serif;
border-bottom: 1px solid lightblue;
padding-bottom: 20px;


div{
  flex: 1;
}

.buttons{
  display: flex;
  justify-content: space-between;
}
.button-info{
  background-color: red;
  justify-content: space-between;
}
`;