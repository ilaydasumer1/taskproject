import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

const App = () => {
  const [state, setstate] = useState(false)
  const openAlert = () => {
    setstate(true)
    setTimeout(function () {
      if (!state) {
        setstate(false)
      }
    }, 4000);
  }



  return (
    <div className="bg-secondary min-h-screen">
      <div className="container mx-auto py-12">
        <Button onClick={() => { openAlert() }}>Give Some Love</Button>
        <Alert className='' open={state} title='title' description='decription' type='success' />
      </div>
    </div>
  );
};

export default App;
