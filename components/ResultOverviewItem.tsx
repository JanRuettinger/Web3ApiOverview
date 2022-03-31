type props = {
    serviceName: string;
    numItems: number;
    elapsedTime: number;
    dataFetched: boolean;
};

export default function ResultOverviewItem({
    serviceName,
    numItems,
    elapsedTime,
    dataFetched
}: props) {
    return (
        <div>
            {dataFetched ? (
                <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">{serviceName}</div>
                    <div className="text-center">{numItems} </div>
                    <div className="text-center">
                        {Math.round(elapsedTime)}{' '}
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    );
}
