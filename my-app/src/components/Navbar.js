function Navbar(){
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand"
        href="contact.html">&nbsp; Ilias Chowdhury &nbsp;</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse justify-content-end collapse" id="navbarSupportedContent" >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link active" aria-current="page" href="/contact">Contact </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/portfolio">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/">About</a>
            </li>

          </ul>
        </div>
      </nav>
    )
}
  

export default Navbar;