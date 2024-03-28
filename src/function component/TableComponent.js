function TableComponent() {
  return (
    <div>
      <table>
        <tr>
        <th>React</th>
        <th>Angular</th>
        <th>Vue</th>
        </tr>
        <tr>
            <td>React is a UI library known for its efficiency and versatility</td>
            <td>Angular is a full-fledged framework based on TypeScript, relying on real DOM for performance</td>
            <td>Vue is a progressive lightweight framework, easier to learn from scratch compared to React </td>
            
        </tr>
        <tr>
            <td>It utilizes a virtual DOM implementation, contributing to its fast performance </td>
            <td>It offers a comprehensive solution for creating complex applications</td>
            <td>Suited for smaller, less complex apps, and can be easier to integrate</td>
        </tr>
      </table>
    </div>
  )
}

export default TableComponent
