import React from "react"

import useStore from "../useStore"

import BinanceImg				from "../assets/images/Partners/binance.png"
import IlluviumImg				from "../assets/images/Partners/illuvium.png"
import CoinbaseImg				from "../assets/images/Partners/coinbase.png"
import MetaImg					from "../assets/images/Partners/meta.png"
import CoinmarketcapImg			from "../assets/images/Partners/coinmarketcap.png"
import BinanceDarkImg			from "../assets/images/Partners/binance-dark.png"
import IlluviumDarkImg			from "../assets/images/Partners/illuvium-dark.png"
import CoinbaseDarkImg			from "../assets/images/Partners/coinbase-dark.png"
import MetaDarkImg				from "../assets/images/Partners/meta-dark.png"
import CoinmarketcapDarkImg		from "../assets/images/Partners/coinmarketcap-dark.png"

import Tree						from "../assets/images/Icons/8.png"
import EarthPlant				from "../assets/images/Icons/2.png"
import Jewel					from "../assets/images/Icons/13.png"
import Pot						from "../assets/images/Icons/11.png"

import Sharp1					from "../assets/images/Shapes/1.png"
import Sharp2					from "../assets/images/Shapes/2.png"
import Hero						from "../assets/images/Shapes/hero-1.png"

import Illustration1			from "../assets/images/Illustrations/1.png"
import Illustration2			from "../assets/images/Illustrations/2.png"
import Illustration3			from "../assets/images/Illustrations/3.png"
import Illustration1Dark		from "../assets/images/Illustrations/1-Light.png"
import Illustration2Dark		from "../assets/images/Illustrations/2-Light.png"
import Illustration3Dark		from "../assets/images/Illustrations/3-Light.png"

const _WorkData = [
	{
		image: Illustration1,
		imageDark: Illustration1Dark,
		title: "Play",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
	},
	{
		image: Illustration2,
		imageDark: Illustration2Dark,
		title: "Earn",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
	},
	{
		image: Illustration3,
		imageDark: Illustration3Dark,
		title: "Plant",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
	}
] as CardObject[]

const _RoadmapData = [
	{
		title: "2022 Q2",
		items: [
			"idea",
			"Forming a team",
			"Advisor"
		]
	},
	{
		title: "2022 Q3",
		items: [
			"Concept Art Trees",
			"Whitepaper",
			"Tokenomics",
			"MVP"
		]
	},
	{
		title: "2022 Q4",
		items: [
			"Social activity",
			"Token mint",
			"Seed phase sale",
			"Private sale",
			"Team scale-up"
		]
	},
	{
		title: "2023 Q2",
		items: [
			"Alpha launch (PC/Web)",
			"Marketplace",
			"iOS/Android version",
			"NFT sale",
			"Staking"
		]
	},
	{
		title: "2023 Q3",
		items: [
			"Tower Defence game",
			"EcoForest",
			"Planting Trees"
		]
	},
	{
		title: "2023 Q3",
		items: [
			"Card game",
			"Land sale",
			"Anti-Frod system",
			"Planting Trees",
		]
	},
	{
		title: "2023 Q3",
		items: [
			"Animals game",
			"NFT sale",
			"Beta launch",
			"Planting Trees"
		]
	},
	{
		title: "2025 Q1-Q4",
		items: [
			"Bee game",
			"NFT sale",
			"Launch",
			"Planting Trees",
		]
	}
]

const _FapData = [
	{
		label: "What is Ecoland?",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum"
	},
	{
		label: "How does Ecoland work?",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum"
	},
	{
		label: "How do you play the game?",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum"
	},
	{
		label: "How to earn from playing?",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum"
	},
	{
		label: "Where and how do the trees will be planted?",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum"
	},
	{
		label: "Why this project is future?",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum"
	},
	{
		label: "How to become an Ecomember",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum"
	},
	{
		label: "How to join waiting list?",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum"
	}
]

const _EverywhereData = [
	{
		image: Sharp1,
		title: "#planting",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
	},
	{
		image: Sharp1,
		title: "#planting",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
	},
	{
		image: Sharp1,
		title: "#planting",
		content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
	}
] as CardObject[]

