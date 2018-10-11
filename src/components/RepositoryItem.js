import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Text from './Kit/Text';
import styles from './RepositoryItemStyles';

export default class RepositoryItem extends React.PureComponent {
  onPress = () => {
    // Linking.openURL(this.props.url);
    this.props.onPress(this.props.url);
  };

  render() {
    const { name, description, language, openIssuesCount, stargazersCount, avatarUrl, owner } = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        <Text type="title">
          {name}
        </Text>
        <Text>
          {description}
        </Text>
        <View style={styles.details}>
          <Text>
            {language}
          </Text>
          <Text>
            ! {openIssuesCount}
          </Text>
          <Text>
            * {stargazersCount}
          </Text>
        </View>
        <View style={styles.footer}>
          <Image style={styles.avatar} source={{ uri: avatarUrl }} />
          <Text>
            {owner}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
