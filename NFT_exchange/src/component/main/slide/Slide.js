import React from 'react';
import {
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import {
  NftName,
  CustomButton,
  Profile,
  NftInformation,
} from '../../common/commonelement';
import Icon from 'react-native-vector-icons/Ionicons';

import database from '@react-native-firebase/database';

import { connect } from 'react-redux';
import ActionCreator from '../../../actions';


const {width} = Dimensions.get('window');
const height = width * 0.5;
var start = 0;

class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datalist: [],
    };

    console.log(1);

    database()
      .ref()
      .on('value', snapshot => {
        console.log('datalist: ', snapshot.val());
        this.setState({datalist: snapshot.val()});
      });
  }

  render() {
    return (
      <View style={styles.slideView}>
        <ScrollView
          pagingEnabled
          horizontal
          style={{width, height}}
          ref={ref => (this.scrollView = ref)}>
          {this.state.datalist.map((element, index) => {
            if (index < 5)
              return (
                <View key={index}>
                  <Image
                    key={index}
                    source={{uri: element.imageUrl}}
                    style={{width, height, resizeMode: 'contain'}}
                  />

                  <Profile
                    title={element.title}
                    marginLeft={50}
                    marginTop={20}
                    navigation={this.props.navigation}
                  />

                  <NftName
                    title={element.content}
                    marginLeft={50}
                    fontSize={45}
                    onPress={() =>
                      this.props.navigation.navigate('SUGESST', {
                        title: element.title,
                        content: element.content,
                        cost: element.cost,
                        imageUrl: element.imageUrl,
                      })
                    }
                  />

                  <NftInformation
                    width={170}
                    marginLeft={30}
                    curTitle={element.cost}
                    costTitle={element.cost * 10000}
                  />

                  <CustomButton
                    titleMarginLeft={20}
                    buttonMarginLeft={48}
                    onPress={() =>{
                      this.props.navigation.navigate('SUGESST', {
                        title: element.title,
                        content: element.content,
                        cost: element.cost,
                        imageUrl: element.imageUrl,
                      }),
                      this.props.changeTitle(element.title)
                    }}
                  />
                </View>
              );
          })}
        </ScrollView>

        <View style={styles.narrowBtn}>
          <TouchableOpacity onPress={() => this.leftPage()}>
            <Icon style={styles.icon} name="chevron-back" size={35} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.rightPage()}>
            <Icon style={styles.icon} name="chevron-forward" size={35} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  

  

  leftPage = () => {
    start -= width;

    if (start <= width * -1) {
      start = width * 4;
    }

    this.scrollView.scrollTo({
      x: start,
    });
  };
  rightPage() {
    start += width;

    if (start >= width * 5) {
      start = 0;
    }

    this.scrollView.scrollTo({
      x: start,
    });
  }

  goNftDetailScreen() {
    /* this.props.navigation.navigate('SUGESST',{dataId : element.dataId}); */
  }
}

const styles = StyleSheet.create({
  slideView: {
    marginTop: 30,
    width: 30,
    height: 550,
  },

  narrowBtn: {
    width: width,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    top: 220,
  },
  icon: {
    margin: 5,
  },
});

function mapStateToProps(state) {
  return {
    titleNum: state.titleNum
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeTitle: (title) => {
      dispatch(ActionCreator.changeTitle(title));
    }
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Slide);


