import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("")
	return (
		<div className="container d-flex align-items-center flex-column">
			<div className="cola">

			</div>
			<div className="cuerpo d-flex flex-column align-items-center">
				<div className={`red ${color==="red" ? "select" : ""}`}
					onClick={() => { setColor("red") }}>

				</div>
				<div className={`yellow ${color==="yellow" ? "select" : ""}`}
					onClick={() => { setColor("yellow") }}>

				</div>
				<div className={`green ${color==="green" ? "select" : ""}`}
					onClick={() => { setColor("green") }}>
				</div>

			</div>

		</div>
	);
};

export default Home;