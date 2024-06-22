import css from './FriendListItem.module.css'

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    return (
    <div className={css.FriendListItem}>
        <img src={avatar} alt="avatar" width="48"/>
        <p className={css.friendsListText}>{name}</p>
        <p className={css.friendsListText}>{isOnline ? "Online" : "Offline"}</p>
</div>

    )
}