import css from './FriendList.module.css';
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friends}>
      {friends.map(({ avatar, id, name, isOnline }) => (
        <li className={css.item} key={id} id={id}>
          <span className={isOnline ? css.online : css.ofline}></span>
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};
