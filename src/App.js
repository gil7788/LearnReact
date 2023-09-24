import Menu from './components/Menu';
import data from './components/data/recipes.json';
import StarRating from './components/StarRating';
import ColorList from './components/ColorList';
import AddColorForm from './components/ColorForm';
import ColorProvider from './components/ColorProvider';
import { CheckboxProvider, useCheckboxContext } from './components/CheckboxContext.tsx';
import CheckBox from './components/CheckBox.tsx';
import TextInput from './components/TextInput.tsx';
import GitHubUser from './components/GitHubUser.tsx';
import FakeUsers from './components/FakeUsers.tsx';

import { useState } from 'react';

function App() {
  const { isSelected, onChange } = useCheckboxContext();
  const [searchUser, setSearchUser] = useState('');

  const onTextSubmit = (text: string) => {
    setSearchUser(text);
    console.log(text);
  }

  return (
    <>
      <Menu recipes={data} />
      <StarRating totalStars={5} />
      <ColorProvider>
        <AddColorForm />
        <ColorList />
      </ColorProvider>

      
      <CheckboxProvider>
        <CheckBox 
          label="Toggle Juggling patterns"
          checked={isSelected}
          onChange={onChange}
        />
      </CheckboxProvider>
      < TextInput label='User name' onTextSubmit={onTextSubmit}/>
      <GitHubUser login={searchUser} />
      <FakeUsers amount={1000}/>
    </>
  );
}

export default App;
