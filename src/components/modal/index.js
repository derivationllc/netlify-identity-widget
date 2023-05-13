import { h, Component } from "preact";

function formatError(error) {
  return (
    (error.json && error.json.error_description) ||
    error.message ||
    error.toString()
  );
}

export default class Modal extends Component {
  handleClose = (e) => {
    e.preventDefault();
    this.props.onClose();
  };

  blockEvent = (e) => {
    e.stopPropagation();
  };

  linkHandler = (page) => (e) => {
    e.preventDefault();
    this.props.onPage(page);
  };

  render() {
    const {
      page,
      error,
      loading,
      showHeader,
      showSignup,
      devSettings,
      isOpen,
      children,
      logo,
      t,
      isLocal,
      clearSiteURL,
      clearStoreError
    } = this.props;
    const hidden = loading || !isOpen;
    const formattedError = error ? formatError(error) : null;
    return (
      <div
        className="modalContainer"
        role="dialog"
        aria-hidden={`${hidden}`}
        onClick={this.handleClose}
      >
        <div
          className={`modalDialog${loading ? " visuallyHidden" : ""}`}
          onClick={this.blockEvent}
        >
          <div class="headerLogo">
            <img alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAAAeCAYAAAALkH3GAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTNBRjVEMkNGMUM4MTFFREIyNDBFODA2NDU1RDMzNTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTNBRjVEMkRGMUM4MTFFREIyNDBFODA2NDU1RDMzNTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBM0FGNUQyQUYxQzgxMUVEQjI0MEU4MDY0NTVEMzM1OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBM0FGNUQyQkYxQzgxMUVEQjI0MEU4MDY0NTVEMzM1OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpJCE6YAABCbSURBVHja7Ft5WFRH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" />
          </div>
          <div className="modalContent">
            <button onclick={this.handleClose} className="btn btnClose">
              <span className="visuallyHidden">Close</span>
            </button>
            {showHeader && (
              <div className="header">
                {showSignup && (
                  <button
                    className={`btn btnHeader ${page.signup ? "active" : ""}`}
                    onclick={this.linkHandler("signup")}
                  >
                    {t("sign_up")}
                  </button>
                )}
                {!devSettings && (
                  <button
                    className={`btn btnHeader ${page.login ? "active" : ""}`}
                    onclick={this.linkHandler("login")}
                  >
                    {t("log_in")}
                  </button>
                )}
              </div>
            )}
            {page.title && (
              <div className="header">
                <button className="btn btnHeader active">
                  {t(page.title)}
                </button>
              </div>
            )}
            {devSettings && (
              <div className="header">
                <button className="btn btnHeader active">
                  {t("site_url_title")}
                </button>
              </div>
            )}
            {formattedError && (
              <div className="flashMessage error">
                <span>{t(formattedError)}</span>
              </div>
            )}
            {isLocal &&
              formattedError &&
              formattedError.includes("Failed to load settings from") && (
                <div>
                  <button
                    onclick={(e) => {
                      clearSiteURL(e);
                      clearStoreError();
                    }}
                    className="btnLink forgotPasswordLink"
                  >
                    {t("site_url_link_text")}
                  </button>
                </div>
              )}
            {children}
          </div>
        </div>
        {logo && (
          <a
            href="https://www.netlify.com"
            className={`callOut${loading ? " visuallyHidden" : ""}`}
          >
            <span className="netlifyLogo" />
            {t("coded_by")}
          </a>
        )}
      </div>
    );
  }
}
