import React from 'react';
import TabView, { SceneMap } from 'react-native-bottom-tabs';
import { Text } from 'react-native';
import { useState } from 'react';

const Article = () => <Text>Article</Text>;
const Albums = () => <Text>Albums</Text>;
const Contacts = () => <Text>Contacts</Text>;

export default function ThreeTabs() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'article', title: 'Article',  badge: '!' },
    {
      key: 'albums',
      title: 'Albums',
      badge: '5',
    },
    { key: 'contacts', title: 'Contacts' },
  ]);

  const renderScene = SceneMap({
    article: Article,
    albums: Albums,
    contacts: Contacts,
  });

  return (
    <>
    <TabView
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    </>
  );
}
