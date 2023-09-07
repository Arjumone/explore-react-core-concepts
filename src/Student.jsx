export default function Student({grade=33,score=12}) {
  
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Score:{score}</p>
      <p>Grade:{grade}</p>
    </div>
  );
}
