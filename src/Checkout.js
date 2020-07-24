import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal.js";
import CurrencyFormat from "react-currency-format";
function Checkout() {
	const [{ basket }] = useStateValue();
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt=""
				/>
				{basket?.length === 0 ? (
					<div>
						<h2>Your shopping basket is empty!</h2>
						<p>
							Your Shopping Cart lives to serve. Give it purpose--fill it with
							books, CDs, videos, DVDs, toys, electronics, and more.
						</p>
					</div>
				) : (
					<div>
						<h2 className="checkout__title">Your Shopping Basket</h2>

						{/* all the checkout products */}
						<div className="checkout__pockets">
							{basket?.map((item) => (
								<CheckoutProduct
									id={item.id}
									title={item.title}
									image={item.image}
									price={item.price}
									rating={item.rating}
								/>
							))}
						</div>
					</div>
				)}
			</div>

			{basket.length > 0 && (
				<div className="checkout__right">
					<Subtotal />
				</div>
			)}
		</div>
	);
}

export default Checkout;
