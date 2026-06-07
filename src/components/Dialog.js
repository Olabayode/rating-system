function Dialog(props) {
  return (
    <section className="dialog-section">
      <button type="button" onClick={props.onClick}>
        {props.isDialogOpen ? "Close dialog" : "Open dialog"}
      </button>

      {props.isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <p>This is the dialog box.</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Dialog;
