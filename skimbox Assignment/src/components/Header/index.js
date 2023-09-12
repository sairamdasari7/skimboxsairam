import './index.css'

const Header = () => (
  <div>
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <img
            className="website-logo"
            src="https://res.cloudinary.com/dalwxoeqb/image/upload/v1694507515/shopify_image_yfh4bc.png"
            alt="website logo"
          />
          <div className="nav-menu-right">
            <p className="nav-content-right">Start Free Trail</p>
            <img
              className="website-logo-right"
              src="https://res.cloudinary.com/dalwxoeqb/image/upload//c_thumb,w_40,g_auto/v1694513786/hamburger_kjqznx.png"
              alt="website logo"
            />
          </div>

          <button type="button" className="nav-mobile-btn">
            <ul className="nav-menu">
              <li className="nav-menu-item">Solutions</li>

              <li className="nav-menu-item">Pricing</li>
              <li className="nav-menu-item">Resources</li>
            </ul>
          </button>
        </div>

        <div className="nav-content nav-bar-large-container">
          <img
            className="website-logo"
            src="https://res.cloudinary.com/dalwxoeqb/image/upload/v1694507515/shopify_image_yfh4bc.png"
            alt="website logo"
          />
          <ul className="first-items">
            <li className="nav-menu-item">Solutions</li>
            <img
              className="drop-down-image"
              src="https://res.cloudinary.com/dalwxoeqb/image/upload//c_thumb,w_40,g_auto/v1694510981/dropdown_bdrygt.png"
              alt="Dropdown"
            />
            <li className="nav-menu-item">Pricing</li>
            <li className="nav-menu-item">Resources</li>
            <img
              className="drop-down-image"
              src="https://res.cloudinary.com/dalwxoeqb/image/upload//c_thumb,w_40,g_auto/v1694510981/dropdown_bdrygt.png"
              alt="Dropdown"
            />
          </ul>

          <ul className="nav-menu">
            <li className="nav-menu-item">Log in</li>
          </ul>
          <button type="button" className="logout-desktop-btn">
            Start free trail
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <hr />
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile-left">Basic</li>
          <hr className="line" />

          <li className="nav-menu-item-mobile">Shopify</li>
          <hr className="line" />

          <li className="nav-menu-item-mobile-right">Advanced</li>
        </ul>
        <hr />
      </div>
    </nav>
  </div>
)
export default Header
