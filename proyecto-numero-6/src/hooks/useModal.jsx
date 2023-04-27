import React from "react";

function useModal() {
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return { modal, toggleModal }
}


export { useModal }
