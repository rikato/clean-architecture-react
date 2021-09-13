interface ITodoProps {
  title: string;
  completed: boolean;
  onCompleted: () => void;
}

export const Todo: React.FC<ITodoProps> = ({
  title,
  completed,
  onCompleted,
}) => {
  return (
    <div>
      <p>{title}</p>
      <span>{completed.toString()}</span>
      <button onClick={onCompleted}>complete</button>
    </div>
  );
};
