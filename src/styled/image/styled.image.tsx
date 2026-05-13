import styled from "styled-components";

export const Image = (props: { src: string; h?: number; w?: number }) => {
  return <StyledImage src={props.src} $h={props.h} $w={props.w ?? 100} />;
};

const StyledImage = styled.img<{ $h?: number; $w: number }>`
  display: block;
  height: ${(props) => (props.$h ? `${props.$h}px` : "auto")};
  width: ${(props) => `${props.$w}vw`};
`;
