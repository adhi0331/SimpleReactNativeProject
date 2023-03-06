import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AppLogins from './LoginsTab';

interface ScrollListProps {
  items: { time: string }[];
}

class ScrollList extends Component<ScrollListProps> {
  
  constructor(props: ScrollListProps) {
    super(props)
  }


  render() {
    const { items } = this.props;

    return (
    <View style={styles.container}>
       <ScrollView style={styles.scrollView}>
        {items.map((item, key) => (
          <AppLogins
            key = {key}
            time = {item.time}
          />
        ))}
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollView: {
    backgroundColor: '#F5FCFF',
    maxHeight: 200,
    width: '100%',
    marginHorizontal: 20,
    marginTop: -100,
    marginBottom: 50,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    
  },
});

export default ScrollList;