function Home () {
    const { theme } = useStore()

    return (
        <main>
            <section className="banner">
                <div className="container">
					<div className="col-xl-6">
						<h1>Play Earn Plant!</h1>
						<p className="text-3">Build your environment both in digital and real Don’t forget, every tree counts</p>
						<div>
							<button className="btn-primary text-upper mr">Join waiting list</button>
							<button className="btn-primary text-upper">Watch now</button>
						</div>
					</div>
					<div className="col-xl-6">
						<img src={Hero} alt="Hero" />
					</div>
				</div>
            </section>
            <section>
                <div className="container">
					<div className="partners">
						{theme === '' && (
							<>
								<div>
									<img src={BinanceImg} alt="" />
								</div>
								<div>
									<img src={IlluviumImg} alt="" />
								</div>
								<div>
									<img src={CoinbaseImg} alt="" />
								</div>
								<div>
									<img src={MetaImg} alt="" />
								</div>
								<div>
									<img src={CoinmarketcapImg} alt="" />
								</div>
							</>
						)}
						{theme === 'dark' && (
							<>
								<div>
									<img src={BinanceDarkImg} alt="" />
								</div>
								<div>
									<img src={IlluviumDarkImg} alt="" />
								</div>
								<div>
									<img src={CoinbaseDarkImg} alt="" />
								</div>
								<div>
									<img src={MetaDarkImg} alt="" />
								</div>
								<div>
									<img src={CoinmarketcapDarkImg} alt="" />
								</div>
							</>
						)}
					</div>
				</div>
            </section>
            <section className="full">
				<div className="subcontainer">
					<div className="col-xl-8">
						<h2>Ecoverse</h2>
						<p>We believe that all the innovations (discoveries/tools) in the world can be used for good. Thus, we believe that blockchain can also be used in a beneficial way and how fun we can make it. We are against the use of everything that mankind has invented to destroy the world. If you think so too, let's make the blockchain useful.</p>
						<p>This is our forest. We created it all together with you. This forest exists both in the real world and in our metaverse. You can find here all the people who are involved in the creation of this forest. By playing our games you are helping to save our planet. After all, we plant a tree on behalf of each of our users. If you don’t have time/desire to play games, but want to plant a tree and leave you name on the blockchain forever, then you can donate coins that will be sent to help protect our environ-</p>
					</div>
					<div className="col-xl-4">
						<div className="row">
							<div className="col-md-6">
								<div className="icon-wrap">
									<img src={Tree} alt="Tree" />
									<span>Ecology</span>
								</div>
							</div>
							<div className="col-md-6">
								<div className="icon-wrap">
									<img src={EarthPlant} alt="EarthPlant" />
									<span>Ecology</span>
								</div>
							</div>
							<div className="col-md-6">
								<div className="icon-wrap">
									<img src={Jewel} alt="Jewel" />
									<span>Future</span>
								</div>
							</div>
							<div className="col-md-6">
								<div className="icon-wrap">
									<img src={Pot} alt="Pot" />
									<span>Clean</span>
								</div>
							</div>
						</div>
					</div>
				</div>
            </section>
            <section className="full">
				<div className="subcontainer">
					<h2>Our Features</h2>
					<div className="row">
						<div className="col-xl-4">
							<div className="card">
								<img src={Sharp2} alt="Sharp2" />
								<h3>Play to <br />Earn</h3>
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci</p>
								<button className="">right</button>
							</div>
						</div>
						<div className="col-xl-8">
							<div className="row">
								<div className="col-md-6">
									<div className="card">
										<h3>Education <br />content</h3>
										<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci</p>
										<button className="">right</button>
									</div>
								</div>
								<div className="col-md-6">
									<div className="card">
										<h3>Influencers <br />Volunteers</h3>
										<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci</p>
										<button className="">right</button>
									</div>
								</div>
							</div>
							<div className="card">
								<img src={Sharp1} alt="Sharp1" />
								<h3>Events in <br />Real Life</h3>
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci</p>
								<button className="">right</button>
							</div>
						</div>
					</div>
				</div>
            </section>
            <section className="full">
				<div className="subcontainer">
					<h2>How it works</h2>
					<div className="row">
						{_WorkData.map((i:any, k:number) => (
							<div key={k} className="col-xl-4">
								<div className="card">
									<img src={i.image} alt="Sharp1" />
									<h3>{i.title}</h3>
									<p>{i.content}</p>
									<button className="">right</button>
								</div>
							</div>
						))}
					</div>
				</div>
            </section>
            <section className="full">
				<div className="subcontainer">
					<h2>Our Roadmap</h2>
					<div className="row">
						{_RoadmapData.map((i:any, k:number) => (
							<div key={k} className="col-xl-4">
								<div className="card">
									<h3>{i.title}</h3>
									<ul>
										{i.items.map((li:string, k:number) => (
											<ol key={k}>{li}</ol>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor.</p>
					<button className="text-upper">WHITEPAPER</button>
				</div>
            </section>
            <section className="full">
				<div className="subcontainer">
					<h2>Frequently Asked Questions</h2>
					<div>
						{_FapData.map((i:any, k:number) => (
							<div key={k} className="slide">
								<div className="header">
									<h3>{i.label}</h3>
								</div>
								<div className="content">
									<p>{i.content}</p>
								</div>
							</div>
						))}
					</div>
				</div>
            </section>
            <section className="full">
				<div className="subcontainer">
					<h2>We are everywhere!</h2>
					<div className="row">
						{_EverywhereData.map((i:CardObject, k:number) => (
							<div key={k} className="col-xl-4">
								<div className="card">
									<img src={i.image} alt="Sharp1" />
									<h3>{i.title}</h3>
									<p>{i.content}</p>
									<button className="">right</button>
								</div>
							</div>
						))}
					</div>
				</div>
            </section>
			<section>
				<div className="container">
					<div className="row">
						<div className="col-md-7">
							<h2>Join our community</h2>
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut.</p>
						</div>
						<div className="col-md-5">
							<input type="text" placeholder="EMAIL ADDRESS" />
						</div>
					</div>
				</div>
			</section>
        </main>
    )
}

export default Home