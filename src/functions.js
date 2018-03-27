export function sorting(events) => {
    console.log("sorting!!!");
    const events = [...this.state.events];
    events.sort((a, b) => (a.timestamp - b.timestamp));
    this.setState({ events })
}