import Menu from './components/Menu';
import data from './components/data/recipes.json';
import StarRating from './components/StarRating';
import ColorList from './components/ColorList';
import AddColorForm from './components/ColorForm';
import ColorProvider from './components/ColorProvider';
import { CheckboxProvider, useCheckboxContext } from './components/CheckboxContext.tsx';
import CheckBox from './components/CheckBox.tsx';


function App() {
  const { isSelected, onChange } = useCheckboxContext();
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
    </>
  );
}

export default App;
