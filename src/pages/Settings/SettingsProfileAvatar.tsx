import { Avatar } from '@/components/common';
import { Icon } from '@/components/UI';
import { useAppDispatch } from '@/store/hooks';
import { setAvatar } from '@/store/slices/authSlice';

interface ISettingsProfileAvatarProps {
  avatar?: string;
}

const SettingsProfileAvatar: React.FC<ISettingsProfileAvatarProps> = ({ avatar }) => {
  const dispatch = useAppDispatch();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        dispatch(setAvatar({ image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label htmlFor="avatar" className="relative text-center cursor-pointer group">
        <Avatar size="xLarge" src={avatar ?? ''} />
        <span className="absolute right-0 bottom-0 inline-flex items-center justify-center bg-dark h-[30px] w-[30px] rounded-full group-hover:bg-primary transition">
          <Icon name="pencil" size={15} />
        </span>
      </label>
      <input
        type="file"
        name="avatar"
        id="avatar"
        className="hidden"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default SettingsProfileAvatar;
