import { TextInput } from '@/components/Form';
import { RootState } from '@/store';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import SettingsProfileAvatar from './SettingsProfileAvatar';

type ProfileFormData = {
  fullName: string;
  username: string;
  email: string;
  password: string;
  dob: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
};

const SettingsEditProfile: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({ defaultValues: user ?? {} });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="lg:flex">
      <div className="shrink-0 lg:mr-14 mb-6">
        <SettingsProfileAvatar avatar={user?.avatar} />
      </div>
      <div className="flex-grow">
        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-7 gap-y-6">
            <TextInput
              label="Your Name"
              error={errors.fullName}
              {...register('fullName', { required: 'Name is required' })}
              placeholder="Your Name"
              required
            />

            <TextInput
              label="User Name"
              placeholder="User Name"
              error={errors.username}
              required
              {...register('username', { required: 'userName is required' })}
            />

            <TextInput
              label="Email"
              placeholder="Email"
              error={errors.email}
              type="email"
              required
              {...register('email', { required: 'Email is required' })}
            />

            <TextInput label="Password" placeholder="Password" error={errors.password} {...register('password')} />

            <TextInput
              type="date"
              label="Date of Birth"
              placeholder="Date of Birth"
              error={errors.dob}
              {...register('dob')}
            />

            <TextInput
              label="Present Address"
              placeholder="Present Address"
              error={errors.presentAddress}
              {...register('presentAddress')}
            />

            <TextInput
              label="Permanent Address"
              placeholder="Permanent Address"
              error={errors.permanentAddress}
              {...register('permanentAddress')}
            />

            <TextInput label="City" placeholder="City" error={errors.city} {...register('city')} />

            <TextInput
              label="Postal Code"
              placeholder="Postal Code"
              error={errors.postalCode}
              {...register('postalCode')}
            />

            <TextInput label="Counter" placeholder="Counter" error={errors.country} {...register('country')} />
          </div>
          <div className="mt-10 text-right">
            <input
              type="submit"
              value="Save"
              className="px-16 py-3.5 bg-dark text-light text-lg leading-5 text-center rounded-15px transition hover:bg-primary cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsEditProfile;
