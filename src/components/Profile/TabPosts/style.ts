import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  tabPostsContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
  },
  imagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 20,
  },
  tabImage: {
    maxWidth: '47%',
    maxHeight: 112,
  },
  imageUpcomingRowsContainer: {
    marginTop: 10,
  },
  lastImageContainer: {
    marginBottom: 30,
  },
});
