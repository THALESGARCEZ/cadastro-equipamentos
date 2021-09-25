import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  height: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  h1 {
    margin: 32px 0;
  }
`
export const Form = styled.form`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 60%;

  fieldset {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    
    p {
      font-size: 18px;
      padding: 6px;
    }

    input {
      width: 60%;
      padding: 12px;
      border-radius: 4px;
      font-size: 16px;
    }

    input:focus {
      border: 1px solid #FAD02C;
      outline: none;
    }
  }

  fieldset + fieldset {
    margin-top: 14px;
  }

  button {
    margin-top: 14px;
    width: 60%;
    padding: 8px;
    background: #333652;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
  }

`

export const Table = styled.table`
  margin-top: 60px;
  width: 60%;
  background: #90ADC6;
  border-radius: 8px;

  th, td {
    padding: 16px;

    svg {
      color: red;
    }
  }

  
`

export const Equipment = styled.tr``