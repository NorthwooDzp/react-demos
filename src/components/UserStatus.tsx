type InputProps = {
  isLoggedIn: boolean;
  isAdmin: boolean;
};

function yesNo(param: boolean): 'yes' | 'no' {
  return param ? 'yes' : 'no';
}

const UserStatus = ({ isAdmin, isLoggedIn }: InputProps) => {
  return (
    <div>
      <p>
        user is admin: {yesNo(isAdmin)}, user is Logged in: {yesNo(isLoggedIn)}
      </p>
      <p>{isLoggedIn && (isAdmin ? 'Hello Admin' : 'Hello User')}</p>
    </div>
  );
};

export default UserStatus;
