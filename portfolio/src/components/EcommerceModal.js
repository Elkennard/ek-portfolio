import "./modal.css";

export default function EcommerceModal({ setEcommerceModalOpen }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setEcommerceModalOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>E-Commerce Site</h1>
        </div>
        <div className="body">
          <ul>
              <li className="modalList">An e-commerce site with products and a payment process.
            </li>
            <li className="modalList">
              Cards for each product, with a link through to further details for each item. </li>
            <li className="modalList">
              Scrolling banner of other items, you may like below each product.
            </li>
            <li className="modalList">
              Used Sanity as the backend database to store all product details and images. I really liked the flexibility of using Sanity without having to create a full backend.
            </li>
            <li className="modalList">
              I used Stripe to process payments and was surprised how quick and simple the integration was.
            </li>
            <li className="modalList">
              Tech Stack: react, next.js, Sanity, Stripe, CSS, JS, git, Babel, Vercel.
            </li>
          </ul>
        </div>
        <div className="footer">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open("https://ecommerce-ek.vercel.app/", "_blank");
            }}
            id="launchBtn"
          >
            Launch
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://github.com/Elkennard/ecommerce",
                "_blank"
              );
            }}
          >
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
