import './App.css';
import AddNoteFrom from './components/AddNoteFrom';
import NoteList from './components/NoteList';

function App() {
  return (
    <div className="App">
      <NoteList/>
      <AddNoteFrom/>
    </div>
  );
}

export default App;
