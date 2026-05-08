import styled from "styled-components";

interface FlexProps {
  children: React.ReactNode;
}

export const Flex = (props: FlexProps) => {
  return <StyledFlex>{props.children}</StyledFlex>;
};

const StyledFlex = styled.div`
  display: flex;
  gap: 0px;
`;
