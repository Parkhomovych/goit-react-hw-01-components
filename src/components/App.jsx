import { Profile } from './Profile/Profile';
import profile from './information/user.json';

import { Statistics } from './Statistics/Statistics';
import statistics from './information/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from '../components/information/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './information/transactions.json';

export const App = () => (
  <>
    <Profile
      username={profile.username}
      tag={profile.tag}
      location={profile.location}
      avatar={profile.avatar}
      stats={profile.stats}
    />
    <Statistics statistics={statistics} />
    <FriendList friends={friends} />
    <TransactionHistory transactions={transactions} />
  </>
);
