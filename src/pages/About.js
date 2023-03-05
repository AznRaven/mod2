export default function About(test) {
    function toggleOffcanvas() {
      document.querySelector("#offcanvas").classList.toggle("show");
    }
  
    return (
      <>
        {/* Sidebar */}
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvas"
          aria-labelledby="offcanvasLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasLabel">
              Settings
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            Content for the offcanvas goes here. You can place just about any
            Bootstrap component or custom elements here.
          </div>
        </div>
        {/* Sidebar */}
        <button
          class="btn btn-primary"
          type="button"
          onClick={toggleOffcanvas}
          aria-controls="offcanvasExample"
        >
          Sidebar
        </button>
      </>
    );
  }
  