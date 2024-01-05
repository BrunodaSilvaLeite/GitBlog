import styled from 'styled-components'

export const ContainerProfile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  gap: 2rem;
  padding: 2rem;
  margin-top: -5rem;

  > img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`
export const ContentProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const HeaderProfile = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  a {
    right: 2rem;
    position: absolute;
    color: ${(props) => props.theme.blue};
    margin-bottom: 0.75rem;
    display: inline-flex;
    text-align: center;
    font-weight: 700;
    gap: 0.3rem;
    font-size: 0.75rem;
  }
`
export const DescriptionProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
export const FooterProfile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  span {
    display: flex;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
