import UserArea from './UserArea'

export default function Header({ userToken, setUserToken }) {
  return (
    <nav>
      <h1 className='app-title'>Helping Paws</h1>
      <UserArea userToken={userToken} setUserToken={setUserToken} />
    </nav>
  );
}
