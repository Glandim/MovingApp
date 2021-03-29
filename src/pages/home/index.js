import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import ExperienceBar from '../../components/experienceBar/ExperienceBar';
import Profile from '../../components/profile/Profile';
import CompletedChallengers from '../../components/completedChallengers/CompletedChallengers'
import Countdown from '../../components/countdown/Countdown';


export default function home() {
  return(
    <View style={styles.container}>
      <ExperienceBar />

      <View style={styles.profileSection}>
        <Profile />
        <CompletedChallengers />
        <Countdown />
      </View>

      <View>
        
      </View>
    </View>
  );
}