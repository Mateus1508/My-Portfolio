import styled from 'styled-components/macro';

export const ButtonLarge = styled.button`
  width: 8rem;
  height: 3rem;
  margin: 1rem;
  border-radius: 5px;
  background-color: #ffff;
  transition: .3s ease-in;
  cursor: pointer;
  color: #023e8a;
  font-size: 1rem;
  &:hover{
    color: #fff;
      background-color: #48cae4;
      box-shadow: 0 0 15px #90e0ef;

  }
`
export const ButtonMedium = styled.button`
  width: 5rem;
  height: 3rem;
  color: #023e8a;
  font-size: 0.9rem;
  margin: 1rem;
  border-radius: 5px;
  background-color: #ffff;
  transition: .3s ease-out;
  cursor: pointer;
  &:hover{
    color: #fff;
      background-color: #48cae4;
      box-shadow: 0 0 15px #90e0ef;
  }
`

export const ButtonSmall = styled.button`
  width: 4rem;
  height: 2rem;
  color: #023e8a;
  font-size: 0.9rem;
  border-radius: 5px;
  background-color: #ffff;
  transition: .3s ease-out;
  cursor: pointer;
  &:hover{
    color: #fff;
      background-color: #48cae4;
      box-shadow: 0 0 15px #90e0ef;
  }
`