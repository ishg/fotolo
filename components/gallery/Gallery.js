import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Image,
  ActivityIndicator,
  ScrollView,
  Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';
import NetworkImage from 'react-native-image-progress';
import Progress from 'react-native-progress/Circle';

const {width, height} = Dimensions.get('window');

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wallsJson: [],
      isLoading: true
    }
  }

  componentDidMount() {
    this.fetchWallsJson();
  }

  fetchWallsJson() {

    let url = 'https://unsplash.it/list';
    fetch(url)
      .then( response => response.json() )
      .then( jsonData => {
        let i = 0;
        let arr = []
        while (i < 10) {
          arr.push(jsonData[i])
          i++;
        }
        this.setState({
          isLoading: false,
          wallsJson: arr
        });
        console.log(jsonData);
      })
      .catch( error => {
        console.log('Fetch error ' + error)
      });

  }

  renderLoadingMessage() {
    return (
      <View style={styles.container}>
        <Progress size={60} indeterminate={true} color={'#E1F5FE'} thickness={7} />
        <Text style={styles.loadingText}>Contacting Unsplash</Text>           
      </View>
    );
  }

  onMomentumScrollEnd(){

  }

  renderResults() {
    let { wallsJson, isLoading } = this.state;
    if (!isLoading) {
      return (
        <Swiper
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
          loop={false}
          onMomentumScrollEnd={this.onMomentumScrollEnd}
          >
          { wallsJson.map((wallpaper, index) => {
            return(
              <NetworkImage key={index}
                source={{uri: `https://unsplash.it/${width}/${height}?image=${wallpaper.id}`}}
                style={styles.wallpaperImage}
                indicator={Progress}
                indicatorProps={{
                  color: '#E1F5FE',
                  size: 60,
                  thickness: 7
                }}>

              </NetworkImage>
            );
          })}
        </Swiper>
      );  
    }
  }

  render() {
     let {isLoading} = this.state;
     if (isLoading)
       return this.renderLoadingMessage();
     else
       return this.renderResults();
   }
}

var styles = StyleSheet.create({
  activeDot: {
    backgroundColor: '#E1F5FE', 
    width: 10, 
    height: 10, 
    borderRadius: 7, 
    marginLeft: 5, 
    marginRight: 5
  },
  dot: {
    backgroundColor:'#E1F5FE', 
    width: 5, 
    height: 5,
    borderRadius: 10, 
    marginLeft: 3, 
    marginRight: 3, 
    marginTop: 3, 
    marginBottom: 3,
  },
  loadingText: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#E1F5FE'
  },
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#000',
    alignItems: 'center'
  },
  wallpaperImage: {
    flex: 1,
    width: width,
    backgroundColor: '#000'
  }
});