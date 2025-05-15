import React from 'react';
import '../styles/Modal.css';

const Modal = ({
	isOpen,
	onClose,
	title,
	arabicTitle,
	price,
	description,
	arabicDesc,
	imageUrl,
}) => {
	if (!isOpen) return null;

	return (
		<div
			className='modal active'
			id='modal'
		>
			<div className='modal-content'>
				<button
					className='close-modal'
					onClick={onClose}
				>
					&times;
				</button>
				<img
					id='modal-image'
					src={imageUrl}
					alt='Dish'
					className='modal-img'
				/>

				<div className='modal-titles'>
					<h3
						id='modal-title'
						className='english-text'
					>
						{title}
					</h3>
					<div
						id='modal-price'
						className='modal-price english-text'
					>
						{price}
					</div>
				</div>

				<div className='modal-descriptions'>
					<p
						id='modal-description'
						className='english-text'
					>
						{description}
					</p>
				</div>

				<div className='modal-arabic-content'>
					<div
						id='modal-arabic-title'
						className='modal-arabic-title arabic-text'
					>
						{arabicTitle}
					</div>
					<p
						id='modal-arabic-desc'
						className='arabic-text'
					>
						{arabicDesc}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Modal;
