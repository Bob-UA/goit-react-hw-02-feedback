function TotalStatistics({total, positiveFeedback}) {
    return (
      <ul>
        <li>
          Total: {total}
        </li>
        <li>
          Positive feedback: {positiveFeedback}%
        </li>
      </ul>
    );
}

export default TotalStatistics;