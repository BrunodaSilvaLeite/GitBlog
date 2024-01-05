import styled from 'styled-components'

export const Hero = styled.div`
  width: 100%;
  max-width: 54rem;
  position: relative;
  margin: auto;
  flex-direction: column;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;

  div {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  h3 {
    font-size: 1.125;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 160%;
  }

  span {
    font-size: 0.875rem;

    color: ${(props) => props.theme['base-span']};
    line-height: 160%;
  }
  input {
    width: 100%;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: var(--Base-Input, #040f1a);
    padding: 0.75rem 1rem;
    color: ${(props) => props.theme['base-text']};
    margin-top: 0.75rem;
  }
`
export const ContainerPost = styled.div`
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
  }
`
export const NoContainerPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 4rem;
  gap: 1rem;
`
