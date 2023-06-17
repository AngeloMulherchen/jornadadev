import './App.css';
import Video from "./pages/Video"

function App() {
  return (
    <div className="App">
      <div className='app_video'>
       <Video 
      likes={111}
      messages={222}
      shares={333}
      name="inthecompanyofstars"
      description="Brecker o goleiro"
      music="Musica épica"
      url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=d1a44acd-bef3-4b18-bafe-92fa0b26828a"
      />
      <Video 
      likes={521}
      messages={122}
      shares={333}
      name="Pedro"
      description="Bird olhandopara a camera"
      music="Clap Your Hand"
      url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/bird.mp4?alt=media&token=52abbeec-ff95-4acb-808e-5a4b4977d1da"
      />
      <Video 
      likes={111}
      messages={222}
      shares={333}
      />
      <Video 
      likes={111}
      messages={222}
      shares={333}
      />
        </div>
    </div>
  );
}

export default App;
