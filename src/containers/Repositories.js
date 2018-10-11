import React from 'react';
import { FlatList, View, Linking } from 'react-native';
import RepositoryItem from '../components/RepositoryItem';
import Header from '../components/Header';
import ApiClient from '../helpers/apiClient';
import styles from './RepositoriesStyles';

export default class Repositories extends React.Component {
  state = {
    loading: false,
    page: 1,
    query: 'react-native',
    data: []
  };

  componentDidMount() {
    this.search('react-native', 1);
  }

  search = (query, page) => {
    this.setState({
      loading: true,
      query,
      page
    });

    ApiClient.get(`/search/repositories?q=${query}&per_page=20&page=${page}`)
      .then((response) => {
        this.setState(state => ({
          loading: false,
          data: page === 1 ? response.items : [
            ...state.data,
            ...response.items
          ]
        }));
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.log('error', error);
      });
  };

  onPressItem = (url) => {
    Linking.openURL(url);
  };

  render() {
    const { data, loading, query, page } = this.state;

    return (
      <View style={styles.container}>
        <Header query={query} onSubmit={q => this.search(q, 1) } />
        <FlatList
          refreshing={loading}
          data={data}
          renderItem={repository => (
            <RepositoryItem
              name={repository.item.name}
              description={repository.item.description}
              language={repository.item.language}
              openIssuesCount={repository.item.open_issues_count}
              stargazersCount={repository.item.stargazers_count}
              avatarUrl={repository.item.owner.avatar_url}
              owner={repository.item.owner.login}
              url={repository.item.owner.html_url}
              onPress={this.onPressItem}
            />
          )}
          onRefresh={() => this.search(query, 1)}
          onEndReached={() => {
            if (!loading) {
              this.search(query, page + 1);
            }
          }}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}
