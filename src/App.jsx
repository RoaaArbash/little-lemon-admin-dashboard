import { useState, useEffect } from "react";

export default function JokeComponent() {
  const [joke, setJoke] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 

  const fetchJoke = () => {
    setIsLoading(true); 
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchJoke();
  }, []);

  if (isLoading) {
    return <h1> data pending ... ⏳</h1>;
  }

  return (
    <div>
      <h1> new joke:</h1>
      <p><strong>Setup:</strong> {joke.setup}</p>
      <p><strong>Punchline:</strong> {joke.punchline}</p>
      <button onClick={fetchJoke}>Get Another Joke</button>
    </div>
  );
}