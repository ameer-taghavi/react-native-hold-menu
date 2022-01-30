import React, { memo, useMemo, useCallback } from 'react';
import { Alert, StyleSheet, Text } from 'react-native';

import StyleGuide from '../../utilities/styleGuide';

import MessageItem from './MessageItem';
import { mockWhatsAppData } from '../../utilities/data';
import { useAppContext } from '../../hooks/useAppContext';
import { HoldMenuFlatList } from 'react-native-hold-menu';

const ChatPage = () => {
  const { theme } = useAppContext();
  const data = useMemo(() => mockWhatsAppData(1000), []);

  const replyMessage = useCallback((messageId: string) => {
    Alert.alert(`[ACTION]: REPLY' ${messageId}`);
  }, []);

  const copyMessage = useCallback((messageText: string) => {
    Alert.alert(`[ACTION]: COPY' ${messageText}`);
  }, []);

  const editMessage = useCallback((messageId: string, messageText: string) => {
    Alert.alert(`[ACTION]: EDIT' ${messageId} - ${messageText}`);
  }, []);

  const myMenu = [
    {
      text: 'پاسخ پیام',
      icon: () => <Text style={styles.iconStyle}>R</Text>,
      onPress: replyMessage,
      textStyle: { ...styles.textStyle },
    },
    {
      text: 'کپی',
      icon: () => <Text style={styles.iconStyle}>C</Text>,
      onPress: copyMessage,
      textStyle: { ...styles.textStyle },
    },
    {
      text: 'ویرایش',
      icon: () => <Text style={styles.iconStyle}>H</Text>,
      onPress: editMessage,
      textStyle: { ...styles.textStyle },
    },
    {
      text: 'سنجاق',
      icon: () => <Text style={styles.iconStyle}>P</Text>,
      onPress: () => {},
      textStyle: { ...styles.textStyle },
    },
    {
      text: 'ارسال',
      icon: () => <Text style={styles.iconStyle}>F</Text>,
      onPress: () => {},
      textStyle: { ...styles.textStyle },
    },
    {
      text: 'حذف',
      icon: () => <Text style={styles.iconStyle}>D</Text>,
      onPress: () => {},
      textStyle: { ...styles.textStyle },
    },
  ];

  const otherMenu = [
    {
      text: 'Reply',
      // icon: 'corner-down-left',
      onPress: () => {},
    },
    {
      text: 'Copy',
      // icon: 'copy',
      onPress: copyMessage,
    },
    {
      text: 'Pin',
      // icon: 'map-pin',
      onPress: () => {},
    },
    {
      text: 'Forward',
      // icon: 'corner-up-right',
      onPress: () => {},
    },
    {
      text: 'Delete',
      // icon: 'trash-2',
      onPress: () => {},
    },
  ];

  const renderMessage = useCallback(
    ({ item }) => (
      <MessageItem
        senderMenu={myMenu}
        receiverMenu={otherMenu}
        message={item}
      />
    ),
    [myMenu, otherMenu]
  );

  const keyExtractor = useCallback(item => item.id.toString(), []);

  const themeStyles = useMemo(() => {
    return {
      container: {
        backgroundColor: StyleGuide.palette.whatsapp[theme].chatBackground,
      },
    };
  }, [theme]);

  return (
    <HoldMenuFlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderMessage}
      style={themeStyles.container}
      contentContainerStyle={styles.contentContainer}
      windowSize={5}
      maxToRenderPerBatch={4}
      inverted
    />
  );
};

export default memo(ChatPage);

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: StyleGuide.spacing,
  },
  textStyle: {
    textAlign: 'right',
    marginRight: 16,
    color: '#fff',
  },
  iconStyle: {
    color: '#fff',
  },
});
