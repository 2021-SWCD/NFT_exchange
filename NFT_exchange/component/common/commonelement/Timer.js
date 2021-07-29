//nft_simple_info_frame의 남은 경매시간을 보여주는 타이머
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';

export default function Timer({
  size,
  until,
  backgroundColor,
  color,
  marginRight,
  marginLeft,
}) {
  const [totalDuration, setTotalDuration] = useState(0);

  useEffect(() => {
    var date = moment().utcOffset('+05:30').format('YYYY-MM-DD hh:mm:ss');
    //Getting the current date-time with required formate and UTC
    var expirydate = '2021-07-02 18:00:00';
    var diffr = moment.duration(moment(expirydate).diff(moment(date)));
    var hours = parseInt(diffr.asHours());
    var minutes = parseInt(diffr.minutes());
    var seconds = parseInt(diffr.seconds());
    var d = hours * 60 * 60 + minutes * 60 + seconds;
    //converting in seconds
    setTotalDuration(d);
    //Settign up the duration of countdown in seconds to re-render
  }, []);

  return (
    <View marginLeft={marginLeft} marginRight={marginRight}>
      <CountDown
        size={size}
        until={until}
        digitStyle={{backgroundColor}}
        digitTxtStyle={{color}}
        separatorStyle={{color}}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator
      />
    </View>
  );
}

Timer.defaultProps = {
  size: 10,
  until: 1500,
  marginLeft: null,
  marginRight: 205,
  backgroundColor: '#FFF',
  color: '#000',
};
