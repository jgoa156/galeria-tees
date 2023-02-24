import React from "react";
import { Modal } from "react-bootstrap";

// Custom
import { ModalClose } from "./styles";
import styles from "./styles.module.scss";

export default function ModalCustom({
  show,
  close,
  size = "medium",
  ...props
}) {
  const sizeStyles = {
    "large": styles.customModalLarge,
    "medium": styles.customModalMedium,
    "small": styles.customModalSmall,
  };

  return (
    <Modal
      show={show}
      onHide={close}
      backdropClassName={styles.customModalBackdrop}
      dialogClassName={styles.customModalDialog}
      contentClassName={`${sizeStyles[size]} ${styles.customModalContent}`}>
      <ModalClose onClick={close}>
        <i className={"fas fa-times"}></i>
      </ModalClose>
      {props.children}
    </Modal>
  );
}