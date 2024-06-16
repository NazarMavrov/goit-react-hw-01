import FriendListItem from '../FriendListItem/FriendListItem'


export default function FriendList({ friends }) {
    return (<ul>
        {friends.map((friend) => (<li key={friend.id}><FriendListItem friend={friend}/></li>))
        
        
        /* {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id}><FriendListItem name={name} avatar={avatar} isOnline={isOnline} /></li>))
        } */}
</ul>
)
}