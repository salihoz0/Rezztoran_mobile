import {StyleSheet, Dimensions} from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
export default styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 40,
    borderColor: 'black',
    width: Dimensions.get('window').width / 1.2,
    height: Dimensions.get('window').height / 17,
  },
  text_input: {
    fontSize: 20,
    width: Dimensions.get('screen').width / 1.5,
    alignSelf: 'center',
    height: 48,
  },
});

/*
import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = () => (
  <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default MyComponent;
*/