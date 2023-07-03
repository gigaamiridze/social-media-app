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
  postImage: {
    marginVertical: 16,
    borderRadius: 16,
    width: '100%',
  },
  statisticsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 25,
  },
  statisticWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  statisticNumber: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Inter',
    color: '#79869F',
  },
});