"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { ExploreCard, TitleText, TypingText } from "../components";
import { staggerContainer } from "../utils/motion";
import { exploreWorlds } from "../constants";

const Explore = () => {
	const [active, setActive] = useState("world-2");
	return (
		<section id="explore" className={`${styles.paddings}`}>
			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
				className={`${styles.innerWidth} mx-auto flex flex-col`}
			>
				<TypingText title="| The World" textStyles="text-center" />
			</motion.div>
			<TitleText
				title={
					<>
						Choose the world you want <br className="md:block hidden" /> to
						explore
					</>
				}
				textStyles="text-center"
			/>
			<div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5 ">
				{exploreWorlds.map((world, id) => (
					<ExploreCard
						key={world.id}
						{...world}
						index={id}
						active={active}
						handleClick={setActive}
					/>
				))}
			</div>
		</section>
	);
};

export default Explore;
