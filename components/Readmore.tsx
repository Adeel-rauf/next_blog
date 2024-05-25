import { Button } from "./ui/button";
export default function Readmore(props:{children:any}) {
    return (
        <Button className="w-full mt-3 dark:text-white text-lg font-serif">
        {props.children}</Button>
    );
}
