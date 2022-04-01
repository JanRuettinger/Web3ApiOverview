type props = {
    serviceName: string;
    error: boolean;
    elapsedTime?: number;
    numItems?: number;
};

export default function ResultOverviewItem({
    serviceName,
    error,
    elapsedTime,
    numItems
}: props) {
    if (error) {
        return (
            <div className="grid grid-cols-3 gap-4">
                <div className="text-center">{serviceName}</div>
                <div className="text-center">{0} </div>
                <div className="text-center">Error</div>
            </div>
        );
    } else {
        return (
            <div className="grid grid-cols-3 gap-4">
                <div className="text-center">{serviceName}</div>
                <div className="text-center">{numItems} </div>
                <div className="text-center">{Math.round(elapsedTime!)}</div>
            </div>
        );
    }
}
