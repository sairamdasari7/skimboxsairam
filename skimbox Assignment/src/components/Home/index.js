import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <hr className="home-container-line" />

    <div className="main-bg-container">
      <div className="top-button-container">
        <button type="button" className="top-button">
          Pay Monthly
        </button>
        <p className="button-container-description">Pay Yearly (Save 25%)</p>
      </div>
      <div className="bg-container">
        <div>
          <div className="main-container">
            <h1 className="main-container-heading">MOST POPULAR</h1>
            <div className="card-container">
              <h1 className="card-main-heading">Basic</h1>
              <h1 className="card-sub-heading">
                FOR INDIVIDUALS & SMALL BUSINESSES
              </h1>
              <p className="main-description">
                Everything you need to create your store, ship products, and
                process payments
              </p>
              <h1 className="price-description">
                ₹1,994
                <span className="span-description">INR/mo</span>
              </h1>
              <div className="sub-card-para-description">
                <p>Get your first 3 months for ₹20/mo</p>
              </div>
              <div className="list-container">
                <h1 className="list-container-heading">
                  Whats included on Basic
                </h1>
                <ul className="un-ordered-styling">
                  <li className="list-styling">
                    <img
                      className="checklist"
                      src="https://res.cloudinary.com/diu6enwvi/image/upload/v1694512154/right_tick_image_vxrmsy.png"
                      alt="checklist"
                    />
                    Basic reports
                  </li>
                  <li className="list-styling">
                    <img
                      className="checklist"
                      src="https://res.cloudinary.com/diu6enwvi/image/upload/v1694512154/right_tick_image_vxrmsy.png"
                      alt="checklist"
                    />
                    Up to 1,000 inventory locations
                  </li>
                  <li className="list-styling">
                    <img
                      className="checklist"
                      src="https://res.cloudinary.com/diu6enwvi/image/upload/v1694512154/right_tick_image_vxrmsy.png"
                      alt="checklist"
                    />
                    2 staff accounts
                  </li>
                </ul>
              </div>

              <button type="button" className="card-button">
                Try for free
              </button>
            </div>
          </div>
        </div>
        <div className="main-container-1">
          <div className="card-container">
            <h1 className="card-main-heading">Shopify</h1>
            <h1 className="card-sub-heading">FOR SMALL BUSINESSES</h1>
            <p className="main-description">
              Level up your business with professional reporting and more staff
              accounts
            </p>
            <h1 className="price-description">
              ₹7,447
              <span className="span-description">INR/mo</span>
            </h1>
            <div className="sub-card-para-description">
              <p>Get your first 3 months for ₹20/mo</p>
            </div>
            <div className="list-container">
              <h1 className="list-container-heading">
                Whats included on Shopify
              </h1>
              <ul className="un-ordered-styling">
                <li className="list-styling">
                  <img
                    className="checklist"
                    src="https://res.cloudinary.com/diu6enwvi/image/upload/v1694512154/right_tick_image_vxrmsy.png"
                    alt="checklist"
                  />
                  Professional reports
                </li>
                <li className="list-styling">
                  <img
                    className="checklist"
                    src="https://res.cloudinary.com/diu6enwvi/image/upload/v1694512154/right_tick_image_vxrmsy.png"
                    alt="checklist"
                  />
                  Up to 1,000 inventory locations
                </li>
                <li className="list-styling">
                  <img
                    className="checklist"
                    src="https://res.cloudinary.com/diu6enwvi/image/upload/v1694512154/right_tick_image_vxrmsy.png"
                    alt="checklist"
                  />
                  5 staff accounts
                </li>
              </ul>
            </div>

            <button type="button" className="card-button">
              Try for free
            </button>
          </div>
        </div>
        <div className="main-container-1">
          <div className="card-container">
            <h1 className="card-main-heading">Advanced</h1>
            <h1 className="card-sub-heading">FOR MEDIUM TO LARGE BUSINESSES</h1>
            <p className="main-description">
              Get the best of Shopify with custom reporting and our lowest
              transaction fees
            </p>
            <h1 className="price-description">
              ₹30,164
              <span className="span-description">INR/mo</span>
            </h1>
            <div className="sub-card-para-description">
              <p>Get your first 3 months for ₹20/mo</p>
            </div>
            <div className="list-container">
              <h1 className="list-container-heading">
                Whats included on Advanced
              </h1>
              <ul className="un-ordered-styling">
                <li className="list-styling">
                  <img
                    className="checklist"
                    src="https://res.cloudinary.com/diu6enwvi/image/upload/v1694512154/right_tick_image_vxrmsy.png"
                    alt="checklist"
                  />
                  Custom report builder
                </li>
                <li className="list-styling">
                  <img
                    className="checklist"
                    src="https://res.cloudinary.com/diu6enwvi/image/upload/v1694512154/right_tick_image_vxrmsy.png"
                    alt="checklist"
                  />
                  Up to 1,000 inventory locations
                </li>
                <li className="list-styling">
                  <img
                    className="checklist"
                    src="https://res.cloudinary.com/diu6enwvi/image/upload/v1694512154/right_tick_image_vxrmsy.png"
                    alt="checklist"
                  />
                  15 staff accounts
                </li>
              </ul>
            </div>

            <button type="button" className="card-button">
              Try for free
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Home
