import { useState } from 'react';

import { HiChevronUp, HiChevronDown } from 'react-icons/hi';

type props = {
    serviceName: string;
    error: boolean;
    data?: [];
};

export default function ResultOverviewItem({
    serviceName,
    error,
    data
}: props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    if (error) {
        return (
            <div className="flex flex-row justify-between">
                <div>{serviceName}</div>
                <div>ERROR</div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="flex flex-row justify-between">
                    <div>{serviceName}</div>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <HiChevronDown className="h-8 w-8" />
                        ) : (
                            <HiChevronUp className="h-8 w-8" />
                        )}
                    </button>
                </div>
                <div
                    className={`${
                        isOpen == false ? 'hidden' : ''
                    } overflow-hidden`}
                >
                    {isOpen ? (
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        );
    }
}
