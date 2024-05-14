import Child from "./Child";
import { T } from "./T";

export default function Parent() {
    return (
        <div>
            <T token="parent" />
            <Child />

        </div>
    )
}