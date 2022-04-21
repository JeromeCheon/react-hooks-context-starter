// type은 application을 만들 때 사용하고
// interface는 library를 만들 떄 사용하는 것이 좋다고 한다.
type GreetProps = {
  name: string;
};

export const Greet = (props: GreetProps): JSX.Element => {
  return (
    <div>
      <h2>Welcome {props.name}! You have 10 unread messages</h2>
    </div>
  );
};
