import styled from 'styled-components'
export const IconButton = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  font-weight: 500;
  gap: 0.5rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
  svg path {
    stroke: ${props => props.theme.colors.buttonlink};
  }
  &.like {
    display: flex;
    align-items: flex-end;
    color: ${props => props.theme.colors.lightGray};

    &.liked {
      color: ${props => props.theme.colors.buttonlink};
    }
  }
`
