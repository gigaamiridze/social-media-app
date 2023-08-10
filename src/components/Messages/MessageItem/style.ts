import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  messageItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16,
  },
  contactAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactInitials: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
