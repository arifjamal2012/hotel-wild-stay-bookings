import styled from "styled-components";

const StyledEmptyText= styled.p`
text-align: center;

`

function Empty({ resourceName }) {
  return <StyledEmptyText>No {resourceName} could be found.</StyledEmptyText>;
}

export default Empty;
