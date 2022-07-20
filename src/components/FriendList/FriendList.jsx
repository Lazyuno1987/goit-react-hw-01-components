import css from './FriendList.module.css'
import PropTypes from "prop-types";
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
    return(
    <ul className={css.friendlist}>
            {friends.map(friend => (
             <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    isOnline={friend.isOnline}
                    name={friend.name}
                
                />
            )
 )}
        </ul>
    )
}
FriendList.prototype = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired
      })
  )

}