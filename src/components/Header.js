import React from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import Text from './Kit/Text';
import styles from './Kit/HeaderStyles';

export default class Header extends React.Component {
  state = {
    searchVisibility: false,
    text: ''
  };

  submitSearch = () => {
    const { text } = this.state;

    if (text && text.length >= 3) {
      this.props.onSubmit(text);
      this.setState({
        searchVisibility: false
      });
    }
  };

  render() {
    const { query } = this.props;
    const { searchVisibility, text } = this.state;

    return (
      <View style={styles.container}>
        {
          searchVisibility ? (
            <View>
              <TextInput
                value={text}
                placeholder="عبارت جستجو را وارد کنید ..."
                style={styles.input}
                onChangeText={txt => this.setState({ text: txt })}
                onSubmitEditing={this.submitSearch}
              />
            </View>
          ) : (
            <View style={styles.titleWrapper}>
              <Text style={styles.action}>منو</Text>
              <Text style={styles.title}>
                {`جستجو: ${query}`}
              </Text>
              <TouchableOpacity
                style={styles.action}
                onPress={() => {
                  this.setState({ searchVisibility: true });
                }}
              >
                <Text>جستجو</Text>
              </TouchableOpacity>
            </View>
          )
        }
      </View>
    );
  }
}
