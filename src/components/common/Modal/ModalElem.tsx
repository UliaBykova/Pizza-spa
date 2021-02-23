import React from 'react';
import s from './ModalElem.module.css';

type TProps = {
	modalActive: boolean;
	setModalActive: (modalActive: boolean) => boolean;
	children: any;
};

const ModalElem: React.FC<TProps> = ({ modalActive, setModalActive, children }) => {
	return (
		<div
			className={modalActive ? `${s.modal} ${s.active}` : `${s.modal}`}
			onClick={() => setModalActive(false)}
		>
			<div className={s.content} onClick={(e) => e.stopPropagation()}>
				<button className={s.close} onClick={() => setModalActive(false)}></button>
				{children}
			</div>
		</div>
	);
};

export default ModalElem;
