import React, { useState } from "react";
import { Button, Modal } from "antd";
import './rules.css'


const Rules = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button ghost onClick={showModal}>
        Rules
      </Button>
      <Modal
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="modalRules">
          <h2 className="title"> Rules</h2>
          <img src="/images/image-rules.svg" alt="rules" />
          <span className="icon_close" onClick={handleCancel}>X</span>
        </div>
      </Modal>
    </div>
  );
};

export default Rules;
