import { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [isLove, setIsLove] = useState(false);

  return (
    <div className="bg-secondary min-h-screen">
      <div className="container mx-auto py-12">
        <h1 className={"text-3xl font-bold mb-6 " + (isLove && "text-primary")}>
          {isLove && "I love "} makromusic!
        </h1>
        <Button onClick={() => setIsLove(!isLove)}>Give Some Love</Button>
      </div>
    </div>
  );
};

export default App;
