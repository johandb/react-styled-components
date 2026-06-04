import { useEffect, useRef } from "react";
import styled from "styled-components";

interface ModalProps {
  title: string;
  modal?: boolean;
  width?: number;
  withCloseButton?: boolean;
  onClose?: () => void;
  opened: boolean;
  children: React.ReactNode;
}

export const Modal = (props: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (props.opened) {
      if (dialogRef.current) {
        props.modal ? dialogRef.current?.showModal() : dialogRef.current?.show();
      }
    } else {
      dialogRef.current?.close();
    }
  }, [props.opened, props.modal]);

  let withCloseButton = props.withCloseButton ?? true;

  return (
    <StyledModal $width={props.width} $modal={props.modal} ref={dialogRef} onClose={props.onClose}>
      <StyledModalContainer>
        <StyledModalHeader>{props.title}</StyledModalHeader>
        {withCloseButton && (
          <StyledModalCloseButton
            onClick={() => {
              props.onClose?.();
            }}
          >
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" fill="white" />
              <path d="M7 17L16.8995 7.10051" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 7.00001L16.8995 16.8995" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </StyledModalCloseButton>
        )}
      </StyledModalContainer>
      <hr />
      <StyledModalBody>{props.children}</StyledModalBody>
    </StyledModal>
  );
};

const StyledModal = styled.dialog<{ $modal?: boolean; $width?: number }>`
  ${(props) => (props.$modal ? "border:none;" : "border: 1px solid #ccc")};
  border-radius: 6px;
  margin: auto;
  padding: 10px 10px;
  width: ${(props) => (props.$width ? `${props.$width}px` : "fit-content")};
  box-shadow: rgba(194, 194, 194, 0.25) 0px 5px 10px;
  opacity: 0;
  transition: all 0.3s allow-discrete;
  &:open {
    opacity: 1;
  }
  &:open::backdrop {
    background-color: rgba(0, 0, 0, 0.3);
  }
  &::backdrop {
    background-color: rgba(0, 0, 0, 0);
    transition: all 0.3s allow-discrete;
  }
  @starting-style {
    &:open {
      opacity: 0;
    }
  }

  @starting-style {
    &:open::backdrop {
      background-color: rgba(0, 0, 0, 0);
    }
  }
`;

const StyledModalBody = styled.div`
  padding: 0px;
`;

const StyledModalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const StyledModalCloseButton = styled.div`
  cursor: pointer;
`;

const StyledModalHeader = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 600;
  padding-right: 20px;
`;
