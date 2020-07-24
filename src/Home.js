import React from "react";
import Product from "./Product.js";
import "./Home.css";

function Home() {
	return (
		<div className="home">
			<img
				className="home__image"
				src="https://images-fe.ssl-images-amazon.com/images/G/35/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-AU_ENG_PVD4745_ILLUMINATE._CB428353261_.jpg"
			/>
			{/* product */}
			<div className="home__row">
				<Product
					id={1}
					title="Tag Heuer Carrera Chronograph Automatic Mens Watch CAR2A1H.FT6101, Round, Sapphire Crystal, Analog"
					price={4390}
					rating={5}
					image="https://m.media-amazon.com/images/I/81y6MGw9JBL._AC_UL320_.jpg"
				/>
				<Product
					id={2}
					title="Omega Women's 123.15.27.60.55.003 Constellation Polished 27mm Analog Display Quartz Silver Watch"
					price={6000}
					rating={5}
					image="https://m.media-amazon.com/images/I/81B2AJqi9IL._AC_UL480_QL65_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id={3}
					title="MSI GL65 Leopard 10th Generation Intel Core i7 Processor Laptop, GL65 Leopard 10SEK-207AU, 16GB RAM, 128GB SSD, 8GB 1080GTX, 15.6-inch FHD (1920x1080) display, 144Hz, Intel Core i7 processor"
					price={2300}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/41WUWko9aQL._AC_.jpg"
				/>
				<Product
					id={8}
					title="HyperX Cloud Alpha S - PC Gaming Headset, 7.1 Surround Sound, Adjustable Bass, Dual Chamber Drivers, Chat Mixer, Breathable Leatherette, Memory Foam, and Noise Cancelling Microphone - Blue"
					price={2300}
					rating={5}
					image="https://m.media-amazon.com/images/I/61h7WVCfw6L._AC_UY327_FMwebp_QL65_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id={4}
					title="OnePlus 8 (5G) Dual-SIM IN2013 128GB/8GB RAM (GSM + CDMA) Factory Unlocked Android Smartphone (Glacial Green)- International Version"
					price={400}
					rating={5}
					image="https://m.media-amazon.com/images/I/71ZJmLrjqzL._AC_UL480_FMwebp_QL65_.jpg"
				/>
				<Product
					id={5}
					title="APPLE iPhone 11 Pro Max 256GB Factory Unlocked IoS 4G/LTE Smartphone - International Version Color - (Midnight Green) by iPhone"
					price={1099}
					rating={5}
					image="https://m.media-amazon.com/images/I/61+Ywo3U3tL._AC_UL480_FMwebp_QL65_.jpg"
				/>
				<Product
					id={6}
					title="Samsung Galaxy Z Flip SM-F700F/DS 256GB Factory Unlocked Android 4G/LTE Smartphone - International Version (Mirror Purple)"
					price={1599}
					rating={4}
					image="https://m.media-amazon.com/images/I/716r3n03ZdL._AC_UL480_FMwebp_QL65_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id={7}
					title="Samsung 75-inch Class QLED Q900T Series - Real 8K Resolution Direct Full Array 32X Quantum HDR 32X Smart TV with Alexa Built-in (QN75Q900TSFXZA, 2020 Model)"
					price={18069}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/91pi34PiUPL._AC_SL1500_.jpg"
				/>
			</div>
		</div>
	);
}

export default Home;
