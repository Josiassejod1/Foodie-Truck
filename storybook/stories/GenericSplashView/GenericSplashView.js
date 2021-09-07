
import React from 'react';
import { View, ScrollView } from 'react-native';
import StyledText from '../StyledText/StyledText';
import Logo from '../../../src/assets/images/logo.svg';
import Donut from '../../../src/assets/images/donut.svg';
import style from '../CenterView/style';
export default function GenericSplashView(props) {
	const subtitle = props.subtitle || ""
	const styles = {
		container: {
			backgroundColor: "#206FCE",
			width: '100%',
			height: '100%',
			position: 'relative',
			flex: 1
		},
		donut: {
			transform: [{
				scaleX: -1,
			}],
			position: 'absolute',
			top: 350,
		},
		headerTitle: {
			position: 'absolute',
			top: 50,
			padding: 30,
			zIndex: 100
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
		<ScrollView style={styles.container} snapToStart={false} snapToEnd={false} contentContainerStyle={{marginBottom: 5, flex: 1}}>
			<View style={styles.headerTitle}>
				<View style={styles.logo}>
					<Logo />
				</View>
				<View style={styles.subtitle}>
					<StyledText size="subtitle">{subtitle}</StyledText>
				</View>
			</View>
			<View style={styles.donut}>
				<Donut />
			</View>
			<View style={checkStyle(props) ? props.style : {}}>
				{props.children}
			</View>
		</ScrollView>
	)
}