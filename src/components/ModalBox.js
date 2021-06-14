import React, { useState } from "react";
import "../styles/Global.css";
import { Modal } from "@material-ui/core";

const ModalBox = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalText = (
    <div className="modal-container">
      <div className="modalText">
        <h1 className="modalTitle">LOREM IPSUM DOLAR</h1>
        <p className="modalParagraph">
          Sit amet porttitor eget dolor morbi non arcu risus quis. Scelerisque
          purus semper eget duis. Aliquam faucibus purus in massa tempor nec
          feugiat. Mi in nulla posuere sollicitudin aliquam ultrices sagittis
          orci a. Sed libero enim sed faucibus turpis. Mattis molestie a iaculis
          at erat pellentesque adipiscing commodo. Id venenatis a condimentum
          vitae sapien pellentesque habitant morbi tristique. At augue eget arcu
          dictum varius duis at consectetur lorem. Egestas erat imperdiet sed
          euismod nisi porta lorem mollis aliquam. Nisi vitae suscipit tellus
          mauris a diam maecenas. Ornare suspendisse sed nisi lacus sed viverra
          tellus in. Faucibus a pellentesque sit amet porttitor eget dolor.
          Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit.
          Lorem mollis aliquam ut porttitor leo.
          <br />
          <br />
          Nullam eget felis eget nunc lobortis. Odio morbi quis commodo odio
          aenean sed adipiscing. A cras semper auctor neque vitae tempus quam
          pellentesque. Arcu non odio euismod lacinia at. Tristique senectus et
          netus et malesuada fames ac turpis. Quam adipiscing vitae proin
          sagittis nisl rhoncus mattis. Semper feugiat nibh sed pulvinar proin
          gravida hendrerit. Etiam tempor orci eu lobortis elementum nibh. Non
          consectetur a erat nam at lectus urna. Sit amet commodo nulla facilisi
          nullam vehicula ipsum a arcu. Elementum nibh tellus molestie nunc non
          blandit massa enim. Ut etiam sit amet nisl purus in mollis nunc.
          Tristique nulla aliquet enim tortor at auctor.
        </p>
        <br />
        <p className="close">click above or below modal to close</p>
      </div>
    </div>
  );

  return (
    <div className="modal">
      <button className="learn-more" type="button" onClick={handleOpen}>
        LEARN MORE →
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="-modal-text"
      >
        {modalText}
      </Modal>
    </div>
  );
};

export default ModalBox;
