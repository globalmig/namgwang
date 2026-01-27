import { ProductNavigatorProps } from "@/types/common";

export default function ProductNavigator({ prevItem, nextItem, onPrev, onNext}: ProductNavigatorProps) {

    return (
        <ul className="product-nav">
            <li onClick={onPrev}><span>이전 제품</span>{prevItem?.name}</li>
            <li onClick={onNext}><span>다음 제품</span>{nextItem?.name}</li>
        </ul>
    )
}