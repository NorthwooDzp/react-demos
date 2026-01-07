type InputProps = {
  temperature: number;
};

const Weather = ({ temperature }: InputProps) => {
  return (
    <>
      <h3>Temperature outside is {temperature}</h3>
      {(() => {
        if (temperature > 25) {
          return <p>It's hot outside</p>;
        } else if (temperature > 15) {
          return <p>It's nice outside</p>;
        }
        return <p>It's cold outside</p>;
      })()}
    </>
  );
};

export default Weather;
