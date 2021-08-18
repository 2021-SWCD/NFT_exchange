import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CardImage, NftName, Profile, NftCost} from '../commonelement';
import Timer from '../commonelement/Timer';
import database from '@react-native-firebase/database';
import { connect } from 'react-redux';
import { setPage} from '../../../redux/modules/page';

class NftSimpleInfoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datalist: [],
    };

    database()
      .ref()
      .on('value', snapshot => {
        console.log('datalist: ', snapshot.val());
        this.setState({datalist: snapshot.val()});
      });
  }

  render() {
    return (
      <View>
        {this.state.datalist.map((element, index) => (
          <View key={index}>
            <View style={styles.container}>
              <CardImage
                source={{uri: element.imageUrl}}
                onPress={() =>{
                  this.props.navigation.navigate('SUGESST'),
                  this.props.setPage({
                    title :element.title,
                    content : element.content,
                    cost : element.cost,
                    imageUrl: element.imageUrl,
                  });
                }}
              />
              <View style={styles.cardContainer}>
                <View style={styles.informContainer}>
                  <NftName
                    title={element.content}
                    fontSize={20}
                    onPress={() =>{
                      this.props.navigation.navigate('SUGESST'),
                      this.props.setPage({
                        title :element.title,
                        content : element.content,
                        cost : element.cost,
                        imageUrl: element.imageUrl,
                      });
                    }}
                  />
                  <Profile
                    title={element.title}
                    marginTop={10}
                    onPress={() =>{
                      this.props.navigation.navigate('ARTIST'),
                      this.props.setPage({
                        title :element.title,
                        imageUrl: element.imageUrl,
                      });
                    }}
                  />
                  <NftCost marginTop={5} nftCost={element.cost} />
                  <Timer backgroundColor={'#d3d3d3'} />
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  cardContainer: {
    backgroundColor: '#d3d3d3',
    borderBottomLeftRadius: 20, // 모서리 둥글게 테두리를 통틀어서 border라고 하나보다
    borderBottomRightRadius: 20,
    width: 300,
    height: 150,
  },
  informContainer: {
    marginLeft: 20,
  },
});

function mapStateToProps(state) {
  return {
    page : state.page,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPage : page => dispatch(setPage(page)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NftSimpleInfoCard);
