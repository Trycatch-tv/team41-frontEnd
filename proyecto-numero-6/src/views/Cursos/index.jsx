import React from "react";
import CursosList from "../../components/Cursos/CursosList";
import { Modal } from "../../components/Modal";
import { Curseinformation } from "../../components/CourseInformation";
import { useModal } from "../../hooks/useModal";
import "../../components/Cursos/cursos.css";

export default function Cursos() {
  const { modal, toggleModal } = useModal();
  return (
    <section className="cursos__Section">
      <CursosList toggleModal={toggleModal} />
      {modal && (
        <Modal modal={modal}>
          <Curseinformation toggleModal={toggleModal} />
        </Modal>
      )}
    </section>
  );
}
