import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  position: relative;
  margin: auto;
`
export const PostDetailCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  gap: 0.5rem;
  padding: 2rem;
  margin-top: -5rem;
  h1 {
    font-size: 1.5rem;
  }
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }
  a {
    color: ${(props) => props.theme.blue};
    display: flex;
    gap: 0.5rem;
    align-items: center;
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 700;
    svg {
      margin-bottom: 0.1rem;
    }
  }
  a:hover {
    text-decoration: underline;
  }
  footer {
    display: flex;
    gap: 2rem;

    span {
      display: flex;
      gap: 0.5rem;
      color: ${(props) => props.theme['base-span']};
    }
  }
`
export const PostDetailContent = styled.main`
  width: 100%;
  padding: 2.5rem;
  white-space: pre-wrap;
  overflow: hidden;
  div {
    overflow-x: auto;
    width: 100%;
    height: 100%;
    /* width */
    ::-webkit-scrollbar {
      width: 10px;
      height: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme['base-span']};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.blue};
    }

    h3 {
      color: ${(props) => props.theme.blue};
    }

    a {
      text-decoration: none;
      background: transparent;
      color: ${(props) => props.theme.blue};

      &:hover {
        transition: border 2s;
        border-bottom: 2px solid ${(props) => props.theme.blue};
      }
    }

    img {
      max-width: 100%;
    }
  }
  @media (max-width: 680px) {
    padding: 1rem 0;
  }
`
