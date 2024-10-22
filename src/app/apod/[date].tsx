import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';
import React from 'react'


const ApodDetails = () => {
  const {date} = useLocalSearchParams();
  return (
    <View>
      <Text>ApodDetails {date} </Text>
    </View>
  )
}

export default ApodDetails