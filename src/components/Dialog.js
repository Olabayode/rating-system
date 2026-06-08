import image from "../asset/image.png";

function Dialog(props) {
  return (
    <section className="dialog-section">
      <button type="button" onClick={props.onOpen}>
        Open dialog
      </button>

      {props.isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <button
              className="close-dialog"
              type="button"
              onClick={props.onClose}
            >
              X
            </button>
            <p>You just had to open the dialog box right?</p>
            <img src={image} alt="Dialog" />
            <p>Now close it, thank you</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Dialog;
