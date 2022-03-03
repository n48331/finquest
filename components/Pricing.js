import { BsFillCheckCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import styles from './pricing.module.css'

const plans = [
	{
		imageLink: '/images/options-trading-plan.png',
		planName: 'Options Trading',
		price: 4499,
		cutPrice: 4940,
		discount: '10% off',
		duration: '1 Month',
		features: ['FNO trading', 'Stock options', 'Option buying', 'Option selling'],
		message: "I would like to join the 'Options trading' plan",
	},
	{
		imageLink: '/images/student-plan.png',
		planName: 'Starter',
		price: 7499,
		cutPrice: 8999,
		discount: '20% off',
		duration: '1 Month',
		color: 'yellow',
		features: ['Intraday trading', 'Swing trading', 'Commodity', 'Long term'],
		tag: 'Most Enrolled',
		tagColor: '#D22C2C',
		message: "I would like to join the 'Starter' plan",
	},
	{
		imageLink: '/images/professional-plan.png',
		planName: 'Professional',
		price: 10399,
		cutPrice: 11959,
		discount: '15% off',
		duration: '2 Months',
		features: [
			'Intraday & swing trading',
			'Commodity',
			'Long term',
			'FNO trading',
			'Option buying',
			'Option selling',
		],
		tag: 'Popular Program',
		tagColor: '#790DE5',
		message: "I would like to join the 'Professional' plan",
	},
]

export default function Pricing() {
	return (
		<div id='memberships' className='margin'>
			<section className={styles['pricing']}>
				<div className={styles['heading-wrapper']}>
					<h2>Memberships</h2>
					<p>It&apos;s easy, it&apos;s comprehensive and best of all, it&apos;s here for a lifetime!</p>
				</div>
				<div className={styles['cards-wrapper']}>
					{plans.map((item, index) => (
						<Card
							key={index}
							imageLink={item.imageLink}
							planName={item.planName}
							price={item.price}
							cutPrice={item.cutPrice}
							discount={item.discount}
							duration={item.duration}
							features={item.features}
							color={item.color}
							tag={item.tag}
							tagColor={item.tagColor}
							message={item.message}
						/>
					))}
					<div className={styles['twinkle-wrapper-1']}>
						<img src='/images/twinkle.svg' alt='' width='50px' height='auto'></img>
						<img src='/images/twinkle.svg' alt='' width='50px' height='auto'></img>
					</div>
					<div className={styles['twinkle-wrapper-2']}>
						<img src='/images/twinkle.svg' alt='' width='50px' height='auto'></img>
						<img src='/images/twinkle.svg' alt='' width='50px' height='auto'></img>
					</div>
				</div>

				<img
					className={styles['grid-pattern-1']}
					src='/images/grid-pattern.svg'
					width='435px'
					height='auto'
					alt=''
				/>
				<img
					className={styles['grid-pattern-2']}
					src='/images/grid-pattern.svg'
					width='435px'
					height='auto'
					alt=''
				/>

				<img className={styles['pricing-arrow']} src='/images/pricing-arrow.svg' alt='' />
			</section>
		</div>
	)
}

function waLink(msg) {
	let url = 'https://api.whatsapp.com/send?'
	let params = new URLSearchParams('')
	params.append('phone', '918075145434')
	params.append('text', msg)
	return url + params.toString()
}

function Card({ imageLink, planName, price, cutPrice, discount, duration, features, color, tag, tagColor, message }) {
	return (
		<div className={`${styles['card']} ${color === 'yellow' ? styles['yellow-card'] : ''}`}>
			{tag && (
				<div className={styles['tag']} style={{ backgroundColor: tagColor }}>
					{tag}
				</div>
			)}
			<div className={styles['image-container']} style={{ backgroundImage: `url('${imageLink}')` }}></div>
			<p className={styles['plan-name']}>{planName}</p>
			<div className='flex items-center mb-2'>
				<div className={styles['cut-price-wrapper']}>₹{cutPrice}</div>
				<div className={styles['discount']}>{discount}</div>
			</div>
			<div className={styles['price-wrapper']}>
				<h3>₹{price}</h3>
				<span>{'/ ' + duration}</span>
			</div>
			<ul className={styles['features']}>
				{features.map((item, index) => (
					<li key={index}>
						<BsFillCheckCircleFill className={styles['tick-icon']} /> <p>{item}</p>
					</li>
				))}
			</ul>
			<a href={waLink(message)} target='_blank' rel='noreferrer noopener'>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className={styles['action-button']}
				>
					JOIN NOW
				</motion.button>
			</a>
		</div>
	)
}
