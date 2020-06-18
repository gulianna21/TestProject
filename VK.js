import React, {Component} from 'react';
import {StyleSheet, View, Button, Image, Text, } from 'react-native';

export default class VK extends Component {

	render () {
	return (
	<View style={{flexDirection: 'column'}}>
		<View style={{flexDirection: 'row', marginLeft: 20}}>
		
			<Image
				source={require('./img/ava.png')}
				resizeMode={'contain'}
				style={styles.avatar}
			/>
			<View style={{ flexDirection: 'column', marginLeft: 1}}>
				<Text style={styles.name}> Yulia Guskova </Text>
				<Text style={styles.statusText}> this is my status </Text>
				<Text style={styles.statusId}>online</Text>
			</View>

		</View>
		<View style={{flexDirection: 'column', marginTop:5}}>
			<Button
				title="Редактировать"
				color="#808080"
			/>
			
			<View style={{flexDirection: 'row', marginLeft: 5, marginTop:5, marginBottom:5}}>
				<Text style={styles.mainText}>История</Text>
				<Text style={styles.mainText}>Запись</Text>
				<Text style={styles.mainText}>Фото</Text>
				<Text style={styles.mainText}>Трансляция</Text>
			</View>
			<View style={{marginTop:10}}>
				<Text style={styles.statusId}>Город : Нижний новгород</Text>
			</View>
			<View style={{marginTop:10}}>
				<Text style={styles.statusId}>Образование: ННГУ им. Лобачевского</Text>
			</View>
			<View style={{marginTop:10}}>
				<Text style={styles.mainText}>Укажите место работы</Text>
			</View>
			<View style={{marginTop:10}}>
				<Text style={styles.mainText}>Подробная информация</Text>
			</View>
		</View>
		<View style={{ flexDirection: 'column', marginTop:10}}>
			<Text style={styles.mainText}>Фотографии 5</Text>
			<View style={{ flexDirection: 'row', marginTop:10, marginLeft: 20}}>
				<Image
					source={require('./img/ava.png')}
					resizeMode={'contain'}
					style={styles.photo}
				/>
				<Image
					source={require('./img/1.png')}
					resizeMode={'contain'}
					style={styles.photo}
				/>
				<Image
					source={require('./img/2.png')}
					resizeMode={'contain'}
					style={styles.photo}
				/>
		</View>
		<View style={{flexDirection: 'row', marginTop:10}}>
				<Image
					source={require('./img/3.png')}
					resizeMode={'contain'}
					style={styles.photo}
				/>
				<Image
					source={require('./img/4.png')}
					resizeMode={'contain'}
					style={styles.photo}
				/>
		</View>
		</View>
	</View>
			);
	};
}

const styles = StyleSheet.create({
	photo:{
		width: 100,
		height: 100,
		borderRadius: 5,
	},
	avatar: {
		width: 120,
		height: 120,
		borderRadius: 100,
	},
	name: {
		marginLeft: 10,
		fontSize: 22,
		color: '#2e2e2e',
	},
	statusText:{
		marginLeft: 10,
		fontSize: 19,
		color: '#2e2e2e',
	},
	statusId: {
		marginLeft: 14,
		fontSize: 19,
		color: '#b0b0b0',
	},
	mainText: {
		marginLeft: 14,
		fontSize: 19,
		color: '#0000FF',
	}
});