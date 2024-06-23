import css from './FriendListItem.module.css'
import clsx from "clsx"

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    const statusClasses = clsx(css.friendsListText, isOnline ? css.Online : css.Offline )

    return (
    <div className={css.FriendListItem}>
        <img src={avatar} alt="avatar" width="48"/>
        <p className={css.friendsListText}>{name}</p>
        <p className={statusClasses} >{isOnline ? "Online" : "Offline"}</p>
</div>

    )
}