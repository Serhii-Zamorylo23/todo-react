import { Component } from "react";


class Info extends Component {
    render() {
        const totalTasks = this.props.statistic.length;
        const completedTasks = this.props.statistic.filter(item => item.completed).length;

        return (
            <>
                <p>Всього завдань: {totalTasks}</p>
                <p>Виконано завдань: {completedTasks}</p>
            </>
        )
    }
}

export default Info