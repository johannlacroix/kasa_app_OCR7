import PropTypes from "prop-types";
import styles from "./Button.module.scss";

function Button({ label, onClick, imgSrc, imgAlt, className }) {
	return (
		<button className={`${styles.button} ${className}`} onClick={onClick}>
			{imgSrc ? (
				<img src={imgSrc} alt={imgAlt} className={styles.buttonImage} />
			) : (
				label
			)}
		</button>
	);
}

Button.propTypes = {
	label: PropTypes.string,
	onClick: PropTypes.func,
	imgSrc: PropTypes.string,
	imgAlt: PropTypes.string,
	className: PropTypes.string,
};

Button.defaultProps = {
	label: "",
	onClick: () => {},
	imgSrc: null,
	imgAlt: "",
	className: "",
};

export default Button;
