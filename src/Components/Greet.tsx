// type은 application을 만들 때 사용하고
// interface는 library를 만들 떄 사용하는 것이 좋다고 한다.
type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps): JSX.Element => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${props.messageCount} unread messages`
          : "Welcome guest"}
      </h2>
    </div>
  );
};
