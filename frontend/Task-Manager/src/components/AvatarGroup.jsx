import React from 'react';
import { getInitials, getAvatarBgColor } from '../utils/helper';

const AvatarGroup = ({ users = [], avatars = [], maxVisible = 3 }) => {
  // Normalize items to objects { name, profileImageUrl }
  let items = [];
  if (users && users.length > 0) {
    items = users.map(user => ({
      name: typeof user === 'object' ? user?.name : '',
      profileImageUrl: typeof user === 'object' ? user?.profileImageUrl : user
    }));
  } else if (avatars && avatars.length > 0) {
    items = avatars.map(avatar => ({
      name: '',
      profileImageUrl: avatar
    }));
  }

  return (
    <div className="flex items-center">
      {items.slice(0, maxVisible).map((item, index) => {
        if (item.profileImageUrl) {
          return (
            <img
              key={index}
              src={item.profileImageUrl}
              alt={item.name || `Avatar ${index}`}
              className="w-9 h-9 rounded-full border-2 border-white -ml-3 first:ml-0 object-cover"
            />
          );
        }
        return (
          <div
            key={index}
            className={`w-9 h-9 rounded-full border-2 border-white -ml-3 first:ml-0 flex items-center justify-center text-[10px] font-bold ${getAvatarBgColor(item.name)}`}
            title={item.name}
          >
            {getInitials(item.name) || '?'}
          </div>
        );
      })}

      {items.length > maxVisible && (
        <div className="w-9 h-9 flex items-center justify-center bg-blue-50 text-[11px] font-semibold rounded-full border-2 border-white -ml-3 z-10 text-gray-600">
          +{items.length - maxVisible}
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;