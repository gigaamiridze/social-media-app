import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  titlesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 7,
    paddingTop: 25,
    paddingBottom: 15,
  },
  messagesTitle: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#102C56',
  },
  messageQtyTitle: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    color: '#FD92C6',
  },
});
