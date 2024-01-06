import { useSelector } from "react-redux"
export default function About() {
    const count = useSelector(state => state.count)
    return (
        <div>About {count}</div>
    )
}
