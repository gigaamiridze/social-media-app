import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  profileStatsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  singleStatsContainer: {
    alignItems: 'center',
    rowGap: 5,
  },
  statNumber: {
    color: '#022150',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  statText: {
    color: '#79869F',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  statDivider: {
    height: 30,
    borderRightWidth: 1,
    borderColor: '#E9EFF1',
    marginHorizontal: 20,
  },
});
