import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  messageItemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: 16,
    marginBottom: 15,
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
  contactDetails: {
    width: 283,
    paddingTop: 3,
  },
  flexBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contactName: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 14,
    color: '#102C56',
  },
  timeSend: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    color: '#8A94A4',
  },
  messageContent: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    color: '#8A94A4',
    marginBottom: 15,
  },
});
