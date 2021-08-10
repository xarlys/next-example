
import * as Styled from './styles';

export type CloneMeProps = {
  title?: string;
}


export function CloneMe({ title = 'Change-Me'}: CloneMeProps) {
  return (
    <Styled.Container>
      <h1>{title}</h1>
    </Styled.Container>
  )
}

