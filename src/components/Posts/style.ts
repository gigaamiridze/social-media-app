import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  postsContainer: {
    paddingHorizontal: 26,
    marginTop: 30,
  },
  postContainer: {
    marginBottom: 20,
  },
  postHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInformation: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10
  },
  userImageWrapper: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#F35BAC',
    borderRadius: 50,
    padding: 3,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Inter',
    color: '#000000',
    lineHeight: 19,
    letterSpacing: 0.5
  },
  location: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Inter',
    color: '#79869F',
    lineHeight: 15,
    marginTop: 5,
  },
});