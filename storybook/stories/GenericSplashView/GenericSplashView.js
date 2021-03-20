
import React from 'react';
import { View } from 'react-native';
import StyledText from '../StyledText/StyledText';
import Logo from '../../../src/assets/images/logo.svg';
import Donut from '../../../src/assets/images/donut.svg';
import style from '../CenterView/style';
export default function GenericSplashView(props) {

	const styles = {
		container: {
			backgroundColor: "#206FCE",
			width: '100%',
			height: '100%',
			position: 'relative'
		},
		donut: {
			transform: [{
				scaleX: -1
			}],
			position: 'absolute',
			top: 350,
		},
		headerTitle: {
			position: 'absolute',
			top: 150,
			padding: 30
		},
		subtitle: {
			marginTop: 8,
			maxWidth: 200
		},
		logo: {
			marginBottom: 8
		},
	}
	function checkStyle(value) {
		return value && value.style
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerTitle}>
				<View style={styles.logo}>
					<Logo />
				</View>
				<View style={styles.subtitle}>
					<StyledText size="subtitle">{props.subtitle}</StyledText>
				</View>
			</View>
			<View style={styles.donut}>
				<Donut />
			</View>
			<View style={checkStyle(props) ? props.style : {}}>
				{props.children}
			</View>
		</View>
	)
}