import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  text-align: center;
  height: 100vh;
  margin: 20vh;
    section {
      background: rgba(255, 255, 255, 0.16);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    height: 50vh;
    margin: 5px;
  }
  section:last-child{
    grid-column: 1/3;
    height: 45vh;
  }

    h1 {
    padding-bottom: 10px;
    margin: 10px 10px 0 10px;
    border-bottom: 1px solid #fff;
    background: transparent;
    color: #fff;
  }

`
